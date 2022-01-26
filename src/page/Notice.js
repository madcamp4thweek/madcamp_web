import React, { useEffect,useState } from 'react';
import './page.css';
import './Notice.css';

import '../component/NoticeItem.css';
import Searchbox from '../component/Searchbox';
import OneNotice from '../component/OneNotice';
import NoticeItem from '../component/NoticeItem';
import NoticeIndex from '../component/NoticeIndex';
import { Route, Routes } from 'react-router-dom';

const notices=[{
    author:'andrea',
    title:'[공지] 2020년도 몰입캠프 여름학기 모집 마감',
    createdAt:'2022년 1월 26일',
    id : 10
},
{
    author:'andrea',
    title:'[공지] 2020년도 몰입캠프 여름학기 개설 공지(코로나19 상황에 따라 추후 변동 가능)',
    createdAt:'2022년 1월 26일',
    id : 9
},
{
    author:'andrea',
    title:'eungae',
    createdAt:'2022년 1월 26일',
    id : 8
},
{
    author:'andrea',
    title:'eungae',
    createdAt:'2022년 1월 26일',
    id : 7
},
{
    author:'andrea',
    title:'eungae',
    createdAt:'2022년 1월 26일',
    id : 6
},
{
    author:'andrea',
    title:'eungae',
    createdAt:'2022년 1월 26일',
    id : 5
},
{
    author:'andrea',
    title:'eungae',
    createdAt:'2022년 1월 26일',
    id : 4
},
{
    author:'andrea',
    title:'eungae',
    createdAt:'2022년 1월 26일',
    id : 3
},
{
    author:'andrea',
    title:'eungae',
    createdAt:'2022년 1월 26일',
    id : 2
},
{
    author:'andrea',
    title:'eungae',
    createdAt:'2022년 1월 26일',
    id : 1
}]

const Notice = ()=>{
    
    const [notices0,setNotices]= useState(null);

    // useEffect(()=>{
    //     const fetchNotices = async()=>{
    //         try{
    //             setNotices(null);
    //             const response = await axios.get(
    //                 'https://jsonplaceholder.typicode.com/users'
    //             );
                
    //             const data = response.data;
    //             //가공하기
    //             setNotices(data);
    //         }catch{
    //             setNotices(null);
    //         }
    //     }
    //     fetchNotices();
    // })


    return(
        <div className='notice_page'>
            <div className='notice_title'>공지사항</div>
            {/* <Searchbox/> */}

            <div className='notice_board'>
                <NoticeItem isHeader={true} item={{id:'#',title:'제목', createdAt:'작성일자'}}/>   
                {notices.map((item,idx)=>(
                    <NoticeItem isHeader={false} item={item} key={idx}/>
                )
                )}
                
            </div>
            <NoticeIndex number={10}/>


        </div>
        
    );
};


export default Notice;