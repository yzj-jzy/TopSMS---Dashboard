"use client";

import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function StatsChart() {
  const [selectedFilter, setSelectedFilter] = useState("This Month");

  const handleSelect = (filter: React.SetStateAction<string>) => {
    setSelectedFilter(filter);
    // 在这里可以添加更改图表数据的逻辑
  };

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'SMS',
        data: [680, 420, 660, 900, 967, 900, 900],
        backgroundColor: '#d2e603',  // Light green (updated)
        borderColor: '#d2e603',
        borderRadius: 10, // Rounded corners
        borderWidth: 1,
      },
      {
        label: 'Subscribe',
        data: [1020, 880, 800, 1020, 1020, 1020, 1020],
        backgroundColor: '#c2d500',  // Darker green (updated)
        borderColor: '#c2d500',
        borderRadius: 10, // Rounded corners
        borderWidth: 1,
      },
      {
        label: 'Unsubscribe',
        data: [1050, 780, 875, 1050, 1050, 1050, 1050],
        backgroundColor: '#b0c200',  // Another shade of green (updated)
        borderColor: '#b0c200',
        borderRadius: 10, // Rounded corners
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
        }
      },
      tooltip: {
        enabled: true,
        mode: 'index' as const,
        intersect: false,
        callbacks: {
          // Custom tooltip callbacks if needed
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        barPercentage: 0.4, // Adjust bar width
        categoryPercentage: 0.5, // Adjust distance between bars
        grid: {
          display: false, // Hide vertical grid lines
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 5000,
        ticks: {
          stepSize: 1000, // Adjust step size to show 1000, 2000, 3000, 4000, 5000
        },
        
      }
    },
  };

  return (
    <div className="relative p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Stats</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              {selectedFilter} <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleSelect("This Month")}>This Month</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSelect("This Week")}>This Week</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSelect("This Year")}>This Year</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default StatsChart;
