// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'

const options = [
    {
        label: 'Afrikanns',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
]

const Translate = () => {

    const [lang, setLang] = useState(options[0])
    const [text, setText] = useState('')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                options={options}
                selected={lang}
                onSelectedChange={setLang}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert lang={lang} text={text} />
        </div>
    );


};

export default Translate;

