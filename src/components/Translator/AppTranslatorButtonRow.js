// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
// JOKES // Hide or show elements // https://scrimba.com/learn/learnreact/conditional-rendering--co00d4a3c9a328b5ff96f418e
import './AppTranslator.scss';
import { useState } from 'react';

export default function AppTranslatorButtonRow() {
    const [isShown, setIsShown] = useState(false)
    const [isShown1, setIsShown1] = useState(false)
    const [isShown2, setIsShown2] = useState(false)
    const [isShown3, setIsShown3] = useState(false)

    function hide1() {
        console.log("Hidden1");
        setIsShown1(prevShown1 => !prevShown1)
    }

    function hide2() {
        console.log("Hidden2");
        setIsShown2(prevShown2 => !prevShown2)
    }

    function hide3() {
        console.log("Hidden3");
        setIsShown3(prevShown3 => !prevShown3)
    }

    function toggle1() {
        console.log("Toggle");
        setIsShown1(prevShown1 => !prevShown1)
    }

    function toggle2() {
        console.log("Toggle");
        setIsShown2(prevShown2 => !prevShown2)
    }

    function toggle3() {
        console.log("Toggle");
        setIsShown3(prevShown3 => !prevShown3)
    }

    return (
        <div>
            <br></br>
            <div className="buttonRow">
                <p>ROW 1: </p>
                {isShown1 && <button onClick={hide1}>hide 1</button>}
                {isShown2 && <button onClick={hide2}>hide 2</button>}
                {isShown3 && <button onClick={hide3}>hide 3</button>}
            </div>
            <br></br>
            <div className="buttonRow">
                <p>ROW 2: </p>
                <button onClick={toggle1}>toggle 1</button>
                <button onClick={toggle2}>toggle 2</button>
                <button onClick={toggle3}>toggle 3</button>
            </div>
        </div>
    )
}