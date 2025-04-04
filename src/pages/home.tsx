import { SplineSceneDemo } from "@/components/demos/spline-scene-demo";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 md:p-8 bg-[#0f0f0f]">
      <div className="w-full max-w-5xl">
        {/* Hero Section */}
        <SplineSceneDemo />

        {/* About Section */}
        <div id="about" className="mt-16 text-neutral-300 scroll-mt-16">
          <h2 className="text-neutral-50 text-2xl font-bold mb-6 border-b border-neutral-800 pb-2">
            About Me
          </h2>
          <div className="bg-black/60 p-6 rounded-lg border border-neutral-800">
            <p className="leading-relaxed text-base">
              IT specialist with expertise in Windows Server, Microsoft 365,
              Azure, and enterprise device management. Skilled in automation,
              security, and troubleshooting, with experience in Intune, SCCM,
              PowerShell, and vulnerability remediation. Proven ability to
              optimize IT infrastructure, enforce compliance, and enhance system
              efficiency in high-demand environments.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:anurodhp7@gmail.com"
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-md text-white text-sm border border-white/20 flex items-center gap-2"
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
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-md text-white text-sm border border-white/20 flex items-center gap-2"
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
                +61-450380690
              </a>
              <a
                href="https://linkedin.com/in/pandeyanurodh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-md text-white text-sm border border-white/20 flex items-center gap-2"
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                linkedin.com/in/pandeyanurodh
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="mt-16 text-neutral-300 scroll-mt-16">
          <h2 className="text-neutral-50 text-2xl font-bold mb-6 border-b border-neutral-800 pb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/60 p-6 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
              <h3 className="font-medium text-neutral-100 text-lg mb-4 pb-2 border-b border-neutral-800">
                Server & Cloud Administration
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 mt-1.5"></span>
                  <span>
                    Windows Server 2016 & 2019, ADDS, DNS, DHCP, File Server
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 mt-1.5"></span>
                  <span>
                    Microsoft Azure: AD, MFA, IAM, RBAC, AD Connect, Resource
                    Management
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 mt-1.5"></span>
                  <span>
                    Microsoft 365 Administration, Teams, Exchange Online, Intune
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 mt-1.5"></span>
                  <span>Virtualization: VMware, VirtualBox, Hyper-V</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/60 p-6 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
              <h3 className="font-medium text-neutral-100 text-lg mb-4 pb-2 border-b border-neutral-800">
                Networking & Device Management
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-1.5"></span>
                  <span>
                    Routing, TCP/IP, VPN, Routers, Switches, Firewalls,
                    Wireshark
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-1.5"></span>
                  <span>
                    Microsoft Intune, Endpoint Manager, Jamf Pro, Apple
                    Configurator
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-1.5"></span>
                  <span>
                    Patch Management & System Deployment: WUSA, DISM, SCCM
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-1.5"></span>
                  <span>
                    Endpoint security, encryption standards, compliance auditing
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/60 p-6 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
              <h3 className="font-medium text-neutral-100 text-lg mb-4 pb-2 border-b border-neutral-800">
                Languages & Tools
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2 mt-1.5"></span>
                  <span>PowerShell, Python</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2 mt-1.5"></span>
                  <span>JavaScript, React</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2 mt-1.5"></span>
                  <span>SQL</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/60 p-6 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
              <h3 className="font-medium text-neutral-100 text-lg mb-4 pb-2 border-b border-neutral-800">
                Support Tools
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2 mt-1.5"></span>
                  <span>Helix, Jira, Freshdesk, ServiceNow</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2 mt-1.5"></span>
                  <span>Remote Desktop, AnyDesk, TeamViewer</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2 mt-1.5"></span>
                  <span>Data Backup & Recovery: RAID, Veeam</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/60 p-6 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
              <h3 className="font-medium text-neutral-100 text-lg mb-4 pb-2 border-b border-neutral-800">
                Email Management
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-red-400 mr-2 mt-1.5"></span>
                  <span>Outlook Setup & Troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-red-400 mr-2 mt-1.5"></span>
                  <span>User Management & Signatures</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-red-400 mr-2 mt-1.5"></span>
                  <span>Shared Mailbox Configuration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="mt-16 text-neutral-300 scroll-mt-16">
          <h2 className="text-neutral-50 text-2xl font-bold mb-6 border-b border-neutral-800 pb-2">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {/* Macquarie Group - Desktop Support Engineer */}
            <div className="bg-black/60 p-6 rounded-lg border border-neutral-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <h3 className="font-medium text-neutral-100 text-lg">
                  Desktop Support Engineer
                </h3>
                <div className="flex items-center mt-1 md:mt-0">
                  <span className="text-neutral-400 text-sm">
                    Macquarie Group
                  </span>
                  <span className="mx-2 text-neutral-600">•</span>
                  <span className="text-neutral-400 text-sm">
                    November 2024 - Present
                  </span>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 mt-1.5"></span>
                  <span>
                    Conducted vulnerability assessments across network
                    infrastructure, identifying and remediating 500+ critical
                    and high-risk vulnerabilities using Nessus and Qualys.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 mt-1.5"></span>
                  <span>
                    Investigated and resolved update failures on 200+
                    non-compliant devices monthly, increasing patch compliance
                    rates by 35% over three months.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 mt-1.5"></span>
                  <span>
                    Deployed and troubleshooted Windows updates across 1,500
                    endpoints monthly while minimizing user disruptions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 mt-1.5"></span>
                  <span>
                    Used WUSA, DISM, PowerShell, and SCCM to automate
                    deployments, decreasing manual intervention by 40%.
                  </span>
                </li>
              </ul>
            </div>

            {/* Macquarie Group - Tech Assist */}
            <div className="bg-black/60 p-6 rounded-lg border border-neutral-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <h3 className="font-medium text-neutral-100 text-lg">
                  Tech Assist
                </h3>
                <div className="flex items-center mt-1 md:mt-0">
                  <span className="text-neutral-400 text-sm">
                    Macquarie Group
                  </span>
                  <span className="mx-2 text-neutral-600">•</span>
                  <span className="text-neutral-400 text-sm">
                    April 2024 - November 2024
                  </span>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 mt-1.5"></span>
                  <span>
                    Provided technical support for 200+ individual users and
                    4000+ active users, achieving a 98% satisfaction rate.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 mt-1.5"></span>
                  <span>
                    Oversaw monthly deployment of 100+ new laptops including
                    weekly rebuilds using AutoPilot, Jamf Pro, and Apple
                    Configurator.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 mt-1.5"></span>
                  <span>
                    Configured and managed Microsoft Intune and Endpoint Manager
                    for device deployment and administration.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 mt-1.5"></span>
                  <span>
                    Identified and escalated critical issues affecting thousands
                    of users, coordinating with teams to minimize downtime.
                  </span>
                </li>
              </ul>
            </div>

            {/* ExtraTech */}
            <div className="bg-black/60 p-6 rounded-lg border border-neutral-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <h3 className="font-medium text-neutral-100 text-lg">
                  ICT Admin
                </h3>
                <div className="flex items-center mt-1 md:mt-0">
                  <span className="text-neutral-400 text-sm">ExtraTech</span>
                  <span className="mx-2 text-neutral-600">•</span>
                  <span className="text-neutral-400 text-sm">
                    March 2023 - February 2024
                  </span>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 mt-1.5"></span>
                  <span>
                    Managed company-wide Microsoft 365 suite and Azure Active
                    Directory for 25+ users, implementing MFA and SSPR.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 mt-1.5"></span>
                  <span>
                    Revamped IT support workflows using ServiceNow, achieving
                    40% increase in issue resolution efficiency.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 mt-1.5"></span>
                  <span>
                    Engineered automated Windows 10/11 deployment processes
                    using WDS with a 99% successful installation rate.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 mt-1.5"></span>
                  <span>
                    Administered Microsoft Teams environments and collaborated
                    on 20+ marketing campaigns and 7 web projects.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="mt-16 text-neutral-300 scroll-mt-16">
          <h2 className="text-neutral-50 text-2xl font-bold mb-6 border-b border-neutral-800 pb-2">
            Education
          </h2>
          <div className="bg-black/60 p-6 rounded-lg border border-neutral-800">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="font-medium text-neutral-100 text-lg">
                Bachelor of Information Technology
              </h3>
              <div className="flex items-center mt-1 md:mt-0">
                <span className="text-neutral-400 text-sm">
                  Federation University
                </span>
                <span className="mx-2 text-neutral-600">•</span>
                <span className="text-neutral-400 text-sm">
                  Ballarat, Australia • 2022
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="mt-16 mb-16 text-neutral-300 scroll-mt-16">
          <h2 className="text-neutral-50 text-2xl font-bold mb-6 border-b border-neutral-800 pb-2">
            Contact Me
          </h2>
          <div className="bg-black/60 p-6 rounded-lg border border-neutral-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-neutral-100 text-lg mb-4">
                  Get In Touch
                </h3>
                <p className="text-neutral-400 mb-6">
                  Feel free to reach out for opportunities, collaborations, or
                  just to connect!
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    </div>
                    <a
                      href="mailto:anurodhp7@gmail.com"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      anurodhp7@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <a
                      href="tel:+61450380690"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      +61-450380690
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <a
                      href="https://linkedin.com/in/pandeyanurodh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-white transition-colors"
                    >
                      linkedin.com/in/pandeyanurodh
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span className="text-neutral-300">
                      New South Wales, Australia
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center bg-black/30 rounded-lg p-4">
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-b from-neutral-700 to-neutral-900 p-1 rounded-full mb-4">
                    <div className="bg-gradient-to-b from-blue-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white">
                      AP
                    </div>
                  </div>
                  <h3 className="text-xl text-white font-medium">
                    Anurodh Pandey
                  </h3>
                  <p className="text-neutral-400 mt-1">IT Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
