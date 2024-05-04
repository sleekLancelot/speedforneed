interface WheelDebugProp {
  radius: number
  wheelRef: any
  debug?: boolean
}

export const WheelDebug = ({
  radius,
  wheelRef,
  debug= true
}: WheelDebugProp) => {
  return debug ? (
    <group ref={wheelRef}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[radius, radius, 0.015, 16]} />
        <meshNormalMaterial transparent={true} opacity={0.25} />
      </mesh>
    </group>
  ) : null;
};