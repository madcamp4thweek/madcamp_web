import React from 'react';
import './NoticeItem.css';
import {Link} from 'react-router-dom';

const NoticeItem = ({item,isHeader}) => {
    return (
        <div className='notice_item'>
                <div style={isHeader ? {fontWeight:'700'} : null } className ='notice_item_id'>
                    {item.id}
                </div>
               
                    {isHeader?
                        <div style={{textAlign:'center'}}className ='notice_item_title'>
                            {item.title}
                        </div>
                    :
                    <div className ='notice_item_title'>
                        <Link to={`/notice/${item.id}`}>
                            {item.title}
                        </Link>
                    </div>

                    }

                <div style={isHeader ? {fontWeight:'700'} : null } className= 'notice_item_created_at'>
                    {item.createdAt}
                </div>
        </div>
    )
}

export default NoticeItem;