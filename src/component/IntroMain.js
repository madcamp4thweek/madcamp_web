import React, {useEffect, useState, useRef} from 'react';
import './IntroMain.css';
import {useSpring, animated, config} from 'react-spring';
// import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import {throttle} from 'lodash';

// import useScroll from '../hook/useScroll';

import {ReactComponent as Ship} from '../img/ship.svg';
import {ReactComponent as Arrow} from '../img/Arrow.svg';
import wave from '../img/wave.gif';
import sail from '../img/sail.gif';
import sun from '../img/sun.gif';
import moon from '../img/moon.gif';




const useFadeIn=()=>{
    const [isFadedIn,setFadedIn] = useState(false);
    const props = useSpring({from:{opacity:0}, opacity:isFadedIn ? 1:0});
    return [isFadedIn,setFadedIn,props];
}


const useMoveHorizontal= ()=>{
    const [positionX,setPositionX] = useState(0);
    const props = useSpring({from:{x:0},x:positionX});
    return [positionX,setPositionX,props];
};






const IntroMain = ({scrollY}) => {

    

    const [cropRatio, setCropRatio] = useState(100);
    const [secondStyle,setSecondStyle] = useState(null);
    const [lifeStyle, setLifeStyle]= useState(null);


    const [isFadedIn,setFadedIn ,props]= useFadeIn();
    const [isFadedIn2,setFadedIn2,props2] = useFadeIn();
    const [isFadedIn3,setFadedIn3,props3] = useFadeIn();
    const [isFadedIn4,setFadedIn4,props4] = useFadeIn();
    const [isFadedIn5,setFadedIn5,props5] = useFadeIn();
    const [isFadedIn6,setFadedIn6,props6] = useFadeIn();
    const [isFadedIn7,setFadedIn7,props7] = useFadeIn();

    const [shipPosition,setShipPosition,shipProps] = useMoveHorizontal();

    const introMain = useRef(null);
    const introFlex = useRef(null);
    const introFlexDescriptionContainerRef = useRef(null);
    const introFlexLifeContainerRef = useRef(null);
    const lifeIllustrationRef = useRef(null);


    useEffect(()=>{ 
        console.log(scrollY);


        lifeIllustrationRef.current.addEventListener('mousemove',throttle(e=>{
            console.log(e.offsetX, e.offsetY);
            setShipPosition(e.offsetX-125);
        },50))





        if ( 500<scrollY && scrollY<1500){
            setCropRatio(33*(1-(scrollY-500)/1000));
        }else if (scrollY>1500 && cropRatio!==0) {
            setCropRatio(0);
            

        }

        // 하는
        if (2200<scrollY && scrollY<3200  && !isFadedIn){
             setFadedIn(true);
        }else if ((scrollY<2200 ) && isFadedIn){
            setFadedIn(false);
        }

        //경험  // intro main fix remove add 
        if (3200<scrollY && scrollY<4200 &&!isFadedIn2  ){
            setFadedIn2(true);
            introMain.current.classList.remove('fixed');
       }else if ((scrollY<3200)&&isFadedIn2){
           setFadedIn2(false);
           introMain.current.classList.add('fixed');
       }

       //코드 사진
       if (4200<scrollY && scrollY<4700 &&!isFadedIn3  ){
            setFadedIn3(true);
            introFlex.current.classList.remove('fixed');
            setSecondStyle({position:'absolute', top:`4260px`})
        }else if ((scrollY<4200)&&isFadedIn3){
            setFadedIn3(false);
            introFlex.current.classList.add('fixed');
            setSecondStyle({position:'fixed', top:null})
        }
        

        //화살표
        if (4700<scrollY && scrollY<5400&& !isFadedIn4){
            setFadedIn4(true);
        }else if((scrollY<4700)&&isFadedIn4){
            setFadedIn4(false);
        }

        if( 5500<scrollY && scrollY<5700 ){
            setFadedIn4(false);
        }

        

        if (5700<scrollY && scrollY<6200 &&!isFadedIn5 ){
            setFadedIn5(true);

        }else if ((scrollY<5700)&&isFadedIn5){
            setFadedIn5(false);

        }
        

        if (6500<scrollY ){
            setFadedIn5(false);
        }else if (scrollY<6500 && scrollY>6200){
            setFadedIn5(true);
        }

        if (7000<scrollY){
            introFlexDescriptionContainerRef.current.classList.remove('fixed');
            setFadedIn6(true);
            introFlexLifeContainerRef.current.classList.remove('hide');
            setFadedIn7(true);
        }else if( scrollY<7000){
            introFlexDescriptionContainerRef.current.classList.add('fixed');
            setFadedIn6(false);
            introFlexLifeContainerRef.current.classList.add('hide');
            setFadedIn7(false);
        }

        if (7969<scrollY){
            setSecondStyle({position:'fixed', top:null});
            // setFadedIn7(false);
            setLifeStyle({position:'absolute',top:'8029px'});
            introFlexLifeContainerRef.current.classList.remove('fixed');
        }else if( 7500<scrollY && scrollY<=7969){
            // setFadedIn7(true);
            introFlexLifeContainerRef.current.classList.add('fixed');
            setSecondStyle({position:'absolute', top:`4260px`});
            setLifeStyle({postion:'fixed',top:null});


        }


    },[scrollY])


    return(
        <div className='intro_flex_overall'>
            <div className='intro_main_scroll_wrapper'>
                <div className='intro_main_container fixed' ref={introMain}>
                    <div className='intro_main ' >
                        <div className = 'intro_main_title'>
                            몰입.
                        </div>
                        <div className = 'intro_main_description'>
                        몰입캠프에서는 하루종일 개발에 몰두하며 기획부터 프로토타입까지, 개발의 전 과정을 경험할 수 있습니다. 참여 전 개발 실력은<br/> 
                        전혀 중요하지 않습니다. 직접 도전하고 부딪혀보며 무엇이든 시도해 볼 수 있는 성장한 나를 발견할 수 있습니다. 다양한 매력의 친구들과 함께하며 협업, 교류, 소통의 즐거움을 만나보세요.
                        </div>
                        <div className  = 'intro_main_img_container' >
                            <img className = 'intro_main_img' src='/keyboard.png' alt='keyboard'></img>
                        </div>
                    </div>
                </div>
                <animated.div style={props6} className='intro_flex_container fixed' ref={introFlex} style={ {...secondStyle, clipPath:`inset(${cropRatio}% 0px 0px)`}}>
                    <div className='intro_flex '>
                        <div className='intro_flex_title'>
                            <div className='first_title'>
                                몰입
                            </div>
                            
                            <animated.div style={props}>
                                하는
                            </animated.div>
                            
                            <animated.div style={props2}>
                                경험
                            </animated.div>
                        </div>
                        <animated.div style={props4} className='arrow_container'><Arrow height='100%'/></animated.div>
                        <animated.div style={props3} className='intro_flex_img_container'>
                            <img className='intro_flex_img' src='/coding_text.png' alt='coding_text'></img>
                        </animated.div>
                        <animated.div style={props5} className='intro_flex_description_container fixed' ref={introFlexDescriptionContainerRef}>
                            <div className='intro_flex_description_title_container' >
                                <img className='intro_flex_moon_img' src={moon} alt='moon'/>
                                <div className='intro_flex_description_title'>
                                    하루 온종일
                                </div>
                            </div>
                            
                            <div className='intro_flex_description_detail'>
                                몰입캠프에서는 외부에 방해 받지 않고 하루를 온전히 개발에 투자할 수 있는 환경을 만들어 줍니다.  열정을 가진 사람들과 함께한다면, 몰입의 즐거움은 배가 되죠. 4.5주간 모든 시간을 자유롭게 할애하여 온 힘을 다해 개발에 몰두해보세요. 지식뿐 아니라 지식을 배우는 법을 배우고, 스스로 성장할 수 있는 잠재된 능력을 발휘하게 됩니다.
                            </div>
                            <div className='intro_plan_link'>
                                캠프 일정에 대해 더 알아보기 &gt;
                            </div>
                        </animated.div>
                    </div>
                </animated.div>
            </div>
            <div className='intro_flex_life_scroll_wrapper'>
                <animated.div style={{...lifeStyle,...props7}} ref={introFlexLifeContainerRef} className='intro_flex_life_container fixed hide'>
                    <div className='intro_flex_life_title_container'>
                        <img className='intro_flex_life_sun_img' src={sun} alt='sun'/>
                        <div className='intro_flex_life_title'>
                            나로 산다는 것.
                        </div>
                    </div>
                    <div className='intro_flex_life_description'>
                        몰입캠프에서는 개발을 따로 가르쳐주지 않습니다. 망망대해와 같은 환경에서 온전히 스스로 길을 찾아나갈 수 있는 기회를 제공하죠.<br/>
                        밑바닥부터 하나하나 도전하며 헤쳐나가는 것, 몰입의 경험은 나의 
                        진정한 모습을 만날 수 있게 해주는 강력한 힘을 가지고 있습니다.<br/>
                        시행착오를 거치며 자신의 한계를 시험해보세요. 어디에 던져놔도 
                        살아갈 수 있을 것 같은 무시무시한 자신감과 능력을 갖게 됩니다.
                    </div>
                    <div ref={lifeIllustrationRef} className='intro_flex_life_illustration_container'>
                        <animated.div style={shipProps} className='ship_container'>
                            <img className='intro_flex_life_sail_illustration' src={sail} alt='sail'/>
                        </animated.div>
                        <div className='intro_flex_life_wave_illustration_container'>
                            <img className='intro_flex_life_wave_illustration' src={wave} alt='wave'/>
                        </div>
                        <div className='illustration_transparent_container'></div>
                    </div>
                </animated.div>
            </div>
            
        </div>
            
    );
};

export default IntroMain;