import React from 'react';
import './component.css';
import './Navbar.css';
import {Link} from 'react-router-dom';


const menu = [
    {name :"소개", address:'/intro'},
    {name:"경험", address:'/exp'},
    {name:"질문", address:'/faq'},
    {name:"공지사항", address:'/notice'},
];

const Navbar = ()=>{



    return(
        <div className='navbar'>
            <div className='navbar_home'>
                <Link to='/' className='navbar_logo'>
                    madcamp
                </Link>
            </div>
            <div className='navbar_menu'>
                {menu.map((item)=>(
                    <Link to={item.address} className='navbar_item'>
                        {item.name}
                    </Link>
                ))}
                <Link to='apply' className='navbar_apply_button'>
                     지원하기
                </Link>
            </div>
        </div>
    );
};


export default Navbar;