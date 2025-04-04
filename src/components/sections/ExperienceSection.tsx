export function ExperienceSection() {
  return (
    <div id="experience" className="mt-24 scroll-mt-24">
      <h2 className="text-neutral-50 text-3xl font-bold mb-8 border-b border-neutral-800 pb-2">
        Professional Experience
      </h2>

      <div className="space-y-6">
        {/* Macquarie Group - Desktop Support Engineer */}
        <div className="bg-black/60 p-5 rounded-xl border border-neutral-800">
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
        <div className="bg-black/60 p-5 rounded-xl border border-neutral-800">
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
        <div className="bg-black/60 p-5 rounded-xl border border-neutral-800">
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
  );
} 