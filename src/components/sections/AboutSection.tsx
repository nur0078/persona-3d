export function AboutSection() {
  return (
    <div id="about" className="mt-24 text-neutral-300 scroll-mt-24">
      <h2 className="text-neutral-50 text-3xl font-bold mb-8 border-b border-neutral-800 pb-2">
        About Me
      </h2>
      <div className="bg-black/60 p-8 rounded-xl border border-neutral-800 illuminate">
        <p className="leading-relaxed text-lg">
          IT specialist with expertise in Windows Server, Microsoft 365,
          Azure, and enterprise device management. Skilled in automation,
          security, and troubleshooting, with experience in Intune, SCCM,
          PowerShell, and vulnerability remediation. Proven ability to
          optimize IT infrastructure, enforce compliance, and enhance system
          efficiency in high-demand environments.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:anurodhp7@gmail.com"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white text-sm border border-white/20 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            anurodhp7@gmail.com
          </a>
          <a
            href="tel:+61450380690"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white text-sm border border-white/20 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +61 450 380 690
          </a>
        </div>
      </div>
    </div>
  );
} 