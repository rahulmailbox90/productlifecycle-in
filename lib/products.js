// small sample product data
export const products = [
  {
    slug: "settlement-hub",
    title: "Settlement Hub",
    short: "Trade settlement & reconciliation demo for PMs",
    tagline: "Demo of trade lifecycle: booking → affirmation → settlement → reconciliation",
    personas: ["Operations PM", "Clearing Analyst"],
    kpis: ["Settlement rate", "Reconciliation accuracy"],
    brd: `# BRD - Settlement Hub

**Summary:** Reduce manual touchpoints in settlement of equity trades.

**Goals**
- Reduce settlement failures by 40% in 6 months
- Automate matching with custodians

**Key features**
- Trade injection
- Matching engine
- Exception handling dashboard

`,
    fds: `# FSD - Settlement Hub

**Feature:** Trade injection API
- Input: trade id, instrument, qty, price
- Output: 200 OK + trade object

**Feature:** Matching workflow
- Automated match by isoRef / clientRef
`
  },
  {
    slug: "client-onboarding",
    title: "Client Onboarding",
    short: "KYC & onboarding workflows",
    tagline: "Walk through an onboarding funnel, KYC checks & approvals",
    personas: ["Product Manager", "Compliance Analyst"],
    kpis: ["Time-to-onboard", "Drop-off rate"],
    brd: `# BRD - Client Onboarding

**Summary:** Streamline KYC flow for corporate clients.

**Goals**
- Reduce avg time-to-onboard to 3 days
`,
    fds: `# FSD - Client Onboarding

**Feature:** KYC document upload
- Allowed formats: pdf, png
- Validation: size < 10MB
`
  }
]
