import { useBox } from "@react-three/cannon";

export function ColliderBox({ position, scale, debug= false }: {
    position: any
    scale: any
    debug?: boolean
}) {
  useBox(() => ({
    args: scale,
    position: position,
    type: "Static",
  }));

  return (
    debug ? (
      <mesh position={position}>
        <boxGeometry args={scale} />
        <meshBasicMaterial transparent={true} opacity={0.25} />
      </mesh>
    ) : null
  );
}