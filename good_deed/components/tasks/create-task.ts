"use server"

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function createTask(formData: FormData) {
  const supabase = await createClient();
  
  const task = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    date: formData.get("date"),
    time: formData.get("time"),
    location: formData.get("location"),
    budget: formData.get("budget"),
  };

  const { error } = await supabase.from("tasks").insert(task);
  
  if (error) throw error;
  
  revalidatePath("/tasks");
}