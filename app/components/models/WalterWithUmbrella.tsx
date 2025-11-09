"use client";

import { useRef, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { Group } from "three";
import { Walter } from "./Walter";
import { Umbrella } from "./Umbrella";
import { JSX } from "react";

// Define pose states based on walter-states.jpg reference
type PoseState = {
  walterPos: [number, number, number];
  walterRot: [number, number, number];
  walterScale: number;
  umbrellaPos: [number, number, number];
  umbrellaRot: [number, number, number];
  umbrellaScale: number;
};

const POSE_STATES: Record<string, PoseState> = {
  // Initial state - Walter inside phone, umbrella off to the side (not visible yet)
  inCard: {
    walterPos: [-0.02, -0.2, 0],
    walterRot: [0, 0, 0],
    walterScale: 0.12,
    umbrellaPos: [2, -0.3, 0], // Far to the right, out of view
    umbrellaRot: [0, 0, 0],
    umbrellaScale: 0,
  },
  // Umbrella spinning in, approaching Walter from the side
  standing: {
    walterPos: [0, 0, 0],
    walterRot: [0.5, 0.3, 0], // Walter starting to turn
    walterScale: 0.35,
    umbrellaPos: [-0.17, 0.2, 0.2], // Near Walter's hand
    umbrellaRot: [0.5, 0, -0.2], // Still spinning
    umbrellaScale: 0.35,
  },
  // Umbrella reaches Walter's hand area, rotating more
  holding: {
    walterPos: [0, 0, 0],
    walterRot: [0.1, 2, -0.4],
    walterScale: 0.4,
    umbrellaPos: [0.5, 0.1, 0.4], // Right side, slightly above
    umbrellaRot: [2, 3.5, 1.57], // Spinning 90° (falling sideways)
    umbrellaScale: 0.4,
  },
  // Walter caught by wind, spinning with umbrella
  covered: {
    walterPos: [-2, 2, 0],
    walterRot: [0, 0.5, 0], // Walter spun 90° (facing sideways)
    walterScale: 0.8,
    umbrellaPos: [-1, 2, -1], // Above and slightly in front
    umbrellaRot: [2.3, 3.5, -4.14], // Umbrella tilted and spun 180°
    umbrellaScale: 1,
  },
  // Full spin - Walter and umbrella together, caught in wind
  vibing: {
    walterPos: [0, 1, 0.2],
    walterRot: [-0.2, 0.3, 2], // Walter spun 180° (facing away)
    walterScale: 0.5,
    umbrellaPos: [0.08, 1.2, 0], // Above Walter
    umbrellaRot: [-0.8, -4.4, 4.9], // Umbrella tilted, spun 270°
    umbrellaScale: 0.85,
  },
};

type GroupProps = JSX.IntrinsicElements["group"];

interface WalterWithUmbrellaProps extends GroupProps {
  poseState?: keyof typeof POSE_STATES;
}

export const WalterWithUmbrella = forwardRef<Group, WalterWithUmbrellaProps>(
  ({ poseState, ...props }, ref) => {
    const walterRef = useRef<Group>(null);
    const umbrellaRef = useRef<Group>(null);

    // Get scroll from context for live updates
    const scrollData = useScroll();

    // Get current and target poses based on scroll
    const getCurrentPose = (scroll: number): PoseState => {
      if (poseState) {
        return POSE_STATES[poseState];
      }

      // Debug scroll value
      if (
        typeof window !== "undefined" &&
        scroll > 0 &&
        !(window as any)._scrollLogged
      ) {
        console.log("Scroll value:", scroll);
        (window as any)._scrollLogged = true;
        setTimeout(() => {
          (window as any)._scrollLogged = false;
        }, 1000);
      }

      // Scroll-driven pose progression
      if (scroll < 0.2) return POSE_STATES.inCard;
      if (scroll < 0.4) return POSE_STATES.standing;
      if (scroll < 0.6) return POSE_STATES.holding;
      if (scroll < 0.8) return POSE_STATES.covered;
      return POSE_STATES.vibing;
    };

    const getNextPose = (scroll: number): PoseState => {
      if (scroll < 0.2) return POSE_STATES.standing;
      if (scroll < 0.4) return POSE_STATES.holding;
      if (scroll < 0.6) return POSE_STATES.covered;
      if (scroll < 0.8) return POSE_STATES.vibing;
      return POSE_STATES.vibing;
    };

    // Interpolation helper
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const lerpVector3 = (
      a: [number, number, number],
      b: [number, number, number],
      t: number,
    ): [number, number, number] => {
      return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
    };

    // Animate poses on scroll
    useFrame(() => {
      if (!walterRef.current || !umbrellaRef.current) return;

      // Get live scroll value
      const scroll = scrollData.offset;

      // Hide umbrella initially (when Walter is in phone), show when breaking out
      // Always show umbrella when using manual pose (for testing)
      umbrellaRef.current.visible = poseState ? true : scroll > 0.15;

      // Manual pose mode: apply pose directly without interpolation
      if (poseState) {
        const pose = POSE_STATES[poseState];

        walterRef.current.position.set(...pose.walterPos);
        walterRef.current.rotation.set(...pose.walterRot);
        walterRef.current.scale.set(
          pose.walterScale,
          pose.walterScale,
          pose.walterScale,
        );

        umbrellaRef.current.position.set(...pose.umbrellaPos);
        umbrellaRef.current.rotation.set(...pose.umbrellaRot);
        umbrellaRef.current.scale.set(
          pose.umbrellaScale,
          pose.umbrellaScale,
          pose.umbrellaScale,
        );

        return;
      }

      // Scroll-driven mode: interpolate between poses
      const currentPose = getCurrentPose(scroll);
      const nextPose = getNextPose(scroll);

      // Calculate interpolation factor within current segment
      const segmentProgress = (scroll % 0.2) / 0.2;

      // Interpolate Walter
      const walterPos = lerpVector3(
        currentPose.walterPos,
        nextPose.walterPos,
        segmentProgress,
      );
      const walterRot = lerpVector3(
        currentPose.walterRot,
        nextPose.walterRot,
        segmentProgress,
      );
      const walterScale = lerp(
        currentPose.walterScale,
        nextPose.walterScale,
        segmentProgress,
      );

      walterRef.current.position.set(...walterPos);
      walterRef.current.rotation.set(...walterRot);
      walterRef.current.scale.set(walterScale, walterScale, walterScale);

      // Interpolate Umbrella
      const umbrellaPos = lerpVector3(
        currentPose.umbrellaPos,
        nextPose.umbrellaPos,
        segmentProgress,
      );
      const umbrellaRot = lerpVector3(
        currentPose.umbrellaRot,
        nextPose.umbrellaRot,
        segmentProgress,
      );
      const umbrellaScale = lerp(
        currentPose.umbrellaScale,
        nextPose.umbrellaScale,
        segmentProgress,
      );

      umbrellaRef.current.position.set(...umbrellaPos);
      umbrellaRef.current.rotation.set(...umbrellaRot);
      umbrellaRef.current.scale.set(
        umbrellaScale,
        umbrellaScale,
        umbrellaScale,
      );
    });

    return (
      <group ref={ref} {...props}>
        <Walter ref={walterRef} />
        <Umbrella ref={umbrellaRef} />
      </group>
    );
  },
);

WalterWithUmbrella.displayName = "WalterWithUmbrella";
