// LOCAL STORAGE // https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
// JOKES // Hide or show elements // https://scrimba.com/learn/learnreact/conditional-rendering--co00d4a3c9a328b5ff96f418e
import { nanoid } from 'nanoid';
import './AppTranslator.scss';
import { useEffect, useState } from 'react';

export default function AppTranslatorCreateNewButton() {
    const [staleVoice] = useState([readTitle])
    const [elements, setElements] = useState([
        // { id: "", name: "", boolean: true },
        // {id:2},
        // {id:3},

        // { id: 1, name: "🍎 Apple" },
        // { id: 2, name: "🍊 Orange" },
        // { id: 3, name: "🍌 Banana" },
        // { id: 4, name: "🍇 Grapes" },
    ]);

    function readTitle() {
        let utteranceInit = new SpeechSynthesisUtterance("Comment s'est passée ta journée?")
        utteranceInit.lang = "fr-FR";
        speechSynthesis.speak(utteranceInit)
    }

    useEffect(() => {
        // console.log(elements)
        readTitle()
    }, [
        // elements
        staleVoice
    ])

    // const deleteByIndex = index => {
    //     setElements(oldValues => {
    //         return oldValues.filter((_, i) => i !== index)
    //     })
    // }

    const deleteByName = name => {
        setElements(oldValues => {
            return oldValues.filter(data => data.name !== name)
        })
        console.log(name)
    }

    // // delete one item by id
    // const deleteById2 = id => {
    //     setElements(oldValues => {
    //         return oldValues.filter(data => data.id !== id)
    //     })
    // }

    // // choose one item only
    // const keepOnlyOneItemById2 = id => {
    //     setElements(oldValues => {
    //         return oldValues.filter(data => data.id == id)
    //     })
    // }

    // const deleteByValue = (value) => {
    //     setElements(oldValues => {
    //         return oldValues.filter(data => data !== value)
    //     })
    // }

    const newButton =
        <button
            onClick={() => {
                if (elements !== "") {
                    setElements(prevElements => [
                        ...prevElements,
                        { id: nanoid() },
                        { name: "How" },
                    ])
                }
            }
            }

        >
            How
        </button>

    const newButton2 =
        <button
            onClick={() => setElements(prevElements => [
                ...prevElements,
                { id: nanoid() },
                { name: "your" },
            ])}
        >
            your
        </button>

    const newButton3 =
        <button
            onClick={() => setElements(prevElements => [
                ...prevElements,
                { id: nanoid() },
                { name: "was" },
            ])}
        >
            was
        </button>

    const newButton4 =
        <button
            onClick={() => setElements(prevElements => [
                ...prevElements,
                { id: nanoid() },
                { name: "day" },
            ])}
        >
            day
        </button>

    // function forEachKey() {
    //     for (let i = 0; i < elements.length; i++) {
    //         if (i % 2 === 1) {
    //             console.log(elements[i].name);
    //         }
    //     }
    // }

    // const names = Object.keys(elements)
    // const entries = Object.entries(elements)
    // const values = Object.values(elements)
    const values1 = Object.values(elements)[1]
    const values3 = Object.values(elements)[3]
    const values5 = Object.values(elements)[5]
    const values7 = Object.values(elements)[7]
    // const values9 = Object.values(elements)[9]

    const button5 =
        <button
            // onClick={() => console.log(forEachKey())}
            // onClick={() => console.log(values1.name)}

            className='check-button'
            onClick={(e) => {
                window.location.reload();
                let confirm = []

                if (elements.length > 1 && values1.name === "How") {
                    // console.log(values1.name)
                    // console.log("How!")
                    confirm.push("How")
                } if (elements.length > 3 && values3.name === "was" && values1.name !== null) {
                    // console.log(values3.name)
                    // console.log("was!")
                    confirm.push("was")
                } if (elements.length > 5 && values5.name === "your" && values1.name !== null) {
                    // console.log(values5.name)
                    // console.log("your!")
                    confirm.push("your")
                } if (elements.length > 7 && values7.name === "day" && values1.name !== null) {
                    // console.log(values7.name)
                    // console.log("day!")
                    confirm.push("day")
                }

                let voiceConfirm = []
                forEachKey()
                function forEachKey() {
                    for (let i = 0; i < elements.length; i++) {
                        if (i % 2 === 1) {
                            voiceConfirm.push(elements[i].name);
                        }
                    }
                }

                const utterance = new SpeechSynthesisUtterance(voiceConfirm)
                utterance.pitch = 1;
                utterance.rate = 1.1;
                utterance.volume = 3;
                utterance.lang = "en-EN";
                speechSynthesis.speak(utterance)

                if (elements.length < 2 || elements.length > 8) {
                    // console.log(values9.name)
                    // console.log("Wrong number of words!")
                    confirm.push("Wrong amount of words")
                }
                console.log(confirm)

                if (confirm.length === 4) {
                    alert("Answer is correct!")
                } else {
                    alert("Wrong answer!")
                }
                console.log()
            }
            }
        >
            Check
        </button>

    return (
        <div className='container1'>
            <h2>Write in English:</h2>

            <div className='container2'>
                {/* <h2>Container 3</h2> */}
                {newButton}
                {newButton2}
                {newButton3}
                {newButton4}
            </div>

            <div className='container3'>
                {/* <h2>Container 4</h2> */}
                {
                    elements.map((element, index) =>
                        <div
                            className='answer-buttons'
                            key={index} // id={element.id}
                            onClick={() => deleteByName(element.name)} // onClick={() => deleteById2(element.id)}
                        >
                            {/* {element.id} */} {element.name}
                        </div>
                    )}
            </div>
            {button5}
        </div>
    )
}

// if element is exist by id or name
    // do not create more

    // Code refactoring - move voice features to the specific component