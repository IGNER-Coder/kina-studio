"use client";

const WA_NUMBER = "254794943819";
const WA_MESSAGE = encodeURIComponent(
  "Hi Kina Studio! I'd like to talk about a web project."
);
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function WhatsAppBubble() {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="wa-bubble"
    >
      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wa-icon"
      >
        <path
          d="M16 2C8.268 2 2 8.268 2 16c0 2.496.655 4.84 1.8 6.872L2 30l7.352-1.768A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
          fill="#25D366"
        />
        <path
          d="M22.5 19.938c-.305.855-1.514 1.566-2.48 1.772-.66.14-1.52.252-4.415-.948-3.71-1.525-6.1-5.29-6.284-5.536-.177-.246-1.484-1.973-1.484-3.763 0-1.79.938-2.662 1.27-3.025.305-.33.67-.413.894-.413.222 0 .444.002.638.012.204.01.478-.077.748.573.305.713 1.037 2.503 1.127 2.685.09.183.15.397.03.636-.113.245-.17.397-.333.612-.163.216-.342.482-.488.648-.163.183-.332.38-.143.746.19.366.843 1.392 1.81 2.255 1.245 1.11 2.294 1.454 2.62 1.619.325.165.515.138.705-.083.19-.22.816-.955 1.033-1.283.216-.328.433-.274.73-.165.296.11 1.88.887 2.203 1.048.326.162.543.243.624.378.08.135.08.782-.224 1.637z"
          fill="#fff"
        />
      </svg>

      {/* Tooltip */}
      <span className="wa-tooltip">Chat on WhatsApp</span>
    </a>
  );
}
