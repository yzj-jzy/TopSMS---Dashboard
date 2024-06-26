"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  Home,
  LineChart,
  Package,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCampaignsOpen, setIsCampaignsOpen] = useState(true);

  return (
    <div className={`${isCollapsed ? "w-20" : "w-[330px]"} bg-white flex h-[990px] flex-col justify-between rounded-lg shadow-md transition-width duration-300`}>
      <div>
        <div className="p-4 bg-white border-b border-dashed border-gray-300 flex justify-between items-center">
          {!isCollapsed && (
            <button className="flex items-center gap-2 bg-[#dff836] text-black font-semibold px-4 py-2 rounded w-full">
              <Package className="h-6 w-6" />
              <span style={{ fontSize: "16px" }}>Send SMS</span>
            </button>
          )}
          <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2">
            {isCollapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
          </button>
        </div>
        <nav className="mt-4 px-2 text-sm font-medium" style={{ fontSize: "16px" }}>
          <Link href="#" className={`flex items-center gap-3 rounded-lg px-3 py-2 ${isCollapsed ? "justify-center" : "bg-gray-200 text-primary"} transition-all hover:bg-gray-300`}>
            <Home className="h-4 w-4" />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>
          <div className="px-3 py-2 text-gray-700">
            <div
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200 cursor-pointer ${isCollapsed ? "justify-center" : ""}`}
              onClick={() => setIsCampaignsOpen(!isCampaignsOpen)}
            >
              <span>{!isCollapsed && "Campaigns"}</span>
              <Bell className="h-4 w-4 ml-auto" />
            </div>
            {isCampaignsOpen && !isCollapsed && (
              <div className="ml-6 mt-2 space-y-1">
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 bg-gray-200 text-primary transition-all hover:bg-gray-300">
                  Lorem Ipsum
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200">
                  Lorem Ipsum
                </Link>
                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200">
                  Lorem Ipsum
                </Link>
              </div>
            )}
          </div>
          <Link href="#" className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200 ${isCollapsed ? "justify-center" : ""}`}>
            <Users className="h-4 w-4" />
            {!isCollapsed && <span>Contacts</span>}
          </Link>
          <Link href="#" className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200 ${isCollapsed ? "justify-center" : ""}`}>
            <LineChart className="h-4 w-4" />
            {!isCollapsed && <span>Reports</span>}
          </Link>
          <Link href="#" className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200 ${isCollapsed ? "justify-center" : ""}`}>
            <Bell className="h-4 w-4" />
            {!isCollapsed && <span>Notifications</span>}
          </Link>
        </nav>
      </div>
      <div className="mt-auto p-4 border-t">
        <Link href="#" className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200 ${isCollapsed ? "justify-center" : ""}`}>
          <Bell className="h-4 w-4" />
          {!isCollapsed && <span>Help</span>}
        </Link>
        <Link href="#" className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200 ${isCollapsed ? "justify-center" : ""}`}>
          <Bell className="h-4 w-4" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
        {!isCollapsed && (
          <div className="mt-4 p-4 bg-white rounded shadow text-center">
            <p>Support@topsms.com.au</p>
            <p>Phone: +61 (0) 2 9121 6234</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
