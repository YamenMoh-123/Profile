import React, { useState, useEffect } from 'react';

const Typing= ({ messages, typingSpeed = 150 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);


    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);


    useEffect(() => {
        if (index >= messages.length) {
            setIndex(0);
            return;
        }

        if (subIndex === messages[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % messages.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : typingSpeed, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <div className="flex justify-center items-center">
            <p className="text-lg font-mono flex">
                I am &nbsp;<span style={{ color: 'black' }}>

            </span>
                <span style={{ color: 'blue' }}>
                {messages[index].substring(0, subIndex)}{blink ? '|' : ' '}
            </span>
            </p>
        </div>
    );

};

export default Typing;
