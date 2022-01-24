import React, {useEffect, useState} from 'react';
import './IntroMain.css';
import {useSpring, animated, config} from 'react-spring';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import useScroll from '../hook/useScroll';
import {ReactComponent as Moon} from '../img/moon.svg';
import {ReactComponent as Sun} from '../img/sun.svg';
import {ReactComponent as Ship} from '../img/ship.svg';
import wave from '../img/wave.gif'









const IntroMain = ()=>{
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    const {scrollY} = useScroll();

    useEffect(()=>{

    })
    return(
        <>
            <div className='intro_main_container'>
                <div className='intro_main'>
                    <animated.div style={props} className = 'intro_main_title'>
                        몰입.
                    </animated.div>
                    <div className = 'intro_main_description'>
                    몰입캠프에서는 하루종일 개발에 몰두하며 기획부터 프로토타입까지, 개발의 전 과정을 경험할 수 있습니다. 참여 전 개발 실력은<br/> 
                    전혀 중요하지 않습니다. 직접 도전하고 부딪혀보며 무엇이든 시도해 볼 수 있는 성장한 나를 발견할 수 있습니다. 다양한 매력의 친구들과 함께하며 협업, 교류, 소통의 즐거움을 만나보세요.
                    </div>
                    <div className  = 'intro_main_img_container' >
                        <img className = 'intro_main_img' src='/keyboard.png' alt='keyboard'></img>
                    </div>
                </div>
            </div>
            <div className='intro_flex_container'>
                <div className='intro_flex_title'>
                    <div className='first_title'>
                        몰입&nbsp;
                    </div>
                    <div>
                        하는&nbsp;
                    </div>
                    <div>
                        경험&nbsp;
                    </div>
                </div>
                <div className='intro_flex_img_container'>
                    <img className='intro_flex_img' src='/coding_text.png' alt='coding_text'></img>
                </div>
                <div className='intro_flex_description_container'>
                    <div className='intro_flex_description_title_container'>
                        <Moon/>
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
                </div>
            </div>
            <div className='intro_flex_life_container'>
                <div className='intro_flex_life_title_container'>
                    <Sun/>
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
                {/* <div className='intro_flex_life_illustration_container'>
                    <Ship/>
                    <div className='intro_flex_life_wave_illustration_container'>
                        <img className='intro_flex_life_wave_illustration' src={wave} alt='wave'/>

                    </div>
                </div> */}

                

            </div>
        </>
            
    );
};

export default IntroMain;