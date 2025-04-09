import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price_range: string;
  category_slug: string;
  popular: boolean;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={service.image_url || "/images/service-placeholder.jpg"}
          alt={service.title}
          fill
          className="object-cover"
        />
        {service.popular && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
            Popular
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.price_range}</CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {service.description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button asChild className="w-full">
          <Link href={`/services/${service.category_slug}/${service.id}`}>
            Request Service
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}