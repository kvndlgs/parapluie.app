"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { Phone } from "./models/Phone";
import { WalterWithUmbrella } from "./models/WalterWithUmbrella";

export function HeroScene() {
  const scroll = useScroll();
  const phoneRef = useRef<Group>(null);
  const walterGroupRef = useRef<Group>(null);

  // For testing: set to a specific pose to override scroll behavior
  // null = use scroll-driven poses (default)
  const [manualPose, setManualPose] = useState<
    "inCard" | "standing" | "holding" | "covered" | "vibing" | null
  >(null);

  // Expose setManualPose to window for testing in dev console
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).setWalterPose = setManualPose;
    }
  }, []);

  // Animate phone and Walter based on scroll
  useFrame(() => {
    const scrollOffset = scroll.offset;

    // Phone animation - starts flat, rotates as Walter breaks out, locks center for 3D tour
    if (phoneRef.current) {
      const baseScale = 13.5; // Bigger so Walter is clearly visible inside

      if (scrollOffset < 0.15) {
        // Stage 1: Phone stays flat initially
        phoneRef.current.rotation.x = 0;
        phoneRef.current.rotation.y = 0;
        phoneRef.current.position.set(0, -2.6, 0);
        phoneRef.current.scale.set(baseScale, baseScale, baseScale);
      } else if (scrollOffset < 0.8) {
        // Stage 2: Phone rotates/moves as Walter breaks out (15-80%)
        const progress = (scrollOffset - 0.15) / 0.65; // 0 to 1 over this range
        phoneRef.current.rotation.x = progress * 0.3;
        phoneRef.current.rotation.y = progress * 0.5;
        phoneRef.current.position.set(0, -2.5 + progress * 0.5, -progress * 1);
        phoneRef.current.scale.set(baseScale, baseScale, baseScale);
      } else {
        // Stage 3: Phone locks in center for 3D tour (80%+)
        phoneRef.current.rotation.x = 0;
        phoneRef.current.rotation.y = 0;
        phoneRef.current.position.set(0, -1, 1); // Centered, slightly down
        phoneRef.current.scale.set(10, 10, 10); // Visible size for 3D tour
      }
    }

    // Walter animation - starts in phone, detaches and moves
    if (walterGroupRef.current) {
      // Manual pose testing: position Walter in visible area (center)
      if (manualPose) {
        walterGroupRef.current.position.set(0, -1, 1); // Center, slightly down, forward
        walterGroupRef.current.scale.set(1.5, 1.5, 1.5); // Reasonable size
        walterGroupRef.current.visible = true;
      } else if (scrollOffset < 0.8) {
        // Scroll mode: Walter visible during animation (0-80%)
        walterGroupRef.current.position.set(0.45, -0.7, 0.3);
        walterGroupRef.current.scale.set(2.5, 2.5, 2.5); // Base multiplier for all poses
        walterGroupRef.current.visible = true;
      } else {
        // Hide Walter when 3D tour starts (80%+)
        walterGroupRef.current.visible = false;
      }
    }
  });

  return (
    <>
      {/* Phone mockup - starts centered, rotates to reveal 3D */}
      <Phone ref={phoneRef} scroll={scroll.offset} />

      {/* Walter with Umbrella - position controlled entirely by useFrame */}
      <WalterWithUmbrella
        ref={walterGroupRef}
        poseState={manualPose || undefined}
      />
    </>
  );
}
