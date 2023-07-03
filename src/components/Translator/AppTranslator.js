// https://scrimba.com/learn/learnreact/notes-app-sync-notes-with-localstorage-co3c5495b8d7949e81b79988a
import './AppTranslator.scss';
// import AppTranslatorButtonRow from './AppTranslatorButtonRow';
// import AppTranslatorCreateNewButton from './AppTranslatorCreateNewButton';
import AppTranslatorCreateNewButton0 from './AppTranslatorCreateNewButton0';
import AppTranslatorVoice from './AppTranslatorVoice';

export default function AppTranslator() {

    return (
        <div>
            <h1>Comment s'est passée ta journée?</h1>
            {/* <AppTranslatorButtonRow />
            <AppTranslatorCreateNewButton /> */}
            <AppTranslatorCreateNewButton0 />
            <AppTranslatorVoice />
        </div>
    )
}