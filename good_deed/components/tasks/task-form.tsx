"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { TimePicker } from "@/components/ui/time-picker";
import { createTask } from "@/app/actions";

type ServiceCategory = {
  id: string;
  name: string;
  slug: string;
};

export default function TaskForm({ 
  categories 
}: { 
  categories: ServiceCategory[] 
}) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    
    // Add the date and time to the form data
    if (date) {
      formData.append("date", date.toISOString().split("T")[0]);
    }
    
    if (time) {
      formData.append("time", time);
    }
    
    try {
      await createTask(formData);
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Task Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="e.g., Help with grocery shopping"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select name="category" required>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.slug}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Describe what you need help with in detail"
          rows={4}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <DatePicker
            id="date"
            selected={date}
            onSelect={setDate}
            minDate={new Date()}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="time">Time</Label>
          <TimePicker
            id="time"
            value={time}
            onChange={setTime}
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          placeholder="Your address or neighborhood"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="budget">Budget ($)</Label>
        <Input
          id="budget"
          name="budget"
          type="number"
          min="5"
          step="0.01"
          placeholder="Enter your budget"
          required
        />
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Creating Task..." : "Create Task"}
      </Button>
    </form>
  );
}