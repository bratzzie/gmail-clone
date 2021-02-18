import React from 'react'
import styled from 'styled-components'
import CheckBox from '@material-ui/core/Checkbox'
import { IconButton } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {selectMail} from '../features/mailSlice'

function EmailRow({
    id, title, subject, description, time
}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch((selectMail({
            id, title, subject, description, time 
        })));
        history.push('/mail')
    };
    return (
        <EmailRowSection onClick={openMail}>

            <EmailRowOptions>
            <CheckBox />
            <IconButton>
                <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon />
            </IconButton>
            </EmailRowOptions>
           
           <EmailRowTitle>
                {title}
           </EmailRowTitle>

           <EmailRowMessage>
                <h4>{subject} {" "}
                <EmailRowDes>
                    -{description} </EmailRowDes>
                </h4>
           </EmailRowMessage>
            
            <EmailRowTime>
                {time}
            </EmailRowTime>
        </EmailRowSection>
    )
}

export default EmailRow
const EmailRowSection = styled.div`
display: flex;
align-items: center;
height: 50px;
border-bottom: 1px solid whitesmoke;
cursor: pointer;
z-index: 999;

:hover{
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
}`

const EmailRowTime = styled.p`
padding-right: 15px;
font-size: 9px;
font-weight: bold;
`
const EmailRowMessage = styled.div`
display: flex;
flex: 0.8;
align-items: center;
font-size: 13px;

h4{
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px; 
}
`

const EmailRowTitle = styled.h3`
font-size: 13px;
flex: 0.3;`
const EmailRowOptions = styled.div`
display: flex;
` 
const EmailRowDes = styled.span`
font-weight: 400;
color: gray;
`