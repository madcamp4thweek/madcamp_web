import React,{useState, useEffect} from 'react'
import { useSpring, animated, config } from 'react-spring'
import './Dg.css'
import './Ipad.style.module.css'
import AOS from "aos"
import 'aos/dist/aos.css';
import Ipad from './Ipad.tsx'
import Card1 from './Card1'
import Card2 from './Card2'
import './Card.styles.module.css'


const Dg = () => {
    let boxsytle = {
        width: '40%',
        height: '200px',
        fontSize: '30px',
        lineHeight: '200px',
        blackgroud: 'black',
        color: 'white',
        textAlign: 'center'
    }
    useEffect(()=> {
        AOS.init({
            duration: 1000});
    });
    return(
        <>
            <div className='small_title1' data-aos='fade-up'>
                    주당 80-100시간의 <br/> 집중 개발.
            </div>
            
            <div className = "description1" data-aos='fade-up'>
                몰입캠프에서는 관심있는 프로젝트 주제를 디자인하고 프로토<br/> 타입으로의 구현까지 개발의 전 과정을 경험할 수 있습니다.<br/> 약 4.5주간 4번의 프로젝트를 진행하며 하루종일 개발에  <br/> 몰두하는 즐거움을 느껴보세요. 
            </div>
            <div className = "small_title2" data-aos='fade-up'>
                매일매일 실력향상
            </div>
            <div className = 'description2' data-aos='fade-up'>
                공통프로젝트를 통해 개발환경과 체계에 대한 이해도를 높이고, <br/> 자유프로젝트에서 App,Web,게임,AI 등 원하는 분야와 기술스택을 선택해 <br/> 다양한 경험과 실력을 쌓아보세요. 2~3명으로 구성된 팀으로 프로젝트를 <br/> 수행하며 협업개발을 배우고 경험할 수 있습니다. <br/> 매일 정기적인 스크럼과 매주 프로젝트 발표를 통해 <br/> 다른팀들과 시행착오를 나누며 교류해보세요.
            </div>
            <div className = 'description2' data-aos='fade-up'>
                <img src = "png/temp.png" alt = "기술스택"></img>
            </div>
            <div className = 'temp2' data-aos='zoom-in' data-aos-offset='600'>
                <img src = "png/temp3.png" alt = "아이콘"></img>
            </div>
            <div className = 'small_title3' data-aos='zoom-in'>
                강력한 <br/> 네트워킹
            </div>
            <div data-aos='zoom-in' data-aos-offset='300'>
                <img src = "png/temp2.png" alt = "아이콘"></img>
            </div>
            <div className='description3' data-aos='fade-up' data-aos-offset='100'>
                스타트업에서 네트워크는 가장 강력한 힘입니다. <br/> 
                몰입캠프에서 나만의 네트워크를 구축해보세요. <br/> 
                몰입캠프는 KAIST와 MOU 체결이 되어있는 국내 최고의 대학교 학생들 80여명을 이어줍니다. <br/> 
                캠프 기간동안 여러 팀으로 구성된 반 친구들과 하루의 대부분을 함께 보내게 되죠. <br/> 
                캠프가 끝나면 누구보다 각별한 관계가 되어있습니다. <br/> 
                협업, 스크럼 뿐만 아니라 몰입캠프에서 지원해주는 야식쿠폰과 회식을 통해 <br/> 
                당신의 소중한 동료들을 늘려보세요. 
            </div>
            <div className = 'Ipad' >
                <img className = 'Ipad' src = "png/ipad.png"></img>
                <div className = 'image'>
                    <Ipad></Ipad>
                </div>
            </div>

               
        
            <div>
                <img src = "png/mad.png"></img>
            </div>

            <div className = 'small_title4' data-aos='fade-up'>
                든든한 <br/> 운영진과 후원사
            </div>
            <div className='bigbox' data-aos='fade-up'>
                <div className ='container1' data-aos='fade-up'>
                    <div className = 'prof'>
                        <Card1></Card1>
                    </div>
                    
                    {/* <img className = 'prof' src = "png/BK.png"></img> */}
                    <div>
                        <div className = 'explain1' style={{display: "inline"}}>
                            장병규
                        </div>
                        <div className = 'explain2'style={{display: "inline"}}>
                            크래프톤 이사회
                        </div>
                        <div className = 'explain3' style={{display: "inline", marginLeft: "3px"}}>
                            의장
                        </div>
                    </div>
                    
                </div>

                <div className='container2' data-aos='fade-up'>
                    <div className='prof'>
                        <Card2></Card2>
                    </div>
                    {/* <img className = 'prof' src = "png/SY.png"></img> */}
                    <div>
                        <div className = 'explain1' style={{display: "inline"}}>
                            류석영
                        </div>
                        <div className = 'explain2'style={{display: "inline"}}>
                            KAIST 전산학부
                        </div>
                        <div className = 'explain3' style={{display: "inline", marginLeft: "3px"}}>
                            학부장
                        </div>
                    </div>
                </div>
            </div>

         

            <div className = "startup_start" data-aos='fade-up'>
                반가워요 후배님들 <br/> 
                세상을 바꿀 획기적인 <br/> 
                우리 스타트업들을 <br/> 
                소개할게요.
            </div>
            <div data-aos='fade-up' data-aos-offset='400'>
                <img className = "startup_img" src= "png/startup_logo.png"></img> 
            </div>

            <div className = "startup_description" data-aos='fade-up'>
                캠프 기간동안 여러 대표님들의 강연을 통해 <br/> 스타트업의 희로애락을 미리 체험해보세요.
            </div>

        </>
        
    )
}

export default Dg;