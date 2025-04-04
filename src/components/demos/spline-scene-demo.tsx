'use client'

import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneDemo() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight 
        size={300}
        className="z-0"
      />
      
      <div className="flex h-full flex-col-reverse md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-6 md:p-8 relative z-20 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Anurodh Pandey
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg text-sm md:text-base">
            IT specialist with expertise in Windows Server, Microsoft 365, and Azure.
            Passionate about optimizing IT systems and enhancing security infrastructure.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#about" className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white text-sm border border-white/20 inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              About Me
            </a>
            <a href="#contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white text-sm border border-white/20 inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>

        {/* Right content (3D scene) - now first on mobile */}
        <div className="flex-1 relative min-h-[250px] md:min-h-0 z-20">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
