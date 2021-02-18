import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {closeSendMessage} from '../features/mailSlice'
import {db} from '../firebase'
import firebase from 'firebase'

function SendMail() {
    const {register, handleSubmit, errors} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
    db.collection('emails').add(
        {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()

        }
    );
    dispatch(closeSendMessage());
    };

    return (
        <SendMailSection>
            <SendMailHeader>
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close"
                 onClick={() => dispatch(closeSendMessage())}/>
            </SendMailHeader>

            <form
            onSubmit={handleSubmit(onSubmit)}>
                <input type="email"
                placeholder="To"
                name="to"
                ref={register({required: true})}
                />
                {errors.to && <p className="error">To is required!</p>}

                <input type="text"
                placeholder="Subject"
                name="subject"
                ref={register({required: true})}
                 />
                {errors.subject && <p className="error">Subject is required!</p>}

                <input type="text"
                placeholder="Message..."
                className="sendMail__message"
                name="message" 
                ref={register({required: true})}
                />
                {errors.message && <p className="error">Message is required!</p>}

                <SendMailOptions>
                    <Button 
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="sendMail__send">Send</Button>
                </SendMailOptions>
            </form>
        </SendMailSection>
    )
}

export default SendMail
const SendMailSection = styled.div`
position: absolute;
bottom: 0px;
right: 50px;
background-color: #404040;
width: 40%;
height: 40%;
max-width: 500px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
display: flex;
flex-direction: column;
border: 1px solid whitesmoke;
box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
.error{
    background-color: white;
    color: red;
    text-align: right;
    padding: 2px;
}
.sendMail__message{
    flex: 1;
}
.sendMail__close{
    cursor: pointer;

}
form{
    background-color: white; 
    display: flex;
    flex: 1;
    flex-direction: column;

}

input{
    height: 30px;
    padding: 10px;
    /* */
    border: none;
    border-bottom: 1px solid whitesmoke;
    outline: none;
}`

const SendMailHeader = styled.div`
padding: 13px;
display: flex;
justify-content: space-between;
color: gray;
align-items: center;

h3{
    color: whitesmoke;
    font-size: 13px;
}`
const SendMailOptions = styled.div`

`