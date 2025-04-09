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
};

export default function Testimonials({ 
  testimonials 
}: { 
  testimonials: Testimonial[] 
}) {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            What Our Seniors Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Real stories from seniors who have found help through GoodDeed
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
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
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {testimonial.name}, {testimonial.age}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
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
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </p>
              
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Service: {testimonial.service_type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}