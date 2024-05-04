import { useEffect, useState } from "react";

export const useControl = (vehicleApi: any, chassisApi: any) => {
    let [controls, setControls] = useState<any>({});

  useEffect(() => {
    const keyDownPressHandler = (e: any) => {
      setControls((controls: any) => ({ ...controls, [e.key.toLowerCase()]: true }));
    }

    const keyUpPressHandler = (e: any) => {
      setControls((controls: any) => ({ ...controls, [e.key.toLowerCase()]: false }));
    }
  
    window.addEventListener("keydown", keyDownPressHandler);
    window.addEventListener("keyup", keyUpPressHandler);
    return () => {
      window.removeEventListener("keydown", keyDownPressHandler);
      window.removeEventListener("keyup", keyUpPressHandler);
    }
  }, []);

  useEffect(() => {
    if(!vehicleApi || !chassisApi) return;

    //Movement controller
    if (controls?.w) {
    // if w is pressed, move forward
      vehicleApi.applyEngineForce(150, 2);
      vehicleApi.applyEngineForce(150, 3);
    } else if (controls?.s) {
    // if s is pressed, move backwards
      vehicleApi.applyEngineForce(-150, 2);
      vehicleApi.applyEngineForce(-150, 3);
    } else {
    //the cars default vertical position 
      vehicleApi.applyEngineForce(0, 2);
      vehicleApi.applyEngineForce(0, 3);
    }

    if (controls.a) {
        // if a is pressed, move the front wheels (index 2 and 3) to the left
        vehicleApi.setSteeringValue(0.35, 2);
        vehicleApi.setSteeringValue(0.35, 3);
        //And move the back wheels(index 0 and 1) to the right
        vehicleApi.setSteeringValue(-0.1, 0);
        vehicleApi.setSteeringValue(-0.1, 1);
      } else if (controls.d) {
        // if d is pressed, move the front wheels (index 2 and 3) to the right
        vehicleApi.setSteeringValue(-0.35, 2);
        vehicleApi.setSteeringValue(-0.35, 3);
        //And move the back wheels(index 0 and 1) to the left
        vehicleApi.setSteeringValue(0.1, 0);
        vehicleApi.setSteeringValue(0.1, 1);
      } else {
        for(let i = 0; i < 4; i++) {
          vehicleApi.setSteeringValue(0, i);
        }
    }
  }, [vehicleApi, chassisApi, controls])
}