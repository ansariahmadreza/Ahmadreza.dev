"use client";
import { useEffect } from "react";

const RegisterSw = () => {
 
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            // checks whether the user's browser supports service worker
            // navigator is a browser object that contains its capabilities

            navigator.serviceWorker.register("/sw.js")
            // tells the browser to register /sw.js as the service worker
            // /sw.js is the path to the service worker file in the public folder
            // this file is responsible for caching and offline managment

        }
    }, [])
    return null; // the task of this component is only to register service worker,not to display UI
};
export default RegisterSw;