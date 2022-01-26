import React, {useState, Suspense, useEffect} from 'react';
import './page.css';

import * as THREE from 'three'
import { Environment, OrbitControls, Image } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {useSpring, animated} from 'react-spring'

import Mac from '../component/Mac-draco';
import Screen from '../component/Screen';
import SwipeGallery from '../component2/SwipeGallery';



const Exp = ()=>{

    const [open, setOpen] = useState(false);
    const {opacity, transform} = useSpring({ opacity : open?0:1, transform : `translate(-50%,${open?100:-100}px)`, config:{mass: 5, tension: 500, friction: 100 } })


    return(
        <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center' }}>
            <div style={{width : "100%", height : "100vh" }}>
                <Canvas  style={{width:"100%", height : "100%"}} dpr={[1, 2]} camera={{ position: [0,-50,10], fov: 25, near: 0.1, far: 500 }}>
                    <Suspense fallback={null}>
                        <Mac open={open} setOpen={setOpen} />
                    </Suspense>
                    <Environment preset="city" />
                </Canvas>
                <animated.div 
                    className="ExpText"
                    style={{opacity : opacity, transform : transform }}>
                        {`몰입의\n경험이란\n바로 이런 것.`}</animated.div>
            </div>
            <div style={{width : "100%", height : "100vh", overflow : 'auto', display:'flex', alignItems:'center' }}>
                <SwipeGallery />
            </div>
        </div>
    );
};                 


export default Exp;