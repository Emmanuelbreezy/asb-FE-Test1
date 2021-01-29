import React, { useEffect } from "react";
import { ThemeContextValue } from "../../context/theme_context";

export const Layout = (props:any) => {
    const {themeMode} = ThemeContextValue();
    useEffect(()=>{
        localStorage.setItem('themeMode',themeMode);
    },[themeMode])


    //const switchTheme = themeMode === "darkTheme" ? "asb-theme-dark":"asb-theme-light";
    const switchTheme = "asb-theme-light";
    
    return (
        <div className={"w-full h-full" + " " + switchTheme }>
            {props.children}
        </div>
    )
}