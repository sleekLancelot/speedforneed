import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber'
import './index.css';
import {Scene} from './component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Canvas>
    <Scene />
  </Canvas>
);
