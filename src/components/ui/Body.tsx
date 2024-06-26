import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Users, Send, Activity, Link } from "lucide-react";
import StatsChart from "./StatsChart";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardContent } from "./card";



export function Body(){
    return(
        <div className="flex flex-col flex-1 h-64">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="border rounded-lg shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
                <div className="p-1 rounded-full bg-gray-100">
                  <Users className="h-4 w-4 text-gray-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5,268</div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-500">From last month updated</span>
                  <span className="ml-2 px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">↑ +10%</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border rounded-lg shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">SMS Sent</CardTitle>
                <div className="p-1 rounded-full bg-gray-100">
                  <Send className="h-4 w-4 text-gray-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">16,789</div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-500">From last month updated</span>
                  <span className="ml-2 px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">↑ +5.2%</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border rounded-lg shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Unsubscribers</CardTitle>
                <div className="p-1 rounded-full bg-gray-100">
                  <Users className="h-4 w-4 text-gray-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">276</div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-500">From last month updated</span>
                  <span className="ml-2 px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">↓ -4.8%</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border rounded-lg shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
                <div className="p-1 rounded-full bg-gray-100">
                  <Activity className="h-4 w-4 text-gray-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">500</div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-500">From last month updated</span>
                  <span className="ml-2 px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">↑ +2%</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardContent>
                <StatsChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Subscribers</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarFallback>E</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">EUX</p>
                    <p className="text-sm text-muted-foreground">your.email@address.com</p>
                  </div>
                  <div className="ml-auto font-medium">5 mins ago</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">ABC</p>
                    <p className="text-sm text-muted-foreground">your.email@address.com</p>
                  </div>
                  <div className="ml-auto font-medium">45 mins ago</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarFallback>L</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">LilyY12</p>
                    <p className="text-sm text-muted-foreground">your.email@address.com</p>
                  </div>
                  <div className="ml-auto font-medium">1 hour ago</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarFallback>N</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Naomi.L</p>
                    <p className="text-sm text-muted-foreground">your.email@address.com</p>
                  </div>
                  <div className="ml-auto font-medium">12:05</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarFallback>W</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">WadePe2</p>
                    <p className="text-sm text-muted-foreground">your.email@address.com</p>
                  </div>
                  <div className="ml-auto font-medium">10:30</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">ABCD</p>
                    <p className="text-sm text-muted-foreground">your.email@address.com</p>
                  </div>
                  <div className="ml-auto font-medium">Yesterday</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarFallback>N</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Nora</p>
                    <p className="text-sm text-muted-foreground">your.email@address.com</p>
                  </div>
                  <div className="ml-auto font-medium">Yesterday</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Sammuel</p>
                    <p className="text-sm text-muted-foreground">your.email@address.com</p>
                  </div>
                  <div className="ml-auto font-medium">Yesterday</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    )
}

export default Body;