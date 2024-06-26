"use client"

import React, { useState } from 'react';
import { AlertCircle, PlusCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "../../assets/logo.jpg"; // assuming logo is correctly imported as an image

export function TopBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img src={logo.src} alt="Logo" className="h-8" />
        </div>
        <div className="flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1 rounded">
          <AlertCircle className="h-5 w-5" />
          <span>Only 14 days to use your free trial credit. Top up for full access.</span>
          <Link href="/topup" className="font-bold underline ml-2">Top up now</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded">
          <span>Balance: $888</span>
        </div>
        <Button className="bg-[#dff836] text-black flex items-center gap-2">
          <PlusCircle className="h-5 w-5" />
          Add Credit
        </Button>
        <div className="relative flex items-center gap-2">
          <Avatar
            className="h-8 w-8 cursor-pointer"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <AvatarImage src="/path/to/user-image.jpg" alt="Ahsan Pratama" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <span>Ahsan Pratama</span>
          {showDropdown && (
            <div
              className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="flex flex-col p-2">
                <div className="flex items-center p-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/path/to/user-image.jpg" alt="shadcn" />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium">shadcn</p>
                    <p className="text-sm text-gray-500">m@example.com</p>
                  </div>
                </div>
                <Link href="/account" className="flex items-center p-2 hover:bg-gray-100 rounded-md">
                  Account
                </Link>
                <Link href="/billing" className="flex items-center p-2 hover:bg-gray-100 rounded-md">
                  Billing
                </Link>
                <Link href="/notifications" className="flex items-center p-2 hover:bg-gray-100 rounded-md">
                  Notifications
                </Link>
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
