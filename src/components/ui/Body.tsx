import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Users, Send, Activity } from "lucide-react";
import StatsChart from "./StatsChart";
import { Card, CardHeader, CardTitle, CardContent } from "./card";

const cardData = [
  {
    title: "Total Subscribers",
    count: "5,268",
    updateInfo: "From last month updated",
    percentage: "↑ +10%",
    percentageBg: "bg-green-100",
    percentageText: "text-green-800",
    icon: Users,
  },
  {
    title: "SMS Sent",
    count: "16,789",
    updateInfo: "From last month updated",
    percentage: "↑ +5.2%",
    percentageBg: "bg-green-100",
    percentageText: "text-green-800",
    icon: Send,
  },
  {
    title: "Total Unsubscribers",
    count: "276",
    updateInfo: "From last month updated",
    percentage: "↓ -4.8%",
    percentageBg: "bg-red-100",
    percentageText: "text-red-800",
    icon: Users,
  },
  {
    title: "Total Clicks",
    count: "500",
    updateInfo: "From last month updated",
    percentage: "↑ +2%",
    percentageBg: "bg-green-100",
    percentageText: "text-green-800",
    icon: Activity,
  },
];

export function Body() {
  return (
    <div className="flex flex-col flex-1 h-full overflow-auto h-[300px]">
      <main className="flex flex-1 flex-col gap-2 p-4 md:gap-4 md:p-4">
        <h1 className="text-4xl font-bold mb-2" style={{ fontSize: '48px' }}>Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {cardData.map((card, index) => (
            <Card key={index} className="border border-gray-300 rounded-2xl h-64 relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="pt-4 text-xl font-medium" style={{ fontSize: '25px' }}>
                  {card.title}
                </CardTitle>
                <div className="p-1 rounded-full bg-gray-100">
                  <card.icon className="h-5 w-5 text-gray-500" />
                </div>
              </CardHeader>
              <CardContent className="mt-12 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold" style={{ fontSize: '55px' }}>
                    {card.count}
                  </div>
                  <div className="flex items-center px-2 py-1 text-xs rounded-full" style={{ backgroundColor: '#C4E6A7', fontSize: '20px' }}>
                    <svg className="h-5 w-5 text-black mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-black" style={{ fontSize: '20px' }}>{card.percentage}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 absolute bottom-2 mb-6" style={{ fontSize: "20px" }}>
                  {card.updateInfo}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-4 flex gap-4 md:gap-6 lg:gap-8">
          <Card className="w-1/2 round-2xl">
            <CardContent>
              <StatsChart />
            </CardContent>
          </Card>
          <Card className="w-1/2">
            <CardHeader>
              <CardTitle>Recent Subscribers</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              {[
                { name: "EUX", email: "your.email@address.com", time: "5 mins ago" },
                { name: "ABC", email: "your.email@address.com", time: "45 mins ago" },
                { name: "LilyY12", email: "your.email@address.com", time: "1 hour ago" },
                { name: "Naomi.L", email: "your.email@address.com", time: "12:05" },
                { name: "WadePe2", email: "your.email@address.com", time: "10:30" },
                { name: "ABCD", email: "your.email@address.com", time: "Yesterday" },
                { name: "Nora", email: "your.email@address.com", time: "Yesterday" },
                { name: "Sammuel", email: "your.email@address.com", time: "Yesterday" },
              ].map((subscriber, index) => (
                <div key={index} className="flex items-center gap-4 round-2xl">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarFallback>{subscriber.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">{subscriber.name}</p>
                    <p className="text-sm text-muted-foreground">{subscriber.email}</p>
                  </div>
                  <div className="ml-auto font-medium">{subscriber.time}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default Body;
