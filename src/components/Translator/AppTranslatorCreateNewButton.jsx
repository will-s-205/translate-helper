// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
// JOKES // Hide or show elements // https://scrimba.com/learn/learnreact/conditional-rendering--co00d4a3c9a328b5ff96f418e
import './AppTranslator.scss';
import { useEffect, useState } from 'react';
import { nanoid } from "nanoid"

export default function AppTranslatorCreateNewButton(props) {
    const [elements, setElements] = useState([
        { id: 1, name: "🍎 Apple", classname: "row" },
        { id: 2, name: "🍊 Orange", classname: "row" },
        { id: 3, name: "🍌 Banana", classname: "row" },
        { id: 4, name: "🍇 Grapes", classname: "row" },
    ]);

    // useEffect(()=> {

    // }, [elements])

    const deleteByValue = value => {
        setElements(oldValues => {
            return oldValues.filter(data => data !== value)
        })
        console.log(value);
    }

    const deleteById = id => {
        setElements(oldValues => {
            return oldValues.filter(data => data.id !== id)
        })
        console.log(id)
    }

    const deleteByIndex = index => {
        setElements(oldValues => {
            return oldValues.filter((_, i) => i !== index)
        })
    }

    const deleteByName = name => {
        setElements(oldValues => {
            return oldValues.filter(data => data !== name)
        })
        console.log(name)
    }

    // function delete1() {
    //     elements.map(

    //     )

    //     // setElements(oldValues => {
    //     //     return oldValues.filter(data => data !== name)
    //     // })
    // }

    // let style = { display: "none" }

    const createMapButton1 = () => {
        const newElement = <button onClick={() => deleteByIndex(0)}>map button1</button>;
        setElements(prevElements => [...prevElements, newElement]);
    };

    const createMapButton2 = () => {
        const newElement = <button onClick={() => deleteByIndex(0)}>map button2</button>;
        setElements(prevElements => [...prevElements, newElement]);
        console.log("created button 2")
    };

    const createMapButton3 = () => {
        const newElement = <button onClick={() => deleteById2(elements.id)}>{elements}</button>
        setElements(prevElements => [...prevElements, newElement]);
    };

    const newButton = <button onClick={createMapButton1}>variable button1</button>
    const newButton2 = <button onClick={createMapButton2}>variable button2</button>
    const newButton3 = <button onClick={createMapButton3}>variable button3</button>

    // delete one item
    const deleteById2 = id => {
        setElements(oldValues => {
            return oldValues.filter(data => data.id !== id)
        })
    }

    // choose one item only
    const addById2 = id => {
        setElements(oldValues => {
            return oldValues.filter(data => data.id == id)
        })
    }

    function addNewButton(id, name, classname) {
        const current = [...elements];
        // current.push(...elements);
        // current.push({ id: 2, name: "🍊 Orange" });
        current.push({ id: id, name: name, classname: classname });
        setElements(current);
    }

    return (
        <div className='container'>
            {
                elements.map(element =>
                    <div 
                    key={element.id} 
                    className={element.classname}>
                        <button>{element.name}</button>
                        <button onClick={() => addNewButton( nanoid(), element.name, element.classname + "-two")}>+</button>
                        <button onClick={() => deleteById2(element.id)}>-</button>
                    </div>)
            }
        </div>
    )
}
