import React from "react";
import { BottomLayer } from "./ContentLayer/BottomLayer/BottomLayer";
import { TopLayer } from "./ContentLayer/TopLayer/TopLayer";

type ContentBodyProps = {}

export const ContentBody = (props:ContentBodyProps) => {

    return (
      <div className="content-body-asb flex flex-col items-center space-y-2">
        <TopLayer />
        <BottomLayer />
      </div>
    )
}