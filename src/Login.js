import { Button } from '@material-ui/core'
import React from 'react'
import {auth, provider} from './firebase'
import './Login.css'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
function Login() {
    const [state,dispatch] = useStateValue()
    const signIn =()=>{
        auth.signInWithPopup(provider).then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        }).catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/180px-Slack_icon_2019.svg.png" alt=""/>
                <h1>Sign in to suhas kamble HQ</h1>
                <p>suhaskambleTest.slack.com</p>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
