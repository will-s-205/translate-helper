import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import './AppTranslatorVoice.scss';
import wave from '../../img/wave.gif'

export default function AppTranslatorVoice() {
    const [text, setText] = useState('')
    const [voices, setVoices] = useState([]);
    const [lang, setLang] = useState('');

    // console.log(text)
    useEffect(() => {
        // console.log("useEffect")
    }, [text])

    // // Init SpeechSynth API
    const synth = window.speechSynthesis;

    // Speak
    const speak = () => {
        // Check if speaking
        if (synth.speaking) {
            console.error('Already speaking...');
            return;
        }
        if (text.value !== '') {

            // Get speak text
            const speakText = new SpeechSynthesisUtterance(text.text);

            // Speak end
            speakText.onend = e => {
                console.log('Done speaking...');
            };

            // Speak error
            speakText.onerror = e => {
                console.error('Something went wrong');
            };

            // // Loop through voices
            voices.forEach(voice => {
                if (voice.name === lang.slice(0, -8)) {
                    speakText.voice = voice;
                }
            });

            // Set pitch and rate
            // speakText.rate = rate.value;
            // speakText.pitch = pitch.value;
            synth.speak(speakText);
        }
    };

    useEffect(() => {
        const synth = window.speechSynthesis;

        const getVoices = () => {
            const availableVoices = synth.getVoices();
            setVoices(availableVoices);
        };

        synth.addEventListener('voiceschanged', getVoices);
        getVoices();

        return () => {
            synth.removeEventListener('voiceschanged', getVoices);
        };
    }, []);

    // Running functions on submit
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(text.text)
        // console.log(voices)
        // console.log(voices[0].default) // default tells if languge is selected
        // console.log(voices[0].name) // default tells if languge is selected

        speak();

        // OR
        // let utteranceInit = new SpeechSynthesisUtterance(text.text)
        // utteranceInit.lang = "fr-FR";
        // speechSynthesis.speak(utteranceInit)
    }

    // Getting text of textarea
    function handleChange(event) {
        const { name, value } = event.target
        setText(prevRec => {
            // console.log(event.target.text)
            // console.log(event.target)
            return {
                ...prevRec,
                id: nanoid(),
                [name]: value,
            }
        })
    }

    // Getting element by clicking on it
    const handleSelect = (event) => {
        // console.log(event.target.value)
        const selectedOption = event.target.value
        setLang(selectedOption)
    }
    // console.log("handleSelect -8 SLICE - "+lang.slice(0, -8))

    return (
        <form className='speak-wrapper'
            onSubmit={handleSubmit}
        >
            {/* Start typing your text here and then choose a language to read the text for you */}
            <textarea
                className='textarea'
                placeholder='text-to-voice here'
                name="text"
                value={text.text}
                onChange={handleChange}
            ></textarea>

            <div className="form-group">
                <select
                    // id="voice-select"
                    value={lang}
                    onChange={handleSelect}
                    name="lang"
                >
                    {voices.map((voice, index) => (
                        <option

                            key={index}
                            data-lang={voice.lang}
                            data-name={voice.name}
                        >
                            {`${voice.name} (${voice.lang})`}
                        </option>
                    ))}
                </select>
            </div>

            <button>speak</button>

            <img 
            scr={wave} 
            className='wave' 
            alt=''
            ></img>
        </form>
    )
}
