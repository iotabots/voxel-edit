import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Ground } from './game/Ground';
import { Camera } from './game/Camera';
import { Player } from './game/Player';
import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Vector3 } from 'three';
import { Cube } from './game/Cube';
import { useCube } from './game/useCubeStore';
import { RecoilRoot } from 'recoil';
import test from './game/game_test.json';


const Cubes = () => {
    let cubes = useCube();


    let boxes = test.voxelWorld.cells

    for (let i = 0; i <= test.voxelWorld.cellSize; i++) {
        // cubes = [<Cube position={[i, 1, -10]} />, ...cubes]
        // cubes = [<Cube position={[1, i, -10]} />, ...cubes]
        // cubes = [<Cube position={[1, 1, -i]} />, ...cubes]
        console.log("box", boxes[i])
    }
    cubes = [<Cube position={[1, 1, 1]} />, ...cubes]
    console.log("cubes", cubes)
    return cubes;
};

// function Sphere(props) {
//     const texture = useTexture('/materials/terrazo.png')
//     return (
//         <mesh {...props}>
//             <sphereBufferGeometry args={[1, 64, 64]} />
//             <meshPhysicalMaterial envMapIntensity={0.4} map={texture} clearcoat={0.8} clearcoatRoughness={0} roughness={1} metalness={0} />
//         </mesh>
//     )
// }

export default function Album() {


    return (
        <div style={{ height: '100vh' }}>
            <Canvas shadowMap sRGB gl={{ alpha: false }}>
                <RecoilRoot>

                    <Camera />
                    <Sky sunPosition={new Vector3(100, 10, 100)} />
                    {/* <Sphere /> */}

                    <ambientLight intensity={0.3} />
                    <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
                    <Physics gravity={[0, -30, 0]}>
                        <Player />
                        <Ground />
                        <Cubes />
                    </Physics>
                </RecoilRoot>
            </Canvas>
        </div>
    )
}

