import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import Section from './Section'
import EmailRow from './EmailRow'
import {db} from '../firebase'
function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => 
        setEmails(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        ))
    }, []);
    return (
        <EmailListSection>
            <EmailListSettings>
                <EmailListSettingsLeft>
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                        
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>





                </EmailListSettingsLeft>

                <EmailListSettingsRight>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                        < KeyboardHideIcon />
                    </IconButton>

                    <IconButton>
                      < SettingsIcon />  
                    </IconButton>

                </EmailListSettingsRight>
            </EmailListSettings>

            <EmailListSections>
                <Section Icon={InboxIcon} title='Primary' color='red' selected={true} />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </EmailListSections>

            <EmailListList>
                {emails.map(({id, data: {to, subject, message, timestamp}}) =>(
                    <EmailRow 
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
               
            </EmailListList>
        </EmailListSection>
    )
}

export default EmailList
const EmailListList = styled.div`
padding-bottom: 20%;`
const EmailListSections = styled.div`
position: sticky;
top: 0;
display: flex;
background-color: #fff;
z-index: 999;
border-bottom: 1px solid whitesmoke;

--ms-overflow-style: none;
scrollbar-width: none;

--webkit-scrollbar{
    display: none;
}`

const EmailListSettingsRight = styled.div``

const EmailListSection = styled.div`
overflow: scroll;
flex: 1;`

const EmailListSettings = styled.div`
display: flex;
justify-content: space-between;
position: sticky;
top: 0;
border-bottom: 1px solid whitesmoke;
background-color: white;
z-index:999;
padding-right: 10px;`

const EmailListSettingsLeft = styled.div``