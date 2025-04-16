// components/home/aging-section.tsx
import VideoPlayer from "@/components/ui/video-player";

export default function AgingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Because aging shouldn't be done alone
            </h2>
            <p className="text-xl text-gray-500">
              Our community of Deeders provides companionship, assistance, and peace of mind 
              for seniors and their families. We believe everyone deserves dignity, 
              independence, and connection as they age.
            </p>
            <div className="pt-4">
              <a
                href="/services/companionship"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
              >
                Learn about companionship services
              </a>
            </div>
          </div>
          
          {/* Video Container - Note the aspect ratio container for vertical video */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-lg overflow-hidden shadow-xl">
              <VideoPlayer 
                src="/senior.mp4" 
                fallbackImage="/senior-fallback.jpg"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}