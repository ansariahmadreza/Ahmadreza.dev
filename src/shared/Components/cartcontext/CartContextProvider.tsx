"use client"
import { createContext, useContext, useEffect, useState } from "react";
import type { ProductItems } from "../../types/typeCartContext";
import { Rootid } from "@/features/products";
import { RegisterFormData } from "@/features/auth";
import cookie from "js-cookie";

export interface CartContextProvider {
    children: React.ReactNode
};

export interface RootCartContext {
    ProductItems: ProductItems[];
    handle_Increase_Product: (id: number, qty: number, size: string) => void; //add product
    handle_Size_Product: (id: number, oldSize: string, newSize: string) => void
    handle_Remove_Product: (id: number, size: string) => void; // remove existing product
    handle_Decrease_Product: (id: number, qty: number, size: string) => void; // reduce exisiting products
    handle_Faverite_Product: (id: number) => void;
    Favorites: Rootid[];
    cartTotalQty: number; // sum of next and previous item counts
    selectedSize: string;
    setSelectedSize: (size: string) => void;
    setFlagSort: (status: boolean) => void;
    flagSort: boolean;
    handlerEmail: (email: { email: string }) => void;
    logout: () => void;
    currentEmailValue: RegisterFormData | null;
};

export const CartContext = createContext({} as RootCartContext)

export const useCartContext = () => {
    return useContext(CartContext)
};

const CartContextProvider = ({ children }: CartContextProvider) => {

    const [Favorites, setFavorites] = useState<Rootid[]>([])
    const [ProductItems, setProductItems] = useState<ProductItems[]>([]);
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [flagSort, setFlagSort] = useState<boolean>(false)
    const [currentEmailValue, setCurrentEmailValue] = useState<RegisterFormData | null>(null);

    //saving shopping cart product and user favorite products after loggin out of the user account.
    const saveUserData = (email: string, cart: ProductItems[], favorites: Rootid[]) => {
        localStorage.setItem(`cart_${email}`, JSON.stringify(cart));
        localStorage.setItem(`fav_${email}`, JSON.stringify(favorites));
    };

    //retrieving the user's shopping cart products and favorite items after logout that have been saved.
    const loadUserData = (email: string) => {
        const savedCart = localStorage.getItem(`cart_${email}`);
        const savedFav = localStorage.getItem(`fav_${email}`);

        return {
            cart: savedCart ? JSON.parse(savedCart) : [],
            favorites: savedFav ? JSON.parse(savedFav) : []
        };
    };

    const handlerEmail = (email: { email: string }): void => {
        const oldEmail = currentEmailValue;
        const newEmail = email.email;

        if (oldEmail?.email && oldEmail.email !== newEmail) {//if the previous email exists and diffferent from the new email.
            saveUserData(oldEmail.email, ProductItems, Favorites)
        }

        if (oldEmail?.email === newEmail) return //if the previous email and the new email are the some.

        const { cart, favorites } = loadUserData(newEmail)
        //uploading new user data
        setCurrentEmailValue({ email: newEmail });
        setProductItems(cart)
        setFavorites(favorites)
        localStorage.setItem("currentUser", JSON.stringify(email));
    };

    const logout = () => {
        if (currentEmailValue) {
            saveUserData(currentEmailValue.email, ProductItems, Favorites);
        }

        localStorage.removeItem("currentUser");
        setCurrentEmailValue(null);
        setProductItems([]);
        setFavorites([]);
        cookie.remove("token")
    };

    const cartTotalQty = ProductItems.reduce((totalQty, item) => { //total quntity of products with previous quantities.
        return totalQty + item.qty
    }, 0);

    const handle_Size_Product = (id: number, oldSize: string, newSize: string) => {
        setProductItems(prev => {
            return prev.map((item) => {
                return item.id === id && item.size === oldSize ? { ...item, size: newSize } : item
            })
        })
    }

    const handle_Increase_Product = (id: number, qty: number, size: string) => { /// product Increase.
        setProductItems(prev => {
            const isNotProductExit = prev.findIndex(item => item.id === id && item.size === size)  ///return the item if it exists.
            if (isNotProductExit === -1) return [...prev, { id, qty: qty, size }]  /// if the ID is null,assign the value to ID and the product quantity is one.
            return prev.map((item, index) =>
                index === isNotProductExit
                    ? { ...item, qty, size } : item
            )
        })
    };

    const handle_Decrease_Product = (id: number, qty: number, size: string) => {  /// product decrease
        setProductItems(prev => {
            const isLastOne = prev.find(item => item.id === id && item.size === size)?.qty == 1
            if (isLastOne) {
                return prev.filter((item) => !(item.id === id && item.size === size))
            } else {
                return prev.map(item => {
                    if (item.id === id && item.size === size) {
                        return { ...item, qty: Number(qty), size }
                    } else {
                        return item; // for other products that remain unchanged.
                    }
                })
            }
        })
    };

    const handle_Faverite_Product = (id: number) => {   // favorite products
        const token = cookie.get("token");
        if (token) {
            setFavorites(prev => {
                const exists = prev.some(item => item.id === id);   // check if this product is currently in the list or not?
                let newFavorites;
                //make a dicision
                if (exists) {
                    //product exists → so is should be removed(OFF state)
                    newFavorites = prev.filter(item => item.id !== id);
                } else {
                    //product does not exist → so is should be added(ON state)
                    newFavorites = [...prev, { id }]
                }
                if (currentEmailValue?.email) {//only saves when the user is logged in
                    localStorage.setItem(`fav_${currentEmailValue.email}`, JSON.stringify(newFavorites))
                }
                return newFavorites
            });
        }
    };

    const handle_Remove_Product = (id: number, size: string) => {  /// remove products
        setProductItems(prev => {
            return prev.filter(item => !(item.id === id && item.size === size))
        });
    };


    useEffect(() => {//restore user session,cart,and favorite from previous session
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
            const user = JSON.parse(storedUser)
            const { cart, favorites } = loadUserData(user.email)
            setCurrentEmailValue(user.email);
            setProductItems(cart)
            setFavorites(favorites)
        }
    }, [])

    useEffect(() => {//favorite products
        if (currentEmailValue) {
            localStorage.setItem(`cart_${currentEmailValue}`, JSON.stringify(ProductItems))
        }
    }, [ProductItems, currentEmailValue])

    useEffect(() => {
        if (currentEmailValue) {
            localStorage.setItem(`fav_${currentEmailValue}`, JSON.stringify(Favorites))
        }
    }, [Favorites, currentEmailValue]);

    return (
        <CartContext.Provider value={{
            handle_Faverite_Product, handle_Decrease_Product, cartTotalQty, Favorites, handle_Size_Product, selectedSize, setSelectedSize,
            handle_Increase_Product, ProductItems, handle_Remove_Product, setFlagSort, flagSort, handlerEmail, logout, currentEmailValue
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;