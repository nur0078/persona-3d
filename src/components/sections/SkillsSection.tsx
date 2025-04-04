export function SkillsSection() {
  return (
    <div className="mt-24">
      <h2 className="text-neutral-50 text-3xl font-bold mb-8 border-b border-neutral-800 pb-2">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-black/60 p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
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

        <div className="bg-black/60 p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
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

        <div className="bg-black/60 p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
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

        <div className="bg-black/60 p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
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
  );
} 