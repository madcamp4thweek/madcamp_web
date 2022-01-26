import React, {useState, Suspense, useRef} from 'react';
import './component.css';
import ReactPlayer from 'react-player'
import { useSpring, animated } from 'react-spring'
import Carousel from 'react-elastic-carousel';

import { ReactComponent as Mic } from '../icons/mic.svg';
import { ReactComponent as Video } from '../icons/video.svg';
import { ReactComponent as People } from '../icons/people.svg';
import { ReactComponent as Share } from '../icons/share.svg';
import { ReactComponent as Chat } from '../icons/chat.svg';


const Screen = (props)=>{
    const carouselRef = useRef();
    const styles = useSpring({ from :{opacity:0},to:{opacity:1},config:{duration:500}});


    const data =[
        {
            "name" : "최대건",
            "univ" : "DGIST",
            "url":"etc/daegun1.mp4",
            "detail" : "나는 머건",
            "color" : "#FF9C39"
        },
        {
            "name" : "최머건",
            "univ" : "DGIST",
            "url":"etc/daegun2.mp4",
            "detail" : "16학번 화석 머건",
            "color" : "#399CEB"
        },
        {
            "name" : "김재우",
            "univ" : "KAIST",
            "url":"etc/jaewoo.mp4",
            "detail" : "18학번 화석재우",
            "color" : "#C072CD"
        },
        {
            "name" : "김폴",
            "univ" : "POSTECH",
            "url":"etc/jaewoo1.mp4",
            "detail" : "나는 재우 화석 나는 재우 화석나는 재우 화석나는 재우 화석나는 재우 화석나는 재우 화석나는 재우 화석나는 재우 화석",
            "color" : "#58BB68"
        },

    ];

    const [currIdx, setCurrIdx] = useState(0);


    const [mute, setMute] = useState(false);
    const [pause, setPause] = useState(false);

    const peopleClick = (idx) => {
        if(carouselRef){
            carouselRef.current.goTo(idx);
            setCurrIdx(idx);
        }

    }


    return(
        <div className="HW_ScreenWrapper">
            <div className="HW_ScreenLeft">
                <div className="HW_ScreenHeader">
                    <div className="HW_ScreenTitle">
                        <div className="HW_TitleCircleWrapper">
                            <div className="HW_TitleCircle Red"></div>
                            <div className="HW_TitleCircle Yellow"></div>
                            <div className="HW_TitleCircle Green"></div>
                        </div>
                        <div className="HW_TitleText">MadCamp Review</div>
                    </div>
                    <div className="HW_ScreenItems">
                        <Carousel 
                            ref = {carouselRef}
                            showEmptySlots
                            onNextStart={(currentItem)=>console.log(currentItem.index)}
                            onPrevStart={(currentItem)=>console.log(currentItem.index)}
                            itemsToShow={3}>
                            {data.map((item , idx)=>{
                                return(
                                    <div key={idx} className={`HW_ItemWrapper ${idx===currIdx?" selected":""}`} onClick={()=>setCurrIdx(idx)}>
                                        <ReactPlayer style={{borderRadius : '10px', borderWidth : '5px', borderColor:'#00B17B'}} key={idx} width ="160px" height="90px" url={item.url}/>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
                <div className="HW_ScreenBody">
                <ReactPlayer
                    volume = {Number(mute)}
                    playing = {pause}
                    width ="100%"
                    height = "100%"
                    url={data[currIdx].url}
                    controls = {true}
                    />

                </div>
                <div className="HW_ScreenFooter">
                    <div className="HW_FooterLeft">
                        <div className="HW_FooterItem" onClick={()=>setMute(!mute)}>
                            <Mic style={{flex:1}} width="70%" />
                            <div className="HW_FooterText">{mute?"Mute":"Unmute"}</div>
                        </div>
                        <div className="HW_FooterItem" onClick={()=>setPause(!pause)}>
                            <Video style={{flex:1}} width="100%"  />
                            <div className="HW_FooterText">{pause?"Pause":"Play"}</div>
                        </div>
                    </div>
                    <div className="HW_FooterMid">
                        <div className="HW_FooterMidItem">
                            <People style={{flex:1}} width="100%" />
                            <div className="HW_FooterText">People</div>
                        </div>
                        <div className="HW_FooterMidItem" >
                            <Chat style={{flex:1}} width="90%" />
                            <div className="HW_FooterText">Chat</div>
                        </div>
                        <div className="HW_FooterMidItem" >
                            <Share style={{flex:1}} width="100%"  />
                            <div className="HW_FooterText">Share</div>
                        </div>
                    </div>
                    <div className="HW_FooterRight">
                        <div className="HW_EndButton Red" onClick={()=>props.setOpen(false)}>
                            <div className="HW_EndText">End</div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="HW_ScreenRight">
                <div  className="HW_PeopleTitle">People ({data.length})</div>
                <div>
                    {data.map((item, idx)=>{
                        return(
                            <div className={`HW_PeopleItem ${idx===currIdx?" selected":""}`}>
                                <div key={idx} className="HW_PeopleWrapper" onClick={()=>peopleClick(idx)}>
                                    <div className="HW_PeopleProfile" style={{backgroundColor : item.color}}>
                                        <div className="HW_PeopleUnivText">{item.univ[0].toUpperCase()}</div>
                                    </div>
                                    <div className="HW_PeopleNameText">{item.univ}</div>
                                    <div className="HW_PeopleNameText">{item.name}</div>
                                </div>
                                {(idx===currIdx)&&
                                    <animated.div className="HW_PeopleDetail" style={styles}>
                                        {item.detail}
                                    </animated.div>  
                                }
                            </div>

                        );
                    })}
                </div>
            </div>


       </div>

    );
};


export default Screen;