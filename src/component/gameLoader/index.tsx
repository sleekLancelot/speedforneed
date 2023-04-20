import React from 'react'
import { Html } from "@react-three/drei";

import './gameLoader.css'

const GameLoader = () => {
  return (
		<Html
			as='div'
			center
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: '100vw',
				height: '100vh',
				backgroundColor: '#333',
			}}
		>
			<div className="loading">
				<svg width="64px" height="48px">
						<polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
					<polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
				</svg>
			</div>
		</Html>
  )
}

export {GameLoader}