import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'; 

const LoadingScreen = ({ setCodeValid }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const correctCode = ['N', 'C', 'X', 'T', 'K', 'N'];
  const navigate = useNavigate();
  const [shake, setShake] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value.toUpperCase();
    setCode(newCode);

    // Move focus to the next input
    if (value && index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Automatically trigger the check when the last input is filled
    if (index === 5 && value) {
      handleSubmit(newCode);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && code[index] === '') {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = (newCode) => {
    if (JSON.stringify(newCode) === JSON.stringify(correctCode)) {
      setCodeValid(true);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500); // Remove shake effect after animation
      setCode(['', '', '', '', '', '']);
      inputRefs.current[0].focus();
    }
  };

  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white text-center ${shake ? 'animate-shake' : ''}`}>
      <img src={logo} alt="Nocena Logo" className="w-30 mb-5 cursor-pointer" onClick={() => navigate('/')} />
      <h2 className="blue uppercase mb-6">Your content<br />Your profit</h2>
      <div className="flex justify-center mt-4">
        {code.map((char, index) => (
          <input
            key={index}
            id={`input-${index}`}
            ref={el => inputRefs.current[index] = el}
            className={`w-12 h-12 m-1 text-2xl text-center border border-white bg-gray-800 text-white ${index < 3 ? 'pink' : 'blue'} ${index === 2 ? 'mr-5' : ''}`}
            type="text"
            maxLength="1"
            value={char}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
