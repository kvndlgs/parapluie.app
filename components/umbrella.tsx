  'use client'

  import { useRef } from 'react'
  import { Canvas, useFrame } from '@react-three/fiber'
  import { useGLTF, ScrollControls, useScroll } from '@react-three/drei'
  import { Group } from 'three'

  // Animated 3D Model Component
  function AnimatedModel({ url }: { url: string }) {
    const { scene } = useGLTF(url)
    const meshRef = useRef<Group>(null)
    const scroll = useScroll()

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y = scroll.offset * Math.PI * 2
        meshRef.current.rotation.x = scroll.offset * Math.PI * 0.5
      }
    })

    return <primitive ref={meshRef} object={scene} scale={2} />
  }

  // Scrolling Text Component
  function ScrollingText({ 
    items, 
    direction = 'left',
    className = '' 
  }: {
    items: string[]
    direction?: 'left' | 'right'
    className?: string
  }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const scroll = useScroll()

    useFrame(() => {
      if (containerRef.current) {
        const progress = scroll.offset
        const translateX = direction === 'left'
          ? -progress * 100
          : progress * 100

        containerRef.current.style.transform = `translateX(${translateX}%)`
      }
    })

    return (
      <div className={`absolute flex items-center gap-8 whitespace-nowrap ${className}`}>
        <div ref={containerRef} className="flex gap-8">
          {items.concat(items).map((item, index) => (
            <div
              key={index}
              className="text-4xl md:text-6xl font-bold text-gray-200 dark:text-gray-700 select-none"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    )
  }

  export default function ScrollSection() {
    const leftTexts = ['SECURE', 'PROTECT', 'SAFE', 'GUARD']
    const rightTexts = ['AI POWERED', 'INTELLIGENT', 'SMART', 'ADVANCED']

    return (
      <section className="relative h-[200vh] bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-800">
        {/* 3D Model Canvas */}
        <div className="sticky top-0 h-screen">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ScrollControls pages={2} damping={0.1}>
              <AnimatedModel url="/path/to/your/model.glb" />
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} />

              {/* Left side scrolling text */}
              <ScrollingText
                items={leftTexts}
                direction="left"
                className="top-1/4 left-0"
              />

              {/* Right side scrolling text */}
              <ScrollingText
                items={rightTexts}
                direction="right"
                className="top-3/4 right-0"
              />
            </ScrollControls>
          </Canvas>
        </div>

        {/* HTML Text Overlays (Alternative approach) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="sticky top-0 h-screen overflow-hidden">
            {/* Left side text */}
            <div className="absolute left-0 top-1/4 -translate-y-1/2">
              <div className="flex gap-8 animate-scroll-left">
                {leftTexts.concat(leftTexts).map((text, i) => (
                  <span key={i} className="text-6xl font-black text-gray-200/20 whitespace-nowrap">
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side text */}
            <div className="absolute right-0 top-3/4 -translate-y-1/2">
              <div className="flex gap-8 animate-scroll-right">
                {rightTexts.concat(rightTexts).map((text, i) => (
                  <span key={i} className="text-6xl font-black text-gray-200/20 whitespace-nowrap">
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }