import React from "react"
import { Chrono } from "react-chrono";
import DragNclick from "./components/dragNclick/DragNclick";
import DraggableComp from "./components/draggableComp/DraggableComp";
import Demo from "./hooks/UseRefHook/Demo";
import AnotherDemo from "./hooks/UseRefHook/AnotherDemo";


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
        <>
            <Demo />
            <AnotherDemo />
        </>
    )
}