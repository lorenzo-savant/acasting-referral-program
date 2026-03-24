const EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="sv" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Din vän bjuder in dig till Acasting</title>
  <!--[if mso]>
  <style>
    table { border-collapse: collapse; }
    td { font-family: Arial, sans-serif; }
  </style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#0a0a0a;">
    {{REFERRER_NAME}} vill att du ska gå med i Acasting – du får 7 dagars gratis Premium!
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#111111;border-radius:16px;border:1px solid #222222;overflow:hidden;">
          <tr>
            <td style="padding:32px 40px 24px;text-align:center;border-bottom:1px solid #222222;">
              <img src="https://www.acasting.se/assets/acasting-logo-white.svg" alt="Acasting" width="140" style="display:inline-block;max-width:140px;height:auto;" />
            </td>
          </tr>
          <tr>
            <td style="padding:48px 40px 32px;text-align:center;">
              <div style="font-size:48px;margin-bottom:20px;">🎁</div>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 24px;">
                <tr>
                  <td style="background-color:#2a1a44;border:1px solid rgba(200,162,255,0.2);border-radius:50px;padding:6px 18px;">
                    <span style="font-size:12px;font-weight:700;color:#c8a2ff;text-transform:uppercase;letter-spacing:0.08em;">Referral-inbjudan</span>
                  </td>
                </tr>
              </table>
              <h1 style="margin:0 0 16px;font-size:28px;font-weight:800;color:#ffffff;line-height:1.2;letter-spacing:-0.02em;">{{REFERRER_NAME}} tycker att du<br/>ska gå med i Acasting</h1>
              <p style="margin:0;font-size:16px;color:#aaaaaa;line-height:1.7;">Du har blivit inbjuden att gå med i Acasting – Sveriges ledande plattform för casting och underhållningsbranschen. Registrera dig nu och få <strong style="color:#c8a2ff;">7 dagars gratis Premium</strong>.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a1a1a;border:1px solid #333333;border-radius:12px;">
                <tr>
                  <td style="padding:16px 20px;text-align:center;">
                    <span style="font-size:14px;color:#e8c547;font-weight:600;">⏰ Registrera dig inom 48 timmar och få 14 dagars bonus istället!</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;text-align:center;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background-color:#c8a2ff;border-radius:10px;">
                    <a href="{{REFERRAL_LINK}}" target="_blank" style="display:inline-block;padding:16px 48px;font-size:16px;font-weight:700;color:#0a0a0a;text-decoration:none;letter-spacing:-0.01em;">Gå med i Acasting &rarr;</a>
                  </td>
                </tr>
              </table>
              <p style="margin:16px 0 0;font-size:13px;color:#666666;">Eller kopiera och klistra in denna länk i din webbläsare:</p>
              <p style="margin:4px 0 0;font-size:13px;color:#c8a2ff;word-break:break-all;">{{REFERRAL_LINK}}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #222222;padding-top:32px;">
                <tr>
                  <td style="padding-top:32px;">
                    <h2 style="margin:0 0 20px;font-size:18px;font-weight:700;color:#ffffff;letter-spacing:-0.01em;">Vad du får med Premium</h2>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td width="44" valign="top">
                    <div style="width:36px;height:36px;border-radius:8px;background-color:#2a1a44;text-align:center;line-height:36px;font-size:16px;">🎯</div>
                  </td>
                  <td style="padding-left:12px;" valign="top">
                    <p style="margin:0;font-size:15px;font-weight:600;color:#ffffff;">Prioriterad profil</p>
                    <p style="margin:4px 0 0;font-size:13px;color:#888888;line-height:1.5;">Hamna högst upp i sökresultat när företag letar talanger.</p>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td width="44" valign="top">
                    <div style="width:36px;height:36px;border-radius:8px;background-color:#2a1a44;text-align:center;line-height:36px;font-size:16px;">🤖</div>
                  </td>
                  <td style="padding-left:12px;" valign="top">
                    <p style="margin:0;font-size:15px;font-weight:600;color:#ffffff;">Digital Twin</p>
                    <p style="margin:4px 0 0;font-size:13px;color:#888888;line-height:1.5;">Licensiera ditt utseende för AI-bilder och tjäna pengar.</p>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="44" valign="top">
                    <div style="width:36px;height:36px;border-radius:8px;background-color:#2a1a44;text-align:center;line-height:36px;font-size:16px;">🤖</div>
                  </td>
                  <td style="padding-left:12px;" valign="top">
                    <p style="margin:0;font-size:15px;font-weight:600;color:#ffffff;">AI-coachen Mira</p>
                    <p style="margin:4px 0 0;font-size:13px;color:#888888;line-height:1.5;">Personlig AI-assistent som hjälper med jobb, profil och ansökningar.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;background-color:#0a0a0a;border-top:1px solid #222222;text-align:center;">
              <p style="margin:0 0 8px;font-size:13px;color:#666666;">Du fick detta mejl för att {{REFERRER_NAME}} bjöd in dig till Acasting.</p>
              <p style="margin:0 0 16px;font-size:13px;color:#666666;"><a href="https://www.acasting.se" style="color:#c8a2ff;text-decoration:none;">acasting.se</a></p>
              <p style="margin:0;font-size:11px;color:#444444;">© Acasting. All rights reserved. &middot; <a href="https://www.acasting.se/privacy-policy" style="color:#444444;text-decoration:none;">Integritetspolicy</a> &middot; <a href="https://www.acasting.se/terms-of-use" style="color:#444444;text-decoration:none;">Villkor</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

function replaceVariables(template: string, variables: Record<string, string>): string {
  let result = template
  for (const [key, value] of Object.entries(variables)) {
    result = result.split(`{{${key}}}`).join(value)
  }
  return result
}

export default async function PreviewEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; link?: string }>
}) {
  const params = await searchParams
  
  const referrerName = params.name || 'Anna Svensson'
  const referralLink = params.link || 'https://www.acasting.se/signup?ref=aB3x9kLm'

  const html = replaceVariables(EMAIL_TEMPLATE, {
    REFERRER_NAME: referrerName,
    REFERRAL_LINK: referralLink,
  })

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">E-postpreview</h1>
          <div className="flex gap-4">
            <a
              href="/preview-email?name=Anna%20Svensson&link=https://www.acasting.se/signup?ref=aB3x9kLm"
              className="px-4 py-2 rounded-lg bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
            >
              Exempel 1
            </a>
            <a
              href="/preview-email?name=Erik%20Johansson&link=https://www.acasting.se/signup?ref=xyz123abc"
              className="px-4 py-2 rounded-lg bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
            >
              Exempel 2
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4">
          <iframe
            srcDoc={html}
            className="w-full h-[80vh] border-0"
            title="E-postpreview"
          />
        </div>
      </div>
    </div>
  )
}
