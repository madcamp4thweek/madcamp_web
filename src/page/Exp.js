import React, {useState, Suspense} from 'react';
import './page.css';
import ReactPlayer from 'react-player'
import { useSpring, animated } from 'react-spring'
import Carousel from 'react-elastic-carousel';

import { ReactComponent as Mic } from '../icons/mic.svg';
import { ReactComponent as Video } from '../icons/video.svg';
import { ReactComponent as People } from '../icons/people.svg';
import { ReactComponent as Share } from '../icons/share.svg';
import { ReactComponent as Chat } from '../icons/chat.svg';


const Exp = ()=>{

    const urlList = ["etc/jaewoo.mp4","etc/jaewoo1.mp4","etc/daegun1.mp4","etc/daegun2.mp4"];
    const [currIdx, setCurrIdx] = useState(0);


    const [mute, setMute] = useState(false);
    const [pause, setPause] = useState(false);

    return(
        <div className="ScreenWrapper">
            <div className="ScreenLeft">
                <div className="ScreenHeader">
                    <div className="ScreenTitle">
                        <div className="TitleCircleWrapper">
                            <div className="TitleCircle Red"></div>
                            <div className="TitleCircle Yellow"></div>
                            <div className="TitleCircle Green"></div>
                        </div>
                        <div className="TitleText">MadCamp Review</div>
                    </div>
                    <div className="ScreenItems">
                        <Carousel 
                            showEmptySlots
                            onNextStart={(currentItem)=>console.log(currentItem.index)}
                            onPrevStart={(currentItem)=>console.log(currentItem.index)}
                            itemsToShow={3}>
                            {urlList.map((item , idx)=>{
                                return(
                                    <div className="ItemWrapper" onClick={()=>setCurrIdx(idx)}>
                                        <ReactPlayer style={{borderRadius : '10px'}} key={idx} width ="160px" height="90px" url={item}/>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
                <div className="ScreenBody">
                <ReactPlayer
                    volume = {Number(mute)}
                    playing = {pause}
                    width ="100%"
                    height = "100%"
                    url={urlList[currIdx]}
                    controls = {true}
                    />

                </div>
                <div className="ScreenFooter">
                    <div className="FooterLeft">
                        <div className="FooterItem" onClick={()=>setMute(!mute)}>
                            <Mic />
                            <div className="FooterText">{mute?"Mute":"UnMute"}</div>
                        </div>
                        <div className="FooterItem" onClick={()=>setPause(!pause)}>
                            <Video />
                            <div className="FooterText">{pause?"Pause":"Play"}</div>
                        </div>
                    </div>
                    <div className="FooterMid">
                        <div className="FooterItem">
                            <People />
                            <div className="FooterText">Interviewee</div>
                        </div>
                        <div className="FooterItem" >
                            <Chat />
                            <div className="FooterText">Chat</div>
                        </div>
                        <div className="FooterItem" >
                            <Share />
                            <div className="FooterText">Share</div>
                        </div>
                    </div>
                    <div className="FooterRight">
                        <div>
                            <div>End</div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="ScreenRight">

            </div>


       </div>

    );
};


export default Exp;