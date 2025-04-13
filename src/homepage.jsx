import React from "react";
import NavBar from "./components/Nav/Nav";
import Overview from "./components/Overview/Overview";
import {useGoogleLogin} from '@react-oauth/google'
import { useNavigate } from "react-router-dom";
import Features from "./components/features/feature";
import './homepage.css'
import Plans from "./components/plans/plans";
import Student from "./components/student/student";
import Insta from "./components/instagram/insta";


const HomePage = () => {

    const navigate = useNavigate()

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            fetch(`https://www.googleapis.com/oauth2/v3/userinfo`, {
                headers: {
                    Authorization: `Bearer ${tokenResponse.access_token}`
                }
            })
            .then(res => res.json())
            .then(user => {
                console.log("User info:", user);
                console.log(tokenResponse)
                console.log(tokenResponse.access_token)
                localStorage.setItem("token", tokenResponse.access_token);
                localStorage.setItem("user", JSON.stringify(user));
                navigate('/gemini');
            });
        },
        onError: () => {
            console.log("Google login Failed");
        }
    });

    return(
        <>
        <NavBar login={login}/>
        <Overview login={login}/>
        <Features/>
        <Plans/>
        <Student/>
        <Insta/>
        </>
    )
}

export default HomePage