import React from 'react';
import { Bell, AlertCircle, PlusCircle, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="/path/to/logo.png" alt="Logo" className="h-8" />
          <span className="text-xl font-bold">TopSMS</span>
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
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/path/to/user-image.jpg" alt="User Name" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <span>Ahsan Pratama</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
