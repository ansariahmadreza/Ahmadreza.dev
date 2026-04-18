import React from "react"

export interface Typegender {
    gender: "men" | "women"
    handleChangegender: () => void

}

export const RootLocalStorage: Typegender = {
    gender: "men",
    handleChangegender: () => { }
}

export interface GenderContextProvider {
    children: React.ReactNode
}