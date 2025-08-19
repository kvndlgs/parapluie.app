'use client'

  import { useRef } from 'react'
  import { Canvas, useFrame } from '@react-three/fiber'
  import { useGLTF } from '@react-three/drei'
  import { useScroll, useTransform, motion } from 'framer-motion'
  import { Group } from 'three'


  const Umbrella = '/umbrella.glb';


  // Animated 3D Model Component
  function AnimatedModel({ url }: { url: string }) {
    const { scene } = useGLTF(url)
    const meshRef = useRef<Group>(null)
    const { scrollYProgress } = useScroll()
    const rotationZ = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2])
    const rotationX = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 0.5])

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y = rotationZ.get()
        meshRef.current.rotation.x = rotationX.get()
      }
    })

    return <primitive ref={meshRef} object={scene} scale={3} />
  }

  // Scrolling Text Component using Framer Motion
  function ScrollingText({ 
    items, 
    direction = 'left',
    className = '' 
  }: {
    items: string[]
    direction?: 'left' | 'right'
    className?: string
  }) {
    const { scrollYProgress } = useScroll()
    const translateX = useTransform(
      scrollYProgress, 
      [0, 2], 
      direction === 'left' ? [250, -500] : [-250, 500]
    )

    return (
      <div className={`absolute flex items-center gap-8 whitespace-nowrap pointer-events-none ${className}`}>
        <motion.div 
          style={{ x: translateX }} 
          className="flex gap-8"
        >
          {items.concat(items).map((item, index) => (
            <div
              key={index}
              className="text-6xl md:text-9xl font-black  text-secondary dark:text-gray-700/30 select-none"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    )
  }

  export default function ScrollSection() {
    const leftTexts = ['DICKS', 'COCKS', 'SHIT', 'POOP']
    const rightTexts = ['TOES', 'TITS', 'HECK', 'BALLS']

    return (
      <section className="relative h-[200vh] bg-foreground dark:from-slate-900 dark:to-slate-800">
        {/* 3D Model Canvas */}
        <div className="sticky top-0 h-screen">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <AnimatedModel url={Umbrella} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} />
          </Canvas>

          {/* HTML Text Overlays - OUTSIDE Canvas */}
          <ScrollingText
            items={leftTexts}
            direction="left"
            className="top-1/4 left-0 z-10"
          />

          <ScrollingText
            items={rightTexts}
            direction="right"
            className="top-3/4 right-0 z-10"
          />
        </div>
      </section>
    )
  }
