import React, { useEffect, useState } from 'react';
import './TypingEffect.css'; // import your css file

const TypingEffect = ({ text }) => {
  const [content, setContent] = useState('');
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const toggleCursor = setInterval(() => setCursor(!cursor), 500);

    let charIndex = 0;

    const type = setInterval(() => {
      setContent((prevContent) => prevContent + text[charIndex]);
      charIndex++;
      if (charIndex === text.length) clearInterval(type);
    }, 100); // Adjust speed as necessary

    return () => {
      clearInterval(type);
      clearInterval(toggleCursor);
    };
  }, [text]);

  return (
    <p className="typing-effect">
      {content}
      <span style={{ visibility: cursor ? 'visible' : 'hidden' }}>|</span>
    </p>
  );
};

export default TypingEffect;
