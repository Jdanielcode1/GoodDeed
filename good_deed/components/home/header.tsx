"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-primary">GoodDeed</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link 
              href="/tasks" 
              className={`text-sm font-medium ${pathname.startsWith('/tasks') ? 'text-primary' : 'text-gray-600'}`}
            >
              Tasks
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium ${pathname === '/about' ? 'text-primary' : 'text-gray-600'}`}
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary-dark text-white">
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}