import React from 'react';
import '../page/Notice.css';



const NoticeIndex = ({number}) =>{
    return (
    
    
    
    <div className='notice_index'>
        {[...Array(number)].map((item,idx)=>(

            <span className = 'notice_index_item' key={idx}>{idx+1}</span>
            
        ))}
    </div>
    )
}

export default NoticeIndex;