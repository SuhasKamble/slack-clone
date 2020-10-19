import { Avatar } from '@material-ui/core'
import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';import { useStateValue } from './StateProvider';
function Header() {
    const [{user},dispstch] =  useStateValue()
    return (
        <div className="header">
            <div className="header__left">
                <Avatar src={user?.photoURL} alt={user?.displyName}/>
                <AccessTimeIcon/>
            </div>

            <div className="header__search">
            <SearchIcon/>
            <input placeholder="Search Suhas Kamble"/>
            </div>

            <div className="header__right">
            <HelpOutlineOutlinedIcon/>
            </div>
        </div>
    )
}

export default Header
