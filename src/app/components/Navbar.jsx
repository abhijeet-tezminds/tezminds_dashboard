import React from 'react';
import Image from "next/image";
import tezmindsLogo from '../../assets/tezmindslogo.png';
import profile1 from '../../assets/profile1.png';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import { profileImgUrl } from '../../constants';

const Navbar = () => {
    return (
        <div style={{width:"100%", display:'flex', justifyContent:"space-between", alignItems:"center"}}>
            <div style={{display:'flex', alignItems:"center", gap:"2rem"}}>
                <Image src={tezmindsLogo} alt="Tez Minds Logo"/>
                <MenuIcon/>
            </div>
            <div style={{display:'flex', alignItems:"center", gap:"1rem"}}>
                <NotificationsIcon/>
                <Avatar alt="Profile pic" src={profileImgUrl} />
                <SettingsIcon />
            </div>
        </div>
    );
}

export default Navbar;