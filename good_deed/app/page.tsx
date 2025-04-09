import Hero from "@/components/home/hero";
import ServiceCategories from "@/components/home/service-categories";
import HowItWorks from "@/components/home/how-it-works";
import Testimonials from "@/components/home/testimonials";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  
  // Fetch service categories from Supabase
  const { data: categories } = await supabase
    .from('service_categories')
    .select('*')
    .order('display_order', { ascending: true });
  
  // Fetch testimonials from Supabase
  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_featured', true)
    .limit(3);

  return (
    <main className="flex-1 w-full flex flex-col gap-16">
      <Hero />
      <ServiceCategories categories={categories || []} />
      <HowItWorks />
      <Testimonials testimonials={testimonials || []} />
    </main>
  );
}