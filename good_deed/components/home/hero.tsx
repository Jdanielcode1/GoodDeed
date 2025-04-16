import { Button } from "@/components/ui/button";
import Link from "next/link";
import VideoPlayer from "@/components/ui/video-player";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video - make sure it covers the entire container */}
      <div className="absolute inset-0 w-full h-full">
        <VideoPlayer 
          src="/old_person.mp4" 
          fallbackImage="/grandma.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Trusted help for</span>{' '}
                <span className="block text-secondary-light xl:inline">seniors in need</span>
              </h1>
              <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                GoodDeed connects seniors with trusted Deeders for everyday tasks like grocery shopping, 
                home maintenance, technology help, and companionship.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link href="/services" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary-dark text-white">
                    Find a Deeder
                  </Button>
                </Link>
                <Link href="/become-helper" className="w-full sm:w-auto mt-3 sm:mt-0">
                  <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white/10 bg-secondary hover:bg-secondary-dark">
                    Become a Deeder
                  </Button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}