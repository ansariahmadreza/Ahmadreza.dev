"use client"
import { useState, useEffect } from "react";

const Btnheader = () => {
    const [gender, setGender] = useState("men")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const valueGender = localStorage.getItem("gender");
        if (valueGender) setGender(JSON.parse(valueGender));
        setIsLoaded(true);
    }, [])

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("gender", JSON.stringify(gender))
        }
    }, [gender, isLoaded])

    if (!isLoaded) {// do not display the buttons until the gender value is fetched from localStorage
        return null
    }
    return (
        <div>
            <button onClick={() => setGender("women")} className={` ${gender === "women" ? "bg-[#525050]" : ""} gender border-l cursor-pointer leading-[60px] 
                 px-6 border-[#4d4c4c] hover:bg-[#525050]`}>WOMEN</button>
            <button onClick={() => setGender("men")} className={` ${gender === "men" ? "bg-[#525050]" : ""} gender cursor-pointer leading-[60px]
                 px-6 hover:bg-[#525050] border-[#4d4c4c]`}>MEN</button>
        </div>
    )
};
export default Btnheader;