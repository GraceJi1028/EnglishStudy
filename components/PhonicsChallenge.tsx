
import React, { useState, useEffect } from 'react';
import { PhonicsWord } from '../types';
import { speakText } from '../services/audioService';

interface PhonicsChallengeProps {
  words: PhonicsWord[];
}

const PhonicsChallenge: React.FC<PhonicsChallengeProps> = ({ words }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const currentWord = words[currentIdx];

  const handleGuess = (type: 'o' | 'o-e') => {
    if (feedback) return;

    if (currentWord.type === type) {
      setFeedback('correct');
      setScore(s => s + 1);
      speakText("Good job!");
    } else {
      setFeedback('wrong');
      speakText("Try again!");
    }

    setTimeout(() => {
      setFeedback(null);
      setCurrentIdx((prev) => (prev + 1) % words.length);
    }, 1500);
  };

  const playCurrentWord = () => {
    speakText(currentWord.word);
  };

  return (
    <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-purple-700">Phonics Master: o-e</h3>
        <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full font-bold">Score: {score}</span>
      </div>

      <div className="text-center py-8">
        <button 
          onClick={playCurrentWord}
          className="text-6xl font-bold mb-4 text-purple-900 hover:scale-110 transition-transform block w-full text-center comic-font"
        >
          {currentWord.word}
        </button>
        <p className="text-gray-500 mb-8">Listen carefully. Which sound is it?</p>

        <div className="flex gap-4">
          <button 
            onClick={() => handleGuess('o')}
            className={`flex-1 py-6 rounded-2xl font-bold text-2xl border-4 transition-all ${
              feedback === 'correct' && currentWord.type === 'o' ? 'bg-green-400 border-green-600 text-white' :
              feedback === 'wrong' && currentWord.type !== 'o' ? 'bg-red-200 border-red-400 text-red-700 opacity-50' :
              'bg-white border-purple-300 text-purple-600 hover:bg-purple-100'
            }`}
          >
            - o -
          </button>
          <button 
            onClick={() => handleGuess('o-e')}
            className={`flex-1 py-6 rounded-2xl font-bold text-2xl border-4 transition-all ${
              feedback === 'correct' && currentWord.type === 'o-e' ? 'bg-green-400 border-green-600 text-white' :
              feedback === 'wrong' && currentWord.type !== 'o-e' ? 'bg-red-200 border-red-400 text-red-700 opacity-50' :
              'bg-white border-purple-300 text-purple-600 hover:bg-purple-100'
            }`}
          >
            o - e
          </button>
        </div>
      </div>

      <div className="mt-6 p-4 bg-white rounded-xl border border-purple-100">
        <p className="text-sm text-purple-400 italic font-medium">
          Note: "o-e" makes a long /oʊ/ sound, like in "home" or "bone"!
        </p>
      </div>
    </div>
  );
};

export default PhonicsChallenge;
