import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

type ServiceCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon_url: string;
  display_order: number;
};

export default function ServiceCategories({ 
  categories 
}: { 
  categories: ServiceCategory[] 
}) {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Services We Offer
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Our trusted helpers can assist with a variety of everyday tasks
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/services/${category.slug}`}
                className="group"
              >
                <Card className="h-full flex flex-col overflow-hidden transition-all duration-200 hover:shadow-lg">
                  <div className="flex-shrink-0 flex items-center justify-center h-48 bg-primary/5 dark:bg-primary/10">
                    <Image
                      src={category.icon_url || `/images/services/${category.slug}.svg`}
                      alt={category.name}
                      width={120}
                      height={120}
                      className="h-24 w-24 object-contain"
                    />
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                        {category.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <span className="text-primary group-hover:underline font-medium">
                        Learn more →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}