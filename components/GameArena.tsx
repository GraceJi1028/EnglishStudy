
import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { speakText } from '../services/audioService';

interface GameArenaProps {
  questions: QuizQuestion[];
}

const GameArena: React.FC<GameArenaProps> = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);

  const currentQ = questions[currentIndex];

  const handleAnswer = (option: string) => {
    if (showFeedback) return;

    if (option === currentQ.answer) {
      setScore(s => s + 10);
      setShowFeedback('correct');
      speakText("Perfect! You're so smart!");
    } else {
      setShowFeedback('wrong');
      speakText("Oh no, try again next time!");
    }

    setTimeout(() => {
      setShowFeedback(null);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // Reset or show results
        setCurrentIndex(0);
      }
    }, 2000);
  };

  return (
    <div className="bg-emerald-50 rounded-3xl p-6 border-4 border-emerald-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-emerald-700 comic-font">Food Challenge!</h3>
        <div className="flex items-center gap-2 bg-emerald-200 px-4 py-2 rounded-2xl">
          <i className="fas fa-star text-yellow-500"></i>
          <span className="font-bold text-emerald-800">{score}</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-emerald-100 mb-6">
        {currentQ.image && (
          <img src={currentQ.image} alt="Quiz" className="w-full h-48 object-cover" />
        )}
        <div className="p-6 text-center">
          <p className="text-2xl font-bold text-gray-800 comic-font mb-4">{currentQ.question}</p>
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className={`py-4 rounded-xl font-bold text-xl border-2 transition-all ${
                  showFeedback === 'correct' && opt === currentQ.answer ? 'bg-green-400 border-green-600 text-white' :
                  showFeedback === 'wrong' && opt !== currentQ.answer ? 'bg-red-100 border-red-300 text-red-500 opacity-50' :
                  'bg-white border-emerald-200 text-emerald-600 hover:bg-emerald-50 active:scale-95'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {showFeedback && (
        <div className={`text-center font-bold text-xl animate-bounce ${showFeedback === 'correct' ? 'text-green-600' : 'text-red-500'}`}>
          {showFeedback === 'correct' ? '🌟 CORRECT! 🌟' : '❌ WRONG! ❌'}
        </div>
      )}
    </div>
  );
};

export default GameArena;
