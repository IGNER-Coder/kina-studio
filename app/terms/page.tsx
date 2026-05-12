import type { Metadata } from "next";
import KMark from "@/components/ui/KMark";

export const metadata: Metadata = {
  title: "Terms of Use — Kina Studio",
  description: "Terms and conditions for engaging Kina Studio's web design and branding services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing kinastudio.co.ke or engaging Kina Studio's services, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website or our services.`,
  },
  {
    title: "2. Services",
    body: `Kina Studio provides web design, web development, e-commerce builds, digital strategy, and ongoing digital retainer services. The specific scope of any engagement is agreed upon in a separate project proposal or service agreement issued to the client before work commences.`,
  },
  {
    title: "3. Project Engagements",
    body: `All paid projects are governed by a written project proposal that outlines:\n\n• Scope of work\n• Timeline and key milestones\n• Payment schedule\n• Revision rounds included\n\nWork commences only after a deposit (as specified in the proposal) is received. Kina Studio reserves the right to pause or discontinue work if agreed payment milestones are not met.`,
  },
  {
    title: "4. Intellectual Property",
    body: `Upon receipt of full payment for a project, all deliverables — including design files, code, and written content produced by Kina Studio — are transferred to the client. Kina Studio retains the right to display the completed work in our portfolio unless the client requests otherwise in writing.\n\nAny third-party assets (fonts, stock images, plugins) used in a project remain subject to their respective licences. It is the client's responsibility to maintain valid licences for ongoing use of such assets.`,
  },
  {
    title: "5. Client Responsibilities",
    body: `Clients are responsible for:\n\n• Providing accurate and complete information necessary to complete the project\n• Supplying content (text, images, brand assets) within agreed timelines\n• Responding to review requests within a reasonable timeframe\n• Ensuring they have the legal right to use any content or trademarks they supply\n\nDelays caused by late client feedback or content delivery may affect the project timeline.`,
  },
  {
    title: "6. Revisions and Changes",
    body: `The number of revision rounds included is specified in the project proposal. Additional revisions beyond the agreed scope may be billed at an hourly rate. Significant changes to project scope after work has commenced will be treated as a new scope item and priced accordingly.`,
  },
  {
    title: "7. Limitation of Liability",
    body: `Kina Studio's liability in connection with any project is limited to the total fees paid by the client for that specific project. We are not liable for any indirect, incidental, or consequential damages arising from the use of deliverables, including loss of revenue, data, or business opportunity.\n\nKina Studio does not guarantee specific search engine rankings, conversion rates, or business outcomes. Results depend on many factors outside our control.`,
  },
  {
    title: "8. Confidentiality",
    body: `Both parties agree to keep confidential any non-public business information shared during a project engagement. This obligation survives the end of the project.`,
  },
  {
    title: "9. Governing Law",
    body: `These Terms are governed by the laws of Kenya. Any disputes arising from these Terms or from a project engagement will first be referred to good-faith negotiation. If unresolved, disputes will be subject to the jurisdiction of the courts of Nairobi, Kenya.`,
  },
  {
    title: "10. Changes to These Terms",
    body: `Kina Studio may update these Terms from time to time. The current version will always be available at kinastudio.co.ke/terms. Continued use of our services after an update constitutes acceptance of the revised Terms.`,
  },
  {
    title: "11. Contact",
    body: `For questions about these Terms, please contact us:\n\nEmail: hello@kinastudio.co.ke\nLocation: Nairobi, Kenya`,
  },
];

export default function TermsPage() {
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
          Terms of Use
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
