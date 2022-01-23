import React, {useState} from 'react';
import './IntroMain.css';
import {useSpring, animated, config} from 'react-spring'






const IntroMain = ()=>{
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    return(
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
            
    );
};

export default IntroMain;