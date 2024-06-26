"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  Home,
  LineChart,
  Package,
  Users,
} from "lucide-react";


export function SideBar() {
  const [isCampaignsOpen, setIsCampaignsOpen] = useState(true);

  return (
    <div className="h-320 w-64 bg-white flex flex-col justify-between rounded-lg shadow-md" >
      <div>
        <div className="p-4 bg-white border-b border-dashed border-gray-300">
          <button className="flex items-center gap-2 bg-[#dff836] text-black font-semibold px-4 py-2 rounded w-full">
            <Package className="h-6 w-6" />
            <span>Send SMS</span>
          </button>
          <div className="mt-4 text-gray-700 font-bold">
            MAIN
          </div>
        </div>
        <nav className="mt-4 px-2 text-sm font-medium">
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 bg-gray-200 text-primary transition-all hover:bg-gray-300">
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <div className="px-3 py-2 text-gray-700">
            <div
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200 cursor-pointer"
              onClick={() => setIsCampaignsOpen(!isCampaignsOpen)}
            >
              <span>Campaigns</span>
              <Bell className="h-4 w-4 ml-auto" />
            </div>
            {isCampaignsOpen && (
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
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200">
            <Users className="h-4 w-4" />
            Contacts
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200">
            <LineChart className="h-4 w-4" />
            Reports
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200">
            <Bell className="h-4 w-4" />
            Notifications
          </Link>
        </nav>
      </div>
      <div className="mt-auto p-4 border-t">
        <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200">
          <Bell className="h-4 w-4" />
          Help
        </Link>
        <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200">
          <Bell className="h-4 w-4" />
          Settings
        </Link>
        <div className="mt-4 p-4 bg-white rounded shadow text-center">
          <p>Support@topsms.com.au</p>
          <p>Phone: +61 (0) 2 9121 6234</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
