# Acasting Referral-program

## Kom igång

```bash
npm install
npm run dev
```

## Referralsida

Öppna http://localhost:3000 för att se referralsidan.

## Preview e-postmall

För att förhandsvisa e-postmallen, öppna:

```
http://localhost:3000/preview-email
```

Du kan också testa med anpassade värden:

```
http://localhost:3000/preview-email?name=Ditt%20Namn&link=https://dittlänk.se
```

## Stripe-kuponger

### Kupong: Referral-mottagare – 7 dagars gratis

```bash
stripe coupons create \
  --duration=once \
  --percent-off=100 \
  --duration-in-months=1 \
  --name="Referral: 7 dagars gratis Premium" \
  --metadata[type]=referral_receiver \
  --metadata[days]=7
```

### Kupong: Referral-mottagare Bonus – 14 dagar

```bash
stripe coupons create \
  --duration=once \
  --percent-off=100 \
  --name="Referral: 14 dagars bonus Premium" \
  --metadata[type]=referral_receiver_bonus \
  --metadata[days]=14
```

### Kupong: Referral-givare – 1 månad gratis

```bash
stripe coupons create \
  --duration=once \
  --percent-off=100 \
  --name="Referral: 1 mån gratis Premium" \
  --metadata[type]=referral_giver \
  --metadata[months]=1
```

### Kupong: Referral-givare Bonus – +1 månad per 3 referrals

```bash
stripe coupons create \
  --duration=once \
  --percent-off=100 \
  --name="Referral: Bonus +1 mån (3 refs)" \
  --metadata[type]=referral_giver_milestone \
  --months=1 \
  --metadata[milestone]=3
```

## Miljövariabler

```env
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

STRIPE_COUPON_RECEIVER_ID=coupon_7days_free
STRIPE_COUPON_RECEIVER_BONUS_ID=coupon_14days_bonus
STRIPE_COUPON_GIVER_ID=coupon_1month_free
STRIPE_COUPON_GIVER_MILESTONE_ID=coupon_milestone_bonus

RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
```

## Checklista

- [ ] Skapa kuponger i Stripe Dashboard
- [ ] Lägg till miljövariabler
- [ ] Konfigurera Stripe-webhook
- [ ] Verifiera e-postdomän i Resend
- [ ] Testa i testläge med `sk_test_...`
