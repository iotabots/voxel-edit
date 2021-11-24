import { useState, useEffect } from 'react';

function moveFieldByKey(key) {
    console.log("key", key)
  const keys = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump'
  };
  return keys[key];
}

export const usePlayerControls = () => {
  const [movement, setMovement] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false
  });

  useEffect(() => {
      console.log("sd")
      console.log("sd", document)
    const handleKeyDown = e => {
      setMovement(m => ({
        ...m,
        [moveFieldByKey(e.code)]: true
      }));
    };
    const handleKeyUp = e => {
      setMovement(m => ({
        ...m,
        [moveFieldByKey(e.code)]: false
      }));
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};