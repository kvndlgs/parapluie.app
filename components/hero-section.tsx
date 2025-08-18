'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
// import { Input } from '@/components/ui/input';
import WaitListForm from "./waitlist-form";
//import { WaitlistFormProps } from '@/types';
// import MobilePrototype from "./mobile-prototype";

type HeroProps = {
  closeForm: () => void;
}

export function HeroSection({closeForm}: HeroProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Title and content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-primary leading-tight">
                 AI Protection for Senior Financial Safety
              </h1>

              <p className="text-lg sm:text-xl text-foreground  max-w-2xl leading-relaxed">
                Technology that protects our loved ones from financial
                exploitation and scams. Simple, unobtrusive solutions designed
                specifically for seniors.{" "}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">

              {
                isFormOpen &&
                (
                  <WaitListForm closeForm={() => setIsFormOpen(false)}/>
                )
              }
          
                <div className="flex items-center justify-between gap-2">
                 <Button onClick={() => setIsFormOpen(true)} className='border-2 border-b-6 border-primary py-6 px-7 font-bold text-md bg-white text-primary hover:bg-white hover:text-primary/90'> Join Waitlist </Button>
                 </div>
            
            </div>

            <div className="flex items-center space-x-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span> Soon on iOS & Android </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Join Early Access program</span>
              </div>
            </div>
          </div>

          {/* Right side - Mobile device mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Mobile device frame */}
              <div className="relative w-80 h-[640px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-10"></div>

                  {/* Screen content placeholder */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600">
                    <div className="text-center space-y-4 px-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-slate-300 dark:bg-slate-500 rounded-full"></div>
                        <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-full w-3/4 mx-auto"></div>
                        <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-full w-1/2 mx-auto"></div>
                      </div>
                      <div className="pt-4">
                        <div className="h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                  

                  {/* App prototype will go here */}
                  <div
                    id="app-prototype-container"
                    className="absolute inset-0 rounded-[2.5rem] overflow-hidden"
                  >
                   {/* <MobilePrototype /> */}
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-full"></div>
              </div>

              {/* Floating elements for visual appeal */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
}
