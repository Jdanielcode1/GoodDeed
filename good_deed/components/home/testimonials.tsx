import Image from "next/image";
import { StarIcon } from "lucide-react";

type Testimonial = {
  id: string;
  name: string;
  age: number;
  location: string;
  image_url: string;
  quote: string;
  rating: number;
  service_type: string;
  is_featured: boolean;
  type: "senior" | "deeder";
};

// Sample testimonials data (you can replace this with your Supabase data)
const sampleTestimonials: Testimonial[] = [
  // Senior testimonials
  {
    id: "1",
    name: "Margaret Wilson",
    age: 78,
    location: "Portland, OR",
    image_url: "/images/testimonials/senior-1.jpg",
    quote: "My Deeder, Sarah, has been a blessing. She helps me with groceries every week and always has time for a chat. I feel less alone now.",
    rating: 5,
    service_type: "Grocery Shopping",
    is_featured: true,
    type: "senior"
  },
  {
    id: "2",
    name: "Robert Johnson",
    age: 82,
    location: "Tampa, FL",
    image_url: "/images/testimonials/senior-2.jpg",
    quote: "After my wife passed, I struggled with home maintenance. My Deeder James has been incredible helping me keep my garden in shape.",
    rating: 5,
    service_type: "Home Maintenance",
    is_featured: true,
    type: "senior"
  },
  {
    id: "3",
    name: "Eleanor Davis",
    age: 75,
    location: "Chicago, IL",
    image_url: "/images/testimonials/senior-3.jpg",
    quote: "I was nervous about using technology, but my Deeder Michael patiently taught me how to video call my grandchildren. It's changed my life!",
    rating: 5,
    service_type: "Technology Help",
    is_featured: true,
    type: "senior"
  },
  
  // Deeder testimonials
  {
    id: "4",
    name: "Sarah Miller",
    age: 32,
    location: "Portland, OR",
    image_url: "/images/testimonials/deeder-1.jpg",
    quote: "Being a Deeder gives me flexible income while making a real difference. Margaret has become like family to me.",
    rating: 5,
    service_type: "Grocery Shopping",
    is_featured: true,
    type: "deeder"
  },
  {
    id: "5",
    name: "James Thompson",
    age: 45,
    location: "Tampa, FL",
    image_url: "/images/testimonials/deeder-2.jpg",
    quote: "I love gardening, and helping Robert maintain his beautiful yard is rewarding. The stories he shares about his life are priceless.",
    rating: 5,
    service_type: "Home Maintenance",
    is_featured: true,
    type: "deeder"
  },
  {
    id: "6",
    name: "Michael Chen",
    age: 28,
    location: "Chicago, IL",
    image_url: "/images/testimonials/deeder-3.jpg",
    quote: "Seeing Eleanor's face light up when she first video called her grandchildren was one of my most rewarding moments as a Deeder.",
    rating: 5,
    service_type: "Technology Help",
    is_featured: true,
    type: "deeder"
  }
];

export default function Testimonials({ 
  testimonials = sampleTestimonials
}: { 
  testimonials?: Testimonial[] 
}) {
  const seniorTestimonials = testimonials.filter(t => t.type === "senior");
  const deederTestimonials = testimonials.filter(t => t.type === "deeder");
  
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Community Stories
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Real experiences from the GoodDeed community
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {/* Seniors Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              Seniors
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              {seniorTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
          
          {/* Deeders Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-secondary">
              Deeders
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              {deederTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-sm h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image 
            src={testimonial.image_url || "/images/default-avatar.png"} 
            alt={testimonial.name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">
            {testimonial.name}, {testimonial.age}
          </h3>
          <p className="text-sm text-gray-500">
            {testimonial.location}
          </p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon 
            key={i} 
            className={`h-5 w-5 ${
              i < testimonial.rating 
                ? "text-yellow-400" 
                : "text-gray-300"
            }`}
            fill={i < testimonial.rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      
      <p className="text-gray-600 flex-grow italic">"{testimonial.quote}"</p>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <span className="text-sm font-medium text-gray-500">
          {testimonial.service_type}
        </span>
      </div>
    </div>
  );
}