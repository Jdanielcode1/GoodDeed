import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns"

type Task = {
  id: string;
  title: string;
  description: string;
  status: "open" | "assigned" | "completed" | "cancelled";
  category: string;
  location: string;
  date: string;
  time: string;
  budget: number;
  created_at: string;
  user_id: string;
};

export default function TaskCard({ task }: { task: Task }) {
  const statusColors = {
    open: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    assigned: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    completed: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{task.title}</CardTitle>
          <Badge className={statusColors[task.status]}>
            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
          <MapPinIcon className="h-4 w-4 mr-1" />
          {task.location}
        </div>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {task.description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon className="h-4 w-4 mr-1" />
            {task.date}
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <ClockIcon className="h-4 w-4 mr-1" />
            {task.time}
          </div>
          <div className="text-sm font-medium">
            ${task.budget.toFixed(2)}
          </div>
        </div>
        
        <div className="mt-4">
          <Badge variant="outline" className="mr-2">
            {task.category}
          </Badge>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Posted {formatDistanceToNow(new Date(task.created_at), { addSuffix: true })}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button asChild className="w-full">
          <Link href={`/tasks/${task.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}