import React, {useState, Suspense, useRef} from 'react';
import { useSpring, animated } from 'react-spring'
import Carousel from 'react-elastic-carousel';

const Item = (props) => {
    let scalevalue = 0.6;
    if(props.idx===props.currIdx){
        scalevalue = 1;
    }else if(props.idx+1===props.currIdx || props.idx-1===props.currIdx){
        scalevalue = 0.8;
    }

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 },
    })
    const {scale} = useSpring({ scale : scalevalue});

    const itemFlip = () => {
        props.itemClick(props.idx)
        set(!flipped);
    }
    return(
        <div className="SwipeItem">
            <animated.div  style={{scale:scale, opacity: opacity.to(o => 1 - o), transform}} key={props.idx} onClick={()=>itemFlip()}>
                <img style={{width : '150px', height : '200px'}} src={props.item} />
            </animated.div>
            <animated.div style={{ opacity, transform, rotateX: '180deg', backgroundColor : '#444444'}}>
                <div>{props.idx}</div>
            </animated.div>
        </div>
    );

}


const SwipeGallery = () => {

    const carouselRef = useRef();
    const [currIdx, setCurrIdx] = useState(0);

    const itemClick = (idx) => {
        if(carouselRef){
            
            setCurrIdx(idx);
        }
    }
    const urls = ['etc/img.jpg','etc/img.jpg','etc/img.jpg','etc/img.jpg','etc/img.jpg','etc/img.jpg','etc/img.jpg','etc/img.jpg','etc/img.jpg','etc/img.jpg','etc/img.jpg','etc/img.jpg' ];
    const test = ['/etc/img1.jpg','/etc/img2.jpg'];
    return(
        <div className="SwipeGallery" >
        <Carousel
        itemsToScroll={1}
        ref = {carouselRef}
        itemsToShow={6}
        outerSpacing={100}
        onChange={(currItem,pageIndex)=>setCurrIdx(currItem.index+3)}
        style={{height  : '100%'}}>
            
        {urls.map((item , idx)=>{
            return(
                <Item item={item} idx={idx} key={idx} currIdx={currIdx} itemClick={itemClick}/>
            );
        })}
        </Carousel>
        </div>

    );
}

export default SwipeGallery;