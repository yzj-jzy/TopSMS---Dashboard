"use client";

import React, { useState } from 'react';
import { AlertCircle, Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "../../assets/logo.jpg";
import avatar from "../../assets/avatar.jpg";
import pavatar from "../../assets/profile-avatar.jpg";

export function TopBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="mt-4 ml-4 mr-4 flex items-center justify-between p-4 bg-white border border-gray-300 rounded-2xl">
      <div className="flex items-center gap-4">
        <img src={logo.src} alt="Logo" className="h-12" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1 rounded border border-red-800">
          <AlertCircle className="h-5 w-5" />
          <span>Only 14 days to use your free trial credit. Top up for full access.</span>
          <Link href="/topup" className="font-bold underline ml-2 px-1">Top up now</Link>
        </div>
        <div className="flex items-center gap-2 bg-[#D7F155] bg-opacity-30 text-green-800 px-3 py-1 rounded">
          <span>Balance: $888</span>
        </div>
        <Button className="bg-[#D7F155] text-black flex items-center gap-2 hover:bg-[#D7F155] focus:bg-[#D7F155]">
          <Plus className="h-5 w-5" />
          Add Credit
        </Button>
        <span className="text-slate-400">|</span>
        <div
          className="relative flex items-center gap-2 cursor-pointer"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Avatar className="h-12 w-12 rounded-lg">
            <AvatarImage src={avatar.src} alt="Ahsan Pratama" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <span>Ahsan Pratama</span>
          {showDropdown && (
            <div className="absolute right-0 mt-40 w-56 bg-white border border-gray-300 rounded-lg z-10 shadow-lg">
              <div className="flex flex-col p-2">
                <div className="flex items-center p-2">
                  <Avatar className="rounded-lg h-10 w-10">
                    <AvatarImage src={pavatar.src} alt="shadcn" />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium">shadcn</p>
                    <p className="text-sm text-gray-500">m@example.com</p>
                  </div>
                </div>
                <div className="border-t border-b">
                  {["Account", "Billing", "Notifications"].map((item, index) => (
                    <Link key={index} href={`/${item.toLowerCase()}`} className="flex items-center p-2 hover:bg-gray-100 rounded-md">
                      {item}
                    </Link>
                  ))}
                </div>
                <Link href="/logout" className="flex items-center p-2 hover:bg-gray-100 rounded-md">
                  Log out
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
