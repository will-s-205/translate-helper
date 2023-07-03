import './AppTranslator.scss';
import AppTranslatorCreateNewButton0 from './AppTranslatorCreateNewButton0';
import AppTranslatorVoice from './AppTranslatorVoice';

export default function AppTranslator() {

    return (
        <div>
            <h1>Comment s'est passée ta journée?</h1>
            <AppTranslatorCreateNewButton0 />
            <AppTranslatorVoice />
            <a href="https://github.com/will-s-205/translate-helper" target='_blank' rel="noreferrer" className='footer'>by William Step</a>
        </div>
    )
}