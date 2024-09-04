import React from "react"
import { Chrono } from "react-chrono";
import DraggableComp from "./Draggable";
import Tabs from "./components/Tabs";

export default function App() {
    // const items = [{
    //     title: "May 1940",
    //     cardTitle: "Dunkirk",
    //     url: "",
    //     cardSubtitle: "Men of the British",
    //     cardDetailedText: "Men of the "
    // }, {
    //     title: "May 1941",
    //     cardTitle: "Dunkirk",
    //     url: ""
    // },
    // {
    //     title: "May 1941",
    //     cardTitle: "Dunkirk",
    //     url: ""
    // }]

    const items = [
        {title: "title", cardTitle: 'card title'},
        {title: "title", cardTitle: 'card title'},
    ]
    return (
        <Tabs />
    )
}