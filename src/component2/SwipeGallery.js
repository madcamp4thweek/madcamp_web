import React, {useState, Suspense, useRef} from 'react';
import { useSpring, animated } from 'react-spring'
import Carousel from 'react-elastic-carousel';

const Item = (props) => {
    let scalevalue = 0.5;
    if(props.idx===props.currIdx){
        scalevalue = 0.8;
    }else if(props.idx+1===props.currIdx || props.idx-1===props.currIdx){
        scalevalue = 0.6;
    }

    const selected = (props.currIdx === props.idx);
    
    const { transform, opacity } = useSpring({
      opacity: props.flipped&&selected ? 1 : 0,
      transform: `perspective(600px) rotateX(${props.flipped&&selected ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 },
    })
    const {scale} = useSpring({ scale : scalevalue});

    const itemFlip = () => {
        props.itemClick(props.idx);
        props.setFlipped(!props.flipped);
    }
    return(
        <div className="SwipeItem" onClick={()=>itemFlip()}>
            <animated.div className={`SwipeCard ${selected?'top':''}`}  style={{background: `url(${props.item.url})`,backgroundSize : 'cover',  scale:scale, opacity: opacity.to(o => 1 - o), transform}} key={props.idx}>
            </animated.div>
            <animated.div className="SwipeCard back" style={{ opacity, transform, rotateX: '180deg',background: `url(${props.item.url})`, backgroundSize : 'cover'}}>
                <div className="SwipeInfo">
                    <div className="InfoTextWrapper">
                        <div className="InfoTitle">{props.item.name}</div>
                        <div className="InfoDetail">{props.item.detail}</div>
                    </div>
                    <div className="InfoGithubWrapper">
                        {props.item.participants.map((id, idx)=>{
                            return(
                                <div className="InfoDetail">{id}</div>
                            );
                        })}
                        <div className="InfoDetail Blue" onClick={()=>window.open(props.item.github,'_blank')}>자세히 보기 ></div>
                    </div>
                    <div className="InfoBackground"></div>
                </div>
            </animated.div>
        </div>
    );

}


const SwipeGallery = () => {

    const carouselRef = useRef();
    const [currIdx, setCurrIdx] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const itemClick = (idx) => {
        if(carouselRef){
            
            setCurrIdx(idx);
        }
    }
    const urls = [{
        "name" : "Mokoko’s Adventure",
        "detail" : "신나고 재미있는 모모코의 모험",
        "url" : 'etc/img1.jpg',
        "participants" : ['DGIST 최대건', 'HYU 정은호'],
        "github" : "https://github.com/chackhangun/kaist_madcamp_week3"

    },{
        "name" : "Univ Todo",
        "detail" : "친구들과 함께하는 과목별 투두리스트 관리 앱",
        "url" : 'etc/img2.jpg',
        "participants" : ['KAIST 강산아', 'KU 주영상'],
        "github" : "https://github.com/madcamp2/madcamp2-backend"

    },{
        "name" : "Emoticall",
        "detail" : "귀여운 이모지로 관리하는 연락처 앱",
        "url" : 'etc/img3.jpg',
        "participants" : ['KAIST 이혜원','PNU 전승윤'],
        "github" : "https://github.com/BUYA-GH/madcamp1"

    },{
        "name" : "Vlind Date",
        "detail" : "목소리로 인연을 맺어주는 비대면 데이팅 앱",
        "url" : 'etc/img4.jpg',
        "participants" : ['SKU 한수민','KAIST 김윤'],
        "github" : "https://github.com/Vlind-Meeting/Vlind_Meeting"

    },{
        "name" : "OpenWorld Project",
        "detail" : "오픈월드에서 감상하는 인체의 신비전",
        "url" : 'etc/img5.jpg',
        "participants" : ['POSTECH 이희우', 'GIST 김동휘','SNU 송성민'],
        "github" : "https://github.com/madcamp4thweek/madcamp_web.git"

    },{
        "name" : "MadMad Project",
        "detail" : "매드캠프 홈페이지를 인터랙티브 웹으로 리디자인하는 프로젝트",
        "url" : 'etc/img.jpg',
        "participants" : ['DGIST 최대건', 'KAIST 이혜원','KAIST 김재우'],
        "github" : "https://github.com/madcamp4thweek/madcamp_web.git"

    } ];
    return(
        <div className="SwipeGallery" >
        <Carousel
        itemsToScroll={1}
        ref = {carouselRef}
        itemsToShow={3}
        outerSpacing={100}
        initialActiveIndex={2}

        onChange={(currItem,pageIndex)=>setCurrIdx(currItem.index+1)}
        style={{height  : '100%'}}>
            
        {urls.map((item , idx)=>{
            return(
                <Item item={item} idx={idx} key={idx} currIdx={currIdx} itemClick={itemClick} flipped={flipped} setFlipped={setFlipped}/>
            );
        })}
        </Carousel>
        </div>

    );
}

export default SwipeGallery;