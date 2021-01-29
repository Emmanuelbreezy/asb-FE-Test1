import React from "react";
import { ContentBody } from "../../components/ContentBody/ContentBody";
import { Header } from "../../components/Header/Header";

type MainAppProps = {}

export const MainApp = (props:MainAppProps) => {

    return (
        <div className="w-full flex flex-col flex-1  bg-background-scaffold">
            <Header />
            <ContentBody />
        </div>
    )
}