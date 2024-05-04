import { useBox, useRaycastVehicle } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useWheels } from '../hooks/useWheels';
import { WheelDebug } from './WheelDebug';
import { useControl } from '../hooks/useControl';

const Car = () => {
    let mesh: any = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + './models/car.glb'
    ).scene

  const position = [-1.5, 0.5, 3];
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.05;

  const chassisBodyArgs = [width, height, front * 2];
  const [chassisBody, chassisApi] = useBox(
    () => ({
      allowSleep: false,
      args: chassisBodyArgs as unknown as any,
      mass: 150,
      position: position as any,
    }),
    useRef(null),
  );

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos: wheelInfos as any,
      wheels: wheels as any,
    }),
    useRef(null),
  );

    useEffect(() => {
        // if (!meshResult) return;

        // let mesh = meshResult;

        mesh.scale.set(0.0012, 0.0012, 0.0012);
    
        mesh.children[0].position?.set(-365, -18, -67);
    }, [mesh])

  useControl(vehicleApi, chassisApi)

  return (
    // <primitive
    //     object={mesh}
    //     rotation-y={Math.PI}
    //     // position={[0, -0.09, 0]}
    // />
    <group ref={vehicle as any} name='vehicle'>
      <mesh ref={chassisBody as any}>
        <meshBasicMaterial transparent opacity={0.3} />
        <boxGeometry args={chassisBodyArgs as any} />
      </mesh>

      <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
    </group>
  )
}

export {Car}