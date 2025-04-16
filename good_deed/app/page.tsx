import Hero from "@/components/home/hero";
import ServiceCategories from "@/components/home/service-categories";
import HowItWorks from "@/components/home/how-it-works";
import Testimonials from "@/components/home/testimonials";
import AgingSection from "@/components/home/aging-section";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  
  // Fetch service categories from Supabase
  const { data: categories } = await supabase
    .from('service_categories')
    .select('*')
    .order('display_order', { ascending: true });
  
  // If you want to fetch testimonials from Supabase, you'll need to add the "type" field
  // For now, we'll use the sample data in the component
  
  return (
    <main className="flex-1 w-full flex flex-col gap-16">
      <Hero />
      <ServiceCategories categories={categories || []} />
      <AgingSection />
      <HowItWorks />
      <Testimonials />
    </main>
  );
}