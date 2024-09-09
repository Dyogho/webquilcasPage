'use client'
import React, { useState, useEffect } from 'react';

const RotatingText = () => {
    const words = ['Amor', 'Cariño', 'Cultura'];
    const [currentWord, setCurrentWord] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(false);
            setTimeout(() => {
                setCurrentWord((prev) => (prev + 1) % words.length);
                setIsAnimating(true);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
            <h2 className="text-white font-bold mb-4 flex items-center justify-center flex-wrap">
                Representamos&nbsp;
                <span className="inline-block relative perspective-300 ">
                    {words.map((word, index) => (
                        <span
                            key={word}
                            className={`absolute left-0 top-0 whitespace-nowrap ${
                                index === currentWord
                                    ? 'relative text-orange-200 animate-rotateIn'
                                    : 'opacity-0 animate-rotateOut'
                            }`}
                        >
                            {word}
                        </span>
                    ))}
                </span>
            </h2>
        </div>
    );
};

export default RotatingText;