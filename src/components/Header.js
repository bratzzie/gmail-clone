import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import {useDispatch} from 'react-redux'

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
           dispatch(logout());
        })
        
    };

    return (
        <HeaderSection>
            <HeaderLeft>
                <IconButton>
                    <MenuIcon />
                </IconButton>
             <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="logo" />   
            </HeaderLeft>

            <HeaderMiddle>
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header_inputIcon" />
            </HeaderMiddle>

            <HeaderRight>
                <IconButton>
                     <AppsIcon />
                </IconButton>
               
               <IconButton>
                   <NotificationsIcon />
               </IconButton>

               <Avatar onClick={signOut} src={user?.photoUrl}/>
            </HeaderRight>
        </HeaderSection>
    )
}

export default Header

const HeaderSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid whitesmoke;
 `
const HeaderLeft= styled.div`
display: flex;
align-items: center;

img{
    object-fit: contain;
    height: 80px;
    margin-left: 5px;
}
`
const HeaderMiddle = styled.div`
display: flex;
align-items: center;
flex: 0.7;
background-color: whitesmoke;
padding: 10px;
border-radius: 5px;

.MuiSvgIcon-root{
    color: gray;

}

input{
    border: none;
    width: 100%;
    padding: 10px;
    outline: none;
    font-size: medium;
    background-color: transparent;
}
`
const HeaderRight = styled.div`
display: flex;
padding-right: 20px;

`