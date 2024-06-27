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
    <div className={`ml-4 mb-4 w-1/6 p-[26px] bg-white flex flex-col justify-between rounded-2xl border border-gray-300 transition-width duration-300`}>
      <div>

        <div className="px-4 py-4 pt-12 pb-8 h-[35px]  bg-white flex justify-between items-center">
          <button className="flex items-center justify-center gap-2 bg-[#dff836] text-black font-semibold px-4 py-2 rounded-2xl w-full">
            <Package className="px-2 h-12 w-12" />
            <span className="px-4 font-inter" style={{ fontSize: "22px" }}>Send SMS</span>
          </button>
        </div>
        <div className="font-inter px-4 pt-6 mt-6 text-slate-400 text-[13px] border-t">
          MAIN
        </div>

        <nav className="mt-4 px-2 text-sm font-medium space-y-2" style={{ fontSize: "16px" }}>
          <Link href="#" className={`h-[70px] flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-200`}>
            <Home className="px-2 h-12 w-12" />
            <span className="px-6 font-inter" style={{ fontSize: "22px" }}>Dashboard</span>
          </Link>

          <div className="px-3 py-2 text-gray-700">
            <div
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200 cursor-pointer`}
              onClick={() => setIsCampaignsOpen(!isCampaignsOpen)}
            >
              <Bell className="px-2 h-12 w-12" />
              <span className="px-6 font-inter" style={{ fontSize: "22px" }}>Campaigns</span>
            </div>
            {isCampaignsOpen && (
              <div className="ml-6 mt-2 space-y-1">
                <Link href="#" className={`flex items-center gap-3 rounded-lg px-3 py-2 bg-gray-200 text-primary transition-all hover:bg-gray-300`}>
                  <span className="px-6 font-inter mb-2" style={{ fontSize: "18px" }}>Lorem Ipsum</span>
                </Link>
                <Link href="#" className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200`}>
                  <span className="px-6 font-inter mb-2" style={{ fontSize: "18px" }}>Lorem Ipsum</span>
                </Link>
                <Link href="#" className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200`}>
                  <span className="px-6 font-inter mb-2" style={{ fontSize: "18px" }}>Lorem Ipsum</span>
                </Link>
              </div>
            )}
          </div>

          <Link href="#" className={`h-[70px] flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200`}>
            <Users className="px-2 h-12 w-12" />
            <span className="px-6 font-inter" style={{ fontSize: "22px" }}>Contacts</span>
          </Link>
          <Link href="#" className={`h-[70px] flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200`}>
            <LineChart className="px-2 h-12 w-12" />
            <span className="px-6 font-inter" style={{ fontSize: "22px" }}>Reports</span>
          </Link>
          <Link href="#" className={`h-[70px] flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200`}>
            <Bell className="px-2 h-12 w-12" />
            <span className="px-6 font-inter" style={{ fontSize: "22px" }}>Notifications</span>
          </Link>
        </nav>

      </div>
      <div className="mt-auto p-4 space-y-2">
        <div className="font-inter border-t text-slate-400 pt-4 px-2 text-[13px]">
          SETTINGS
        </div>
        <Link href="#" className={`h-[70px] flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200`}>
          <Bell className="px-2 h-12 w-12" />
          <span className="px-6 font-inter" style={{ fontSize: "22px" }}>Help</span>
        </Link>
        <Link href="#" className={`h-[70px] flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-200`}>
          <Bell className="px-2 h-12 w-12" />
          <span className="px-6 font-inter" style={{ fontSize: "22px" }}>Settings</span>
        </Link>

        <div className="mt-4 p-4 bg-white rounded text-center border border-black">
          <p>Support@topsms.com.au</p>
          <p>Phone: +61 (0) 2 9121 6234</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
