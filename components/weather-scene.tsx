'use client'

import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

// Create toon gradient for cartoon shading
function createToonGradient() {
  const canvas = document.createElement('canvas')
  canvas.width = 2
  canvas.height = 1
  const context = canvas.getContext('2d')!
  const gradient = context.createLinearGradient(0, 0, canvas.width, 0)
  gradient.addColorStop(0, '#444444')
  gradient.addColorStop(0.5, '#888888')
  gradient.addColorStop(1, '#ffffff')
  context.fillStyle = gradient
  context.fillRect(0, 0, canvas.width, canvas.height)
  
  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.NearestFilter
  texture.magFilter = THREE.NearestFilter
  return texture
}

export default function WeatherScene() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene?: THREE.Scene
    camera?: THREE.PerspectiveCamera
    renderer?: THREE.WebGLRenderer
    directionalLight?: THREE.DirectionalLight
    ambientLight?: THREE.AmbientLight
    rainParticles?: THREE.Points
    cloudParticles?: THREE.Points
    ground?: THREE.Mesh
    trees?: THREE.Group
    sky?: THREE.Mesh
    clouds?: THREE.Group
  }>({})

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    mountRef.current.appendChild(renderer.domElement)

    // Store references
    sceneRef.current.scene = scene
    sceneRef.current.camera = camera
    sceneRef.current.renderer = renderer

    // Create ground with cartoon-style grass
    const groundGeometry = new THREE.PlaneGeometry(100, 100)
    const groundMaterial = new THREE.MeshToonMaterial({ 
      color: 0x90EE90,
      gradientMap: createToonGradient()
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)
    sceneRef.current.ground = ground

    // Create trees
    const trees = new THREE.Group()
    for (let i = 0; i < 15; i++) {
      const treeGroup = new THREE.Group()
      
      // Tree trunk with cartoon style
      const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.4, 3)
      const trunkMaterial = new THREE.MeshToonMaterial({ 
        color: 0xD2691E,
        gradientMap: createToonGradient()
      })
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial)
      trunk.position.y = 1.5
      trunk.castShadow = true
      treeGroup.add(trunk)

      // Tree crown with cartoon style
      const crownGeometry = new THREE.SphereGeometry(2.5, 8, 8)
      const crownMaterial = new THREE.MeshToonMaterial({ 
        color: 0x32CD32,
        gradientMap: createToonGradient()
      })
      const crown = new THREE.Mesh(crownGeometry, crownMaterial)
      crown.position.y = 4
      crown.castShadow = true
      treeGroup.add(crown)

      // Position trees randomly
      treeGroup.position.x = (Math.random() - 0.5) * 80
      treeGroup.position.z = (Math.random() - 0.5) * 80
      trees.add(treeGroup)
    }
    scene.add(trees)
    sceneRef.current.trees = trees

    // Create cartoon-style sky
    const skyGeometry = new THREE.SphereGeometry(500, 32, 32)
    const skyMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x87CEEB, 
      side: THREE.BackSide
    })


    const sky = new THREE.Mesh(skyGeometry, skyMaterial)
    
    // Add some fluffy cartoon clouds as geometry
    const cloudGroup = new THREE.Group()
    for (let i = 0; i < 8; i++) {
      const cloudGeom = new THREE.SphereGeometry(5 + Math.random() * 3, 8, 8)
      const cloudMat = new THREE.MeshToonMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
      })
      const cloud = new THREE.Mesh(cloudGeom, cloudMat)
      cloud.position.set(
        (Math.random() - 0.5) * 200,
        20 + Math.random() * 15,
        (Math.random() - 0.5) * 200
      )
      cloud.scale.set(1 + Math.random(), 0.6 + Math.random() * 0.4, 1 + Math.random())
      cloudGroup.add(cloud)
    }
    scene.add(cloudGroup)
    sceneRef.current.clouds = cloudGroup
    scene.add(sky)
    sceneRef.current.sky = sky

    // Cartoon-style lighting - brighter and more saturated
    const directionalLight = new THREE.DirectionalLight(0xFFE066, 1.2)
    directionalLight.position.set(50, 50, 50)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.camera.near = 0.1
    directionalLight.shadow.camera.far = 200
    directionalLight.shadow.camera.left = -50
    directionalLight.shadow.camera.right = 50
    directionalLight.shadow.camera.top = 50
    directionalLight.shadow.camera.bottom = -50
    scene.add(directionalLight)
    sceneRef.current.directionalLight = directionalLight

    const ambientLight = new THREE.AmbientLight(0xB0E0E6, 0.6)
    scene.add(ambientLight)
    sceneRef.current.ambientLight = ambientLight

    // Create rain particles
    const rainCount = 1000
    const rainGeometry = new THREE.BufferGeometry()
    const rainPositions = new Float32Array(rainCount * 3)
    const rainVelocities = new Float32Array(rainCount)

    for (let i = 0; i < rainCount; i++) {
      rainPositions[i * 3] = (Math.random() - 0.5) * 200
      rainPositions[i * 3 + 1] = Math.random() * 100
      rainPositions[i * 3 + 2] = (Math.random() - 0.5) * 200
      rainVelocities[i] = Math.random() * 0.5 + 0.5
    }



    rainGeometry.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3))
    const rainMaterial = new THREE.PointsMaterial({
      color: 0x4169E1,
      size: 0.2,
      transparent: true,
      opacity: 0
    })
    const rain = new THREE.Points(rainGeometry, rainMaterial)
    rain.userData = { velocities: rainVelocities }
    scene.add(rain)
    sceneRef.current.rainParticles = rain

    // Create cloud particles
    const cloudCount = 200
    const cloudGeometry = new THREE.BufferGeometry()
    const cloudPositions = new Float32Array(cloudCount * 3)

    for (let i = 0; i < cloudCount; i++) {
      cloudPositions[i * 3] = (Math.random() - 0.5) * 100
      cloudPositions[i * 3 + 1] = Math.random() * 20 + 20
      cloudPositions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }

    cloudGeometry.setAttribute('position', new THREE.BufferAttribute(cloudPositions, 3))
    const cloudMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 4,
      transparent: true,
      opacity: 0
    })
    const clouds = new THREE.Points(cloudGeometry, cloudMaterial)
    scene.add(clouds)
    sceneRef.current.cloudParticles = clouds

    // Camera position
    camera.position.set(0, 8, 15)
    camera.lookAt(0, 0, 0)

    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Update rain animation
      if (sceneRef.current.rainParticles) {
        const positions = sceneRef.current.rainParticles.geometry.attributes.position.array as Float32Array
        const velocities = sceneRef.current.rainParticles.userData.velocities
        
        for (let i = 0; i < rainCount; i++) {
          positions[i * 3 + 1] -= velocities[i]
          if (positions[i * 3 + 1] < 0) {
            positions[i * 3 + 1] = 100
          }
        }
        sceneRef.current.rainParticles.geometry.attributes.position.needsUpdate = true
      }

      renderer.render(scene, camera)
    }
    animate()


    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Weather transitions based on scroll
  useEffect(() => {
    if (!sceneRef.current.scene) return

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const scrollProgress = scrollY / maxScroll

    // Weather phases: 0-0.25 sunny, 0.25-0.5 cloudy, 0.5-0.75 rain, 0.75-1 back to sunny

    const { directionalLight, ambientLight, rainParticles, cloudParticles, sky, clouds } = sceneRef.current

    if (scrollProgress <= 0.25) {
      // Sunny weather - bright and cheerful
      if (directionalLight) {
        directionalLight.intensity = 1.2
        directionalLight.color.setHex(0xFFE066)
      }
      if (ambientLight) {
        ambientLight.intensity = 0.6
        ambientLight.color.setHex(0xB0E0E6)
      }
      if (sky) (sky.material as THREE.MeshBasicMaterial).color.setHex(0x87CEEB)
      if (rainParticles) (rainParticles.material as THREE.PointsMaterial).opacity = 0
      if (cloudParticles) (cloudParticles.material as THREE.PointsMaterial).opacity = 0
      if (clouds) {
        clouds.children.forEach(cloud => {
          (cloud as THREE.Mesh).material.opacity = 0.1
        })
      }
    } else if (scrollProgress <= 0.5) {
      // Transition to cloudy - softer lighting
      const cloudPhase = (scrollProgress - 0.25) / 0.25
      if (directionalLight) {
        directionalLight.intensity = 1.2 - cloudPhase * 0.6
        const lightColor = new THREE.Color(0xFFE066).lerp(new THREE.Color(0xC0C0C0), cloudPhase)
        directionalLight.color.copy(lightColor)
      }
      if (ambientLight) {
        ambientLight.intensity = 0.6 - cloudPhase * 0.3
        const ambientColor = new THREE.Color(0xB0E0E6).lerp(new THREE.Color(0x9999AA), cloudPhase)
        ambientLight.color.copy(ambientColor)
      }
      if (sky) {
        const skyColor = new THREE.Color(0x87CEEB).lerp(new THREE.Color(0x96A9C4), cloudPhase)
        ;(sky.material as THREE.MeshBasicMaterial).color.copy(skyColor)
      }
      if (cloudParticles) (cloudParticles.material as THREE.PointsMaterial).opacity = cloudPhase * 0.8
      if (rainParticles) (rainParticles.material as THREE.PointsMaterial).opacity = 0
      if (clouds) {
        clouds.children.forEach(cloud => {
          (cloud as THREE.Mesh).material.opacity = 0.1 + cloudPhase * 0.7
        })
      }
    } else if (scrollProgress <= 0.75) {
      // Transition to rainy - moody but still colorful
      const rainPhase = (scrollProgress - 0.5) / 0.25
      if (directionalLight) {
        directionalLight.intensity = 0.6 - rainPhase * 0.3
        const lightColor = new THREE.Color(0xC0C0C0).lerp(new THREE.Color(0x6495ED), rainPhase)
        directionalLight.color.copy(lightColor)
      }
      if (ambientLight) {
        ambientLight.intensity = 0.3 - rainPhase * 0.1
        const ambientColor = new THREE.Color(0x9999AA).lerp(new THREE.Color(0x708090), rainPhase)
        ambientLight.color.copy(ambientColor)
      }
      if (sky) {
        const skyColor = new THREE.Color(0x96A9C4).lerp(new THREE.Color(0x708090), rainPhase)
        ;(sky.material as THREE.MeshBasicMaterial).color.copy(skyColor)
      }
      if (cloudParticles) (cloudParticles.material as THREE.PointsMaterial).opacity = 0.8
      if (rainParticles) (rainParticles.material as THREE.PointsMaterial).opacity = rainPhase * 0.7
      if (clouds) {
        clouds.children.forEach(cloud => {
          (cloud as THREE.Mesh).material.opacity = 0.8 + rainPhase * 0.2
        })
      }
    } else {
      // Return to sunny - bright and vibrant
      const sunnyPhase = (scrollProgress - 0.75) / 0.25
      if (directionalLight) {
        directionalLight.intensity = 0.3 + sunnyPhase * 0.9
        const lightColor = new THREE.Color(0x6495ED).lerp(new THREE.Color(0xFFE066), sunnyPhase)
        directionalLight.color.copy(lightColor)
      }
      if (ambientLight) {
        ambientLight.intensity = 0.2 + sunnyPhase * 0.4
        const ambientColor = new THREE.Color(0x708090).lerp(new THREE.Color(0xB0E0E6), sunnyPhase)
        ambientLight.color.copy(ambientColor)
      }
      if (sky) {
        const skyColor = new THREE.Color(0x708090).lerp(new THREE.Color(0x87CEEB), sunnyPhase)
        ;(sky.material as THREE.MeshBasicMaterial).color.copy(skyColor)
      }
      if (cloudParticles) (cloudParticles.material as THREE.PointsMaterial).opacity = 0.8 * (1 - sunnyPhase)
      if (rainParticles) (rainParticles.material as THREE.PointsMaterial).opacity = 0.7 * (1 - sunnyPhase)
      if (clouds) {
        clouds.children.forEach(cloud => {
          (cloud as THREE.Mesh).material.opacity = 1.0 * (1 - sunnyPhase * 0.9)
        })
      }
    }
  }, [scrollY])

  return (
    <div className="fixed inset-0 -z-10">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  )
}