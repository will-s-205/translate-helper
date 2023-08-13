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
        readTitle()
    }, [
        staleVoice
    ])

    const deleteByName = name => {
        setElements(oldValues => {
            return oldValues.filter(data => data.name !== name)
        })
        console.log(name)
    }

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

    const values1 = Object.values(elements)[1]
    const values3 = Object.values(elements)[3]
    const values5 = Object.values(elements)[5]
    const values7 = Object.values(elements)[7]
    // const values9 = Object.values(elements)[9]

    const button5 =
        <button

            className='check-button'
            onClick={(e) => {
                window.location.reload();
                let confirm = []

                if (elements.length > 1 && values1.name === "How") {
                    confirm.push("How")
                } if (elements.length > 3 && values3.name === "was" && values1.name !== null) {
                    confirm.push("was")
                } if (elements.length > 5 && values5.name === "your" && values1.name !== null) {
                    confirm.push("your")
                } if (elements.length > 7 && values7.name === "day" && values1.name !== null) {
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
                {newButton}
                {newButton2}
                {newButton3}
                {newButton4}
            </div>

            <div className='container3'>
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
