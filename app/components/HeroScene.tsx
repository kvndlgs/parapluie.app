import { useScroll } from "@react-three/drei";
import { WalterTPose } from "./WalterTPose";
import { Umbrella } from "./Umbrella";

export function HeroScene() {
  const scroll = useScroll();

  return (
    <>
      {/* Phone with UI */}

      {/* Walter (starts behind phone)
      <WalterTPose position={[-2, 0, -2]} scroll={scroll.offset} />
*/}
      {/* Umbrella */}
      <Umbrella position={[0, 0, -1]} scroll={scroll.offset} />
    </>
  );
}
