import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber'
import './index.css';
import {Scene} from './component';
import { Physics } from '@react-three/cannon';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Canvas>
    <Physics
      broadphase={'SAP'}
      gravity={[0, -2.6,0]}
    >
      <Scene />
    </Physics>
  </Canvas>
);
