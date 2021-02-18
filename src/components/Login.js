import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import {auth, provider} from '../firebase'
import {login} from '../features/userSlice'
import {useDispatch} from 'react-redux'
function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error.message))
    }

    return (
        <LoginSection>
            <LoginContainer>
<img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
alt="logo in login" />
                <Button variant="contained"
                color="primary" onClick={signIn}>Login</Button>
            </LoginContainer>
        </LoginSection>
    )
}

export default Login
const LoginSection = styled.div`
display: grid;
place-items: center;
height: 100vh;
background-color: #f2f2f2;
`

const LoginContainer = styled.div`
display: flex;
flex-direction: column;

img{
    object-fit: contain;
    height: 200px;

}`
