import React from 'react';
import Dg from './Dg';
import './page.css';
import IntroMain from '../component/IntroMain';
import './Intro.css';
// import {Parallex,ParallaxLayer} from '@react-spring/parallax';



const Intro = ()=>{
    return(
        <>
        <div className='intro'>
            <IntroMain/>
        </div>    


 
            <Dg>

            </Dg> 
        </>


        
    );
}

export default Intro;