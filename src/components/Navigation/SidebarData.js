import React from "react";
import * as aiIcons from 'react-icons/ai'
import * as ioIcons from 'react-icons/io'

export const SidebarData =[
    
    {
        title: 'Home',
        path: '/Home',
        icon: <aiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        title: 'Publish',
        path: '/Publish',
        icon: <ioIcons.IoIosPaper/>,
        cName: 'nav-text'
    },

    {
        title: 'My Account',
        path: '/MyAccount',
        icon: <ioIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
]