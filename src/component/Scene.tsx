import React, { Suspense, useEffect, useState, } from 'react'
import { Environment, PerspectiveCamera, OrbitControls, } from '@react-three/drei'

import { GameLoader } from './gameLoader'
import { Track } from './Track';
import { Ground } from './Ground';
import { Car } from './Car';

const Scene = (props: any) => {
    const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);
	const [thirdPerson, setThirdPerson] = useState(false);
	
	useEffect(() => {
		function keydownHandler(e: any) {
		  if (e.key == "k") {
			// Math.random is necessary to trigger a state change
			if(thirdPerson) setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
			setThirdPerson(!thirdPerson); 
		  }
		}
	
		window.addEventListener("keydown", keydownHandler);
		return () => window.removeEventListener("keydown", keydownHandler);
	}, [thirdPerson]);

  return (
    <Suspense fallback={<GameLoader />}>
		<Environment
			files={process.env.PUBLIC_URL + '/textures/envmap.hdr'}
			background
		/>

		<PerspectiveCamera makeDefault position={cameraPosition} fov={40} {...props} />
		{
			!thirdPerson ?
			<OrbitControls target={[-2.64, -0.71, 0.03]} />
			: null
		}

		<Track />
		<Ground />
		<Car thirdPerson={thirdPerson} />
    </Suspense>
  )
}

export {Scene}