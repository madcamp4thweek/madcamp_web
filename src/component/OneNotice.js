import React from 'react';
import {Link,useParams} from 'react-router-dom';      
import './OneNotice.css';


const OneNotice = ({match}) =>{
    // const {userId} = match.params;
    const {noticeId} = useParams();

    return(
        <div className='notice_page'>
            {noticeId}
            <div className='notice_one_title'>[공지] 2020년도 몰입캠프 여름학기 모집 마감</div>
            <div className='notice_one_created_at'>2020년 2월 31일</div>
            <div className='notice_one_content'>
            안녕하세요. 몰입캠프 공지를 기다려 주셔서 감사합니다. &lt;2020년도 몰입캠프 여름학기&gt; 개설에 대해 최종 공지드립니다.   

몰입캠프에 대한 학생들의 관심이 많기에, 가급적 소수 인원으로라도 진행하는 방향으로 논의를 하였습니다. 현재 코로나19 확산세가 안정되어 가고, 교육부에서 순차적인 등교 개학을 결정함에 따라, 2020년도 몰입캠프 여름학기를 개설하기로 결정하였습니다.

모집 인원은 기존보다 축소하여 40명으로 진행되고, 지원 신청은 5/11~5/24일까지입니다. 방역에 대한 세부 사항은 KAIST 방침에 따라 운영될 예정이니, 참가하는 학생들의 협조 부탁드립니다.

추후 코로나19 상황에 따라 몰입캠프 개설 및 일정은 변동될 수 있음을 양지 바랍니다. 변동 사항 발생 시 홈페이지 또는 별도로 공지하겠습니다.

몰입캠프에 대한 관심 감사드리며, 밝고 건강한 모습으로 몰입캠프에서 뵙기를 바라겠습니다.
            </div>
            <div className='notice_link_container'><Link to='/notice'>목록</Link></div>
        </div>
    );
}

export default OneNotice;