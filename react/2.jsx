import React, { useState } from 'react';

export const CensoredText = ({ badWords, children }) => {
    const [originalWord, setOriginalWord] = useState(null);

    const handleWordClick = word => {
        setOriginalWord(word);
    };

    const censoredWord = word => {
        return word.replace(/[^\s]/g, '*');
    };

    const renderText = text => {
        return text.split(' ').map((word, index) => {
            if (badWords.includes(word.toLowerCase())) {
                return (
                    <span
                        key={index}
                        onClick={() => handleWordClick(word)}
                        style={{ cursor: 'pointer' }}
                    >{originalWord === word
                        ? word
                        : censoredWord(word)}
                    </span>
                );
            }

            return <span key={index}>{word}</span>;
        });
    };

    return <div>{renderText(children)}</div>;
};

// Пример:

export default SomeComponent = () => {
    const badWords = ['test', 'someBadWord'];
    const someText = 'Very long text who containts someBadWord and testWord';

    return <CensoredText badWords={badWords}>{someText}</CensoredText>;
};