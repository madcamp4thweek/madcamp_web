import React,{useState} from 'react'
import { useSpring, animated, config } from 'react-spring'
import './IntroMain.css'

const Dg = () => {
    return(
        <>
            <div className='small_title1'>
                <span>
                    <img className = "clock" src = "png/clock.png" alt = "시계" width = "150"></img>
                </span>
                <span>
                    주당 80-100시간의
                </span>
            </div>
            <div className = "small_title1">
                집중 개발.
            </div>
            <div className = "description1">
                몰입캠프에서는 관심있는 프로젝트 주제를 디자인하고 프로토<br/> 타입으로의 구현까지 개발의 전 과정을 경험할 수 있습니다.<br/> 약 4.5주간 4번의 프로젝트를 진행하며 하루종일 개발에  <br/> 몰두하는 즐거움을 느껴보세요. 
            </div>
            <div className = "small_title2">
                매일매일 실력향상
            </div>
            <div className = 'description2'>
                공통프로젝트를 통해 개발환경과 체계에 대한 이해도를 높이고, <br/> 자유프로젝트에서 App,Web,게임,AI 등 원하는 분야와 기술스택을 선택해 <br/> 다양한 경험과 실력을 쌓아보세요. 2~3명으로 구성된 팀으로 프로젝트를 <br/> 수행하며 협업개발을 배우고 경험할 수 있습니다. <br/> 매일 정기적인 스크럼과 매주 프로젝트 발표를 통해 <br/> 다른팀들과 시행착오를 나누며 교류해보세요.
            </div>
            <div className = 'description2'>
                <img src = "png/temp.png" alt = "기술스택"></img>
            </div>
            <div className = 'temp2'>
                <img src = "png/temp3.png" alt = "아이콘"></img>
            </div>
            <div className = 'small_title3'>
                강력한 <br/> 네트워킹
            </div>
            <div>
                <img src = "png/temp2.png" alt = "아이콘"></img>
            </div>
            <div className='description3'>
                스타트업에서 네트워크는 가장 강력한 힘입니다. <br/> 
                몰입캠프에서 나만의 네트워크를 구축해보세요. <br/> 
                몰입캠프는 KAIST와 MOU 체결이 되어있는 국내 최고의 대학교 학생들 80여명을 이어줍니다. <br/> 
                캠프 기간동안 여러 팀으로 구성된 반 친구들과 하루의 대부분을 함께 보내게 되죠. <br/> 
                캠프가 끝나면 누구보다 각별한 관계가 되어있습니다. <br/> 
                협업, 스크럼 뿐만 아니라 몰입캠프에서 지원해주는 야식쿠폰과 회식을 통해 <br/> 
                당신의 소중한 동료들을 늘려보세요. 
            </div>

            <div className = 'small_title4'>
                든든한 <br/> 운영진과 후원사
            </div>
            <div>
                <span>
                    <img className = 'prof1' src = "png/BK.png"></img>
                </span>
                <span>
                    <img className = 'prof2' src = "png/SY.png"></img>
                </span>
            </div>
            <span>
                    <span>
                        <span className='explain1'>
                            장병규
                        </span>
                        <span className='explain2'>
                            크래프톤 이사회
                        </span>
                        <span className='explain3'>
                            의장
                        </span>
                    </span>
                    <span>
                        <span className='explain1'>
                            류석영
                        </span>
                        <span className='explain2'>
                            KAIST 전산학부
                        </span>
                        <span className='explain3'>
                            학부장
                        </span>
                    </span>
            </span>


            <div id='carrer' className='prof_career_start'>
                <div>
                    <div className='inline explain4'>
                            &middot; 4차산업혁명위원회 
                        </div>
                        <div className = 'inline explain5'>
                            위원장
                        </div>
                        <div className = 'inline explain6'>
                            (2017-2019)
                        </div>
                        <div className='inline explain4'>
                            &middot; KAIST 포용성 위원회 
                        </div>
                        <div className = 'inline explain5'>
                            위원장
                        </div>
                        <div className = 'inline explain6'>
                            (2017-2019)
                        </div>
                </div>
                <div>
                    <div className='inline explain4'>
                            &middot; 본엔젤스
                        </div>
                        <div className = 'inline explain5'>
                            공동창업
                        </div>
                        <div className = 'inline explain6'>
                            (2008-2017)
                        </div>
                        <div className='inline explain4'>
                            &middot; Sun Microsystems
                        </div>
                        <div className = 'inline explain5'>
                            연구원
                        </div>
                        <div className = 'inline explain6'>
                            (2005-2009)
                        </div>
                </div>
           
                <div>
                    <div className='inline explain4'>
                            &middot; 블루홀
                        </div>
                        <div className = 'inline explain5'>
                            공동창업
                        </div>
                        <div className = 'inline explain6'>
                            (2007-2018)
                        </div>
                        <div className='inline explain4'>
                            &middot; Harvard University
                        </div>
                        <div className = 'inline explain5'>
                            연구원
                        </div>
                        <div className = 'inline explain6'>
                            (2001-2005)
                        </div>
                </div>
                <div>
                    <div className='inline explain4'>
                            &middot; 네오위즈
                        </div>
                        <div className = 'inline explain5'>
                            공동창업
                        </div>
                        <div className = 'inline explain6'>
                            (2007-2018)
                        </div>
                        <div className='inline explain4'>
                            &middot; KAIST 
                        </div>
                        <div className = 'inline explain5'>
                            전산학과
                        </div>
                        <div className = 'inline explain6'>
                            (입학 1991, 박사 2001)
                        </div>
                </div> 
            </div>
            
            {/* <div>
                <div className='inline'>
                    a
                </div>
                <div className='inline'>
                    b
                </div>
            </div>
            
            <div>
                <div className='inline'>
                    c
                </div>
                <div className='inline'>
                    d
                </div>
            </div> */}
            <div>
                <img src = "png/mad.png"></img>
            </div>

            <div className = "startup_start">
                반가워요 선배님들. <br/> 
                세상을 바꿀 획기적인 스타트업 <br/> 
                대표님들을 소개합니다.
            </div>
            <div>
                <img className = "startup_img" src= "png/startup_logo.png"></img> 
            </div>

            <div className = "startup_description">
                여러 대표님들과의 대화를 통해 <br/> 스타트업의 희로애락을 미리 체험해보세요.
            </div>

        </>



        
    )
}

export default Dg;