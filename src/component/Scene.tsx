import React, { Suspense, useState, } from 'react'
import { GameLoader } from './gameLoader'
import { Environment, PerspectiveCamera, OrbitControls, } from '@react-three/drei'

const Scene = (props: any) => {
    const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);

  return (
    <Suspense fallback={<GameLoader />}>
			<Environment
					files={process.env.PUBLIC_URL + '/textures/envmap.hdr'}
					background
			/>

			<PerspectiveCamera makeDefault position={cameraPosition} fov={40} {...props} />
			<OrbitControls target={[-2.64, -0.71, 0.03]} />
    </Suspense>
  )
}

export {Scene}