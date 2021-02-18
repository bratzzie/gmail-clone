import { IconButton } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import ErrorIcon from '@material-ui/icons/Error'
import DeleteIcon from '@material-ui/icons/Delete'
import EmailIcon from '@material-ui/icons/Email'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import {useHistory} from 'react-router-dom'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import PrintIcon from '@material-ui/icons/Print'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import {selectOpenMail} from '../features/mailSlice'
import {useSelector} from 'react-redux'

function Mail() {
   const history = useHistory();
   const selectedMail = useSelector(selectOpenMail);
    return (
        <MailSection>
            <MailTools>
                <MailToolsLeft >

                    <IconButton
                    onClick={() => history.push('/')}>
                        
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>

                   <IconButton>
                   <MoreVertIcon />
                   </IconButton>
                </MailToolsLeft>

                <MailToolsRight>

                   <IconButton>
                   <UnfoldMoreIcon />
                   </IconButton>

                   <IconButton>
                   <PrintIcon />
                   </IconButton>

                   <IconButton>
                   <ExitToAppIcon />
                   </IconButton>


                </MailToolsRight>
            </MailTools>

            <MailBody>
                <MailBodyHeader>
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className="mail__important" />
                    <p>{selectedMail?.title}</p>
                    <MailTime>{selectedMail?.time}</MailTime>
                </MailBodyHeader>
                <MailMessage>
                   <p>
                  {selectedMail?.description}</p> 
                </MailMessage>
            </MailBody>
        </MailSection>
    )
}

export default Mail
const MailTime = styled.p`
position: absolute;
top: 24px;
right: 0;
font-size: 12px;
color: gray;`
const MailBodyHeader = styled.div`
display: flex;
align-items: center;
padding: 20px;
border-bottom: 1px solid whitesmoke;
position: relative;
h2{
    font-weight: 400;
    margin-right: 20px;

}

.mail__important{
    color: #e8ab02 !important;
}

p{
    margin-left: 20px;
}`

const MailBody = styled.div`
display: flex;
flex-direction: column;
margin: 30px;
background-color: white;
padding: 20px;
height: 100vh;
box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);`

const MailMessage = styled.div`
p{
    padding: 10px;
    margin-right: 20px;
    overflow-wrap: break-word;
}`

const MailSection = styled.div`
flex: 1;
background-color: whitesmoke;`

const MailTools = styled.div`
display: flex;
justify-content: space-between;
background-color: white;`
const MailToolsLeft = styled.div`
display: flex;`
const MailToolsRight = styled.div``