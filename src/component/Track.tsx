import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Track = () => {
  const trackModel = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + './models/track.glb'
  )

  const colorMap = useLoader(
    TextureLoader,
    process.env.PUBLIC_URL + './textures/track.png'
  )

  useEffect(() => {
    colorMap.anisotropy = 16
  }, [colorMap])

  const result: any = trackModel.scene.children[0]
  const geometry = result.geometry

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial
        toneMapped={false}
        map={colorMap}
      />
    </mesh>
  )
}

export {Track}