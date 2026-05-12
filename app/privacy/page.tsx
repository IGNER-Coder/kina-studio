import type { Metadata } from "next";
import KMark from "@/components/ui/KMark";

export const metadata: Metadata = {
  title: "Privacy Policy — Kina Studio",
  description: "How Kina Studio collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: `Kina Studio is a web design and branding studio based in Nairobi, Kenya. We build digital foundations for African startups and corporates. This Privacy Policy explains how we handle personal information submitted through our website at kinastudio.co.ke.`,
  },
  {
    title: "2. Information We Collect",
    body: `When you use our contact form, we collect the following information you voluntarily provide:\n\n• Your name\n• Your business name\n• Your phone number or WhatsApp contact\n• Your message or project brief\n\nWe do not collect payment information through this website. We do not use tracking cookies or analytics beyond what is necessary to serve the website.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information you submit solely to:\n\n• Respond to your project inquiry\n• Assess whether we can assist you\n• Follow up on ongoing projects if you become a client\n\nWe do not sell, rent, or trade your personal information to any third party.`,
  },
  {
    title: "4. Third-Party Services",
    body: `Our contact form is processed by Formspree (formspree.io), a third-party form submission service. When you submit the contact form, your data is transmitted to and stored by Formspree in accordance with their Privacy Policy. We encourage you to review Formspree's privacy practices at formspree.io/legal/privacy-policy.\n\nOur website is hosted on Vercel. Standard server logs (IP addresses, access times) may be retained by Vercel in the normal course of hosting operations.`,
  },
  {
    title: "5. Data Retention",
    body: `We retain your contact information for as long as it is necessary to respond to your inquiry and manage any resulting business relationship. If you would like us to delete your information, please contact us and we will do so within 14 business days.`,
  },
  {
    title: "6. Your Rights",
    body: `Under the Kenya Data Protection Act, 2019, you have the right to:\n\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data\n• Withdraw consent at any time\n\nTo exercise any of these rights, please contact us at hello@kinastudio.co.ke.`,
  },
  {
    title: "7. Security",
    body: `We take reasonable measures to protect your information. However, no internet transmission is completely secure. We recommend you do not include highly sensitive information in your initial inquiry.`,
  },
  {
    title: "8. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. Continued use of the website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "9. Contact",
    body: `If you have any questions about this Privacy Policy, please contact us:\n\nEmail: hello@kinastudio.co.ke\nLocation: Nairobi, Kenya`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-parchment">
      {/* Nav bar strip */}
      <div className="border-b border-border px-[clamp(1.25rem,5vw,2.5rem)] h-[60px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5" aria-label="Back to Kina Studio">
          <KMark size="md" />
          <div className="flex flex-col">
            <span className="font-serif text-[15px] text-parchment tracking-[4px] leading-none">KINA</span>
            <span className="block h-px w-full bg-gold/40 my-[3px]" />
            <span className="text-[10px] text-gold tracking-[5px]">STUDIO</span>
          </div>
        </a>
        <a
          href="/"
          className="text-xs text-muted tracking-[2px] hover:text-gold transition-colors uppercase"
        >
          ← Back to home
        </a>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-[clamp(1.25rem,5vw,2.5rem)] py-[clamp(3rem,8vw,6rem)]">
        <p className="text-[10px] tracking-[4px] text-gold mb-4 uppercase">Legal</p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] leading-[1.1] text-parchment mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted mb-12">
          Effective date: 1 June 2025 &nbsp;·&nbsp; Nairobi, Kenya
        </p>

        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-serif text-[1.1rem] text-parchment mb-3">{s.title}</h2>
              <div className="text-sm font-light text-gray leading-[1.9] whitespace-pre-line">
                {s.body}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border text-xs text-muted tracking-[1px]">
          © {new Date().getFullYear()} Kina Studio — Nairobi, Kenya
        </div>
      </main>
    </div>
  );
}
