import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_TEMPLATES_DIR = path.join(process.cwd(), "templates");

interface ReferralEmailData {
  to: string;
  referrerName: string;
  referralLink: string;
}

function getTemplateContent(templateName: string): string {
  const templatePath = path.join(EMAIL_TEMPLATES_DIR, templateName);
  return fs.readFileSync(templatePath, "utf-8");
}

function replaceTemplateVariables(
  template: string,
  variables: Record<string, string>
): string {
  let result = template;
  for (const [key, value] of Object.entries(variables)) {
    const placeholder = `{{${key}}}`;
    result = result.split(placeholder).join(value);
  }
  return result;
}

export async function sendReferralEmail({
  to,
  referrerName,
  referralLink,
}: ReferralEmailData) {
  const template = getTemplateContent("referral-email.html");
  const html = replaceTemplateVariables(template, {
    REFERRER_NAME: referrerName,
    REFERRAL_LINK: referralLink,
  });

  const { data, error } = await resend.emails.send({
    from: "Acasting <noreply@acasting.se>",
    to,
    subject: `${referrerName} tycker att du ska gå med i Acasting!`,
    html,
  });

  if (error) {
    console.error("Failed to send referral email:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }

  return data;
}

export async function sendReferralEmailBatch(
  emails: ReferralEmailData[]
) {
  const template = getTemplateContent("referral-email.html");

  const results = await Promise.allSettled(
    emails.map(async (email) => {
      const html = replaceTemplateVariables(template, {
        REFERRER_NAME: email.referrerName,
        REFERRAL_LINK: email.referralLink,
      });

      return resend.emails.send({
        from: "Acasting <noreply@acasting.se>",
        to: email.to,
        subject: `${email.referrerName} tycker att du ska gå med i Acasting!`,
        html,
      });
    })
  );

  const successful = results.filter((r) => r.status === "fulfilled").length;
  const failed = results.filter((r) => r.status === "rejected").length;

  return { successful, failed, results };
}