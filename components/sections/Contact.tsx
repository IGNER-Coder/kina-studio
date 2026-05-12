"use client";
import { useForm, ValidationError } from "@formspree/react";
import SectionTag from "@/components/ui/SectionTag";
import DepthRings from "@/components/ui/DepthRings";

const FORM_ID = "xpqbbywz";

const fields = [
  { label: "YOUR NAME",        name: "name",     type: "text", placeholder: "John Kamau",               required: true  },
  { label: "YOUR BUSINESS",    name: "business", type: "text", placeholder: "Kamau Hardware, Westlands", required: true  },
  { label: "PHONE / WHATSAPP", name: "phone",    type: "tel",  placeholder: "+254 7XX XXX XXX",          required: false },
];

function Spinner() {
  return (
    <span
      className="inline-block w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin"
      aria-hidden="true"
    />
  );
}

export default function Contact() {
  const [state, handleSubmit] = useForm(FORM_ID);

  // Check if Formspree returned a field-level error
  const hasFieldError = (name: string) => {
    if (!state.errors) return false;
    const errs = state.errors as unknown as Array<{ field?: string }>;
    return Array.isArray(errs) && errs.some((e) => e.field === name);
  };

  return (
    <section id="contact" className="bg-black px-[clamp(1.25rem,5vw,2.5rem)] py-[clamp(4rem,10vw,7rem)]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,6vw,5rem)] items-start">

        {/* Left */}
        <div>
          <div className="reveal"><SectionTag>LET&apos;S TALK</SectionTag></div>
          <h2 className="reveal reveal-delay-1 font-serif text-[clamp(2rem,5vw,3.5rem)]
            leading-[1.1] text-parchment mb-6">
            Ready to go<br /><em className="text-gold">deep?</em>
          </h2>
          <div className="reveal reveal-delay-2 flex flex-col gap-3 mb-10">
            <div className="w-full bg-surface border border-border rounded-xl p-4 md:p-5 flex items-center gap-3 transition-colors hover:border-gold/30">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0 shadow-[0_0_8px_rgba(201,168,76,0.6)]" />
              <span className="text-sm font-medium text-parchment tracking-wide">Currently accepting 2 new clients for Q3</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="mailto:hello@kinastudio.co.ke"
                className="group flex flex-col gap-1 bg-surface border border-border rounded-xl p-4 md:p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-gold/40"
              >
                <span className="text-[10px] tracking-[2px] text-muted mb-1 uppercase font-semibold">Email Us</span>
                <span className="text-sm text-parchment group-hover:text-gold transition-colors truncate">hello@kinastudio.co.ke</span>
              </a>
              <div className="flex flex-col gap-1 bg-surface border border-border rounded-xl p-4 md:p-5">
                <span className="text-[10px] tracking-[2px] text-muted mb-1 uppercase font-semibold">Location</span>
                <span className="text-sm text-parchment truncate">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
          <div className="reveal">
            <DepthRings size={110} />
          </div>
        </div>

        {/* Right — Form */}
        <div className="reveal reveal-delay-1 flex flex-col gap-4">
          {state.succeeded ? (
            <div className="flex flex-col items-center justify-center text-center py-16 border border-gold/20 rounded-xl">
              <div className="font-serif text-[2.5rem] text-gold mb-4">✓</div>
              <h3 className="font-serif text-[1.5rem] text-parchment mb-2">Message sent!</h3>
              <p className="text-base font-light text-muted">
                We&apos;ll be in touch within 24 hours. Go deep. 😌
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {fields.map((f) => (
                <div key={f.name} className="flex flex-col gap-1.5">
                  <label htmlFor={f.name} className="text-xs tracking-[3px] text-muted">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    required={f.required}
                    className={`w-full bg-surface rounded-[5px]
                      px-4 py-3.5 text-base text-parchment placeholder-border
                      focus:outline-none transition-colors font-sans
                      [&:user-invalid]:border-red-400
                      ${hasFieldError(f.name) ? "border border-red-400" : "border border-border focus:border-gold"}`}
                  />
                  <ValidationError
                    field={f.name}
                    errors={state.errors}
                    className="text-xs text-red-400 mt-0.5"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs tracking-[3px] text-muted">
                  WHAT DO YOU NEED?
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your business and what you're looking for..."
                  rows={4}
                  className={`w-full bg-surface rounded-[5px]
                    px-4 py-3.5 text-base text-parchment placeholder-border
                    focus:outline-none transition-colors resize-none font-sans
                    [&:user-invalid]:border-red-400
                    ${hasFieldError("message") ? "border border-red-400" : "border border-border focus:border-gold"}`}
                />
                <ValidationError
                  field="message"
                  errors={state.errors}
                  className="text-xs text-red-400 mt-0.5"
                />
              </div>

              {/* Catch-all form error */}
              <ValidationError
                errors={state.errors}
                className="text-xs text-red-400"
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="btn-primary w-full bg-gold text-black text-sm font-medium
                  tracking-[3px] py-4 rounded hover:bg-gold/90 transition-colors mt-1
                  disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <span className="flex items-center justify-center gap-2.5">
                    <Spinner />
                    SENDING…
                  </span>
                ) : (
                  "SEND MESSAGE →"
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
