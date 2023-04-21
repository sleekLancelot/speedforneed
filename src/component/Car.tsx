import { useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Car = () => {
    let mesh: any = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + './models/car.glb'
    ).scene

    useEffect(() => {
        // if (!meshResult) return;

        // let mesh = meshResult;

        mesh.scale.set(0.0012, 0.0012, 0.0012);
    
        mesh.children[0].position?.set(-365, -18, -67);
    }, [mesh])

  return (
    <primitive
        object={mesh}
        rotation-y={Math.PI}
        // position={[0, -0.09, 0]}
    />
  )
}

export {Car}