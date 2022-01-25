import Dg from '../component/Dg';
import './page.css';
import React, {useEffect, useState} from 'react';
import IntroMain from '../component/IntroMain';
import './Intro.css';

import useScroll from '../hook/useScroll';

// import {Parallex,ParallaxLayer} from '@react-spring/parallax';



const Intro = ()=>{

    const {scrollY}= useScroll();
    const [dgContainerStyle, setDgContainerStyle]= useState(null);

    // useEffect(()=>{
    //     if (7969<scrollY){
    //         setDgContainerStyle({position:'absolute', top:`calc(100vh + 8029px)`, width:'100%'});
    //     }else if( 7500<scrollY && scrollY<=7969){
    //         setDgContainerStyle({position:'fixed', top:null});
    //     }
    // },[scrollY])
    return(
        <>
            {/* <div className='intro'>
                 
                 <IntroMain scrollY={scrollY}/> */}
                 
                 <div style={{position:'absolute', top:`calc(100vh + 8029px)`, width:'100%'}} className='Dg'>
                    <Dg scrollY={scrollY} >
                    </Dg> 
                </div>
            {/* </div>     */}
            
            
        </>


        
    );
}

export default Intro;