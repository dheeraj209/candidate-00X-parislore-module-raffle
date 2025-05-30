
# ParisLore Raffle Widget

This is a standalone raffle purchase widget for [ParisLore.com](https://parislore.com), built as part of the technical assessment for the Web Developer role at Alatree Ventures.

## 🎯 Objective

Enable users to purchase raffle tickets using a Stripe Checkout flow and receive a confirmation message after successful payment.

## 🛠️ Features

- Elegant, rounded card-based UI matching ParisLore brand guidelines
- Stripe Checkout session triggered via button click
- Mock endpoint integration for:
  - `/api/create-checkout-session`
  - `/api/stripe-webhook`
- Post-payment success message with ticket count

## 🧪 Tech Stack

- HTML, CSS, Vanilla JavaScript
- Stripe (Mock API integration)
- Deployed on Netlify

## 🖼️ UI Elements

- Primary Coral: `#E91E63`
- Accent Charcoal: `#424242`
- Typography:
  - Headlines: **Playfair Display**
  - Body Text: **Lora**
- Soft rounded cards and smooth fade/slide animations

## 🚀 Live Demo

[🔗 Click here to view live on Netlify](https://your-netlify-site.netlify.app)

## 📁 Files Included

- `index.html` – Demo page with the widget
- `widget.js` – Self-contained JS for Stripe integration
- `style.css` – Optional style sheet (if separated)
  
## 📦 Mock API Behavior

### Create Checkout Session:
```http
POST /api/create-checkout-session
→ Response: { "sessionId": "test_session_123" }

