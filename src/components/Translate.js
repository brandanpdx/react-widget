import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';

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
        label: 'Hindi',
        value: 'ar,'
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
        </div>
    );


};

export default Translate;