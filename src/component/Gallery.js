import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import scrollHook from '../hook/useScroll';


const urls = ['etc/img1.jpg','etc/img2.jpg','etc/img3.jpg','etc/img1.jpg','etc/img2.jpg','etc/img3.jpg' ];

const Item = ({ index, position, scale, c = new THREE.Color(), ...props }) => {
  const ref = useRef()
  const scroll = useScroll()
  //scroll.offset : 0~1
  const clicked = props.clicked;
  const setClicked = props.setClicked;
  const damp = THREE.MathUtils.damp;

  const {scrollY} = scrollHook();
  const click = () => ( setClicked(index === clicked ? null : index));

  useFrame((state, delta) => {
    if(scroll.offset > 0.001){
      window.scrollTo(0,1017);
    }
    const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
    // damp(currnet point, targetpoint, delay-value, delta-time) - make smoothly move current to target point
    ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, clicked === index ? 5 : 4 + y, 8, delta)
    ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, clicked === index ? 4.7 : scale[0], 6, delta)
    if (clicked !== null && index < clicked) ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta)
    if (clicked !== null && index > clicked) ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta)
    if (clicked === null || clicked === index) ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta)
  })
  return <Image ref={ref} {...props} position={position} scale={scale} onClick={click} />
}


const Gallery = () => {
    const w = 1.5; // width of item
    const gap = 0.15; // gap between items
    const { width } = useThree((state) => state.viewport)
    const xW = w+gap;
    const [clicked, setClicked] = useState(0); //clicked index

    return(
      <ScrollControls horizontal damping={10} pages={(width - xW + urls.length * xW) / width}>
          <Scroll>
          {urls.map((url, i) => {
          return(<Item clicked={clicked} setClicked={setClicked} key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />)
          })}
          </Scroll>
      </ScrollControls>
    );
};

export default Gallery;
