import { Calendar, Inbox, Settings, LogOut, Home, Car, BarChart, Wallet, HelpCircle, Moon } from "lucide-react";

export default function DashboardSidebar() {
  const appMenu = [
    { title: "Dashboard", url: "#", icon: Home },
    { title: "Car Rent", url: "#", icon: Car },
    { title: "Insight", url: "#", icon: BarChart },
    { title: "Reimburse", url: "#", icon: Wallet },
    { title: "Inbox", url: "#", icon: Inbox },
    { title: "Calendar", url: "#", icon: Calendar },
  ];

  const preferencesMenu = [
    { title: "Settings", url: "#", icon: Settings },
    { title: "Help & Centre", url: "#", icon: HelpCircle },
    { title: "Dark Mode", url: "#", icon: Moon },
  ];

  return (
    <div className="w-[286px] h-[900px] bg-[#FFFFFF] border border-[#F3F5F7] flex flex-col justify-between p-4 py-8 px-10">
      {/* Main Menu */}
      <div>
        <div className="mb-6">
          <h3 className="text-base mb-4 text-[#93a5c1]">Main Menu</h3>
          <ul className="space-y-4">
            {appMenu.map((item) => (
              <li key={item.title}>
                <a
                  href={item.url}
                  className="flex items-center gap-3 text-[#90A3BF] hover:text-black font-medium text-[16px]"
                >
                  {item.icon && <item.icon className="w-5 h-5 text-[#90A3BF]" />}
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Preferences */}
        <div>
          <h3 className="text-base mb-4 text-[#93a5c1] mt-20">Preferences</h3>
          <ul className="space-y-4">
            {preferencesMenu.map((item) => (
              <li key={item.title}>
                <a
                  href={item.url}
                  className="flex items-center gap-3 text-[#90A3BF] hover:text-black font-medium text-[16px]"
                >
                  {item.icon && <item.icon className="w-5 h-5 text-[#90A3BF]" />}
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logout */}
      <div className="flex items-center gap-3 text-[#90A3BF] hover:text-black font-medium text-[16px]">
        <LogOut className="w-5 h-5 text-[#90A3BF]" />
        <span>Logout</span>
      </div>
    </div>
  );
}
