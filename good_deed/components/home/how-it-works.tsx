import { CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Request a Service",
      description: "Tell us what you need help with and when you need it done.",
      icon: "1",
    },
    {
      title: "Get Matched",
      description: "We'll connect you with trusted helpers in your area who can assist.",
      icon: "2",
    },
    {
      title: "Approve Your Helper",
      description: "Review helper profiles and select the right person for your needs.",
      icon: "3",
    },
    {
      title: "Get Help & Pay Securely",
      description: "Your helper will arrive at the scheduled time. Pay securely through our platform.",
      icon: "4",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            How GoodDeed Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Getting help is simple and secure with our easy 4-step process
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                    {step.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ready to get started?
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Find trusted helpers in your area today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
              >
                Find a Helper
              </a>
              <a
                href="/become-helper"
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                Become a Helper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}