
import React, { useState } from 'react';
import { DialogueLine } from '../types';
import { speakText } from '../services/audioService';

interface DialogueBoxProps {
  lines: DialogueLine[];
}

const DialogueBox: React.FC<DialogueBoxProps> = ({ lines }) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const playLine = (idx: number) => {
    setActiveIdx(idx);
    const line = lines[idx];
    speakText(line.text, line.speaker === 'Mum' ? 'Kore' : 'Puck');
  };

  return (
    <div className="space-y-4">
      {lines.map((line, idx) => (
        <div 
          key={idx}
          className={`flex ${line.speaker === 'Mum' ? 'justify-start' : 'justify-end'}`}
        >
          <button 
            onClick={() => playLine(idx)}
            className={`max-w-[80%] p-4 rounded-2xl shadow-sm border-2 transition-all text-left ${
              line.speaker === 'Mum' 
                ? 'bg-blue-100 border-blue-200 rounded-bl-none' 
                : 'bg-green-100 border-green-200 rounded-br-none'
            } ${activeIdx === idx ? 'ring-4 ring-yellow-400' : ''}`}
          >
            <p className="font-bold text-sm mb-1 opacity-70">{line.speaker}</p>
            <p className="text-lg font-medium text-gray-800 comic-font">{line.text}</p>
          </button>
        </div>
      ))}
      <button 
        onClick={() => {
          let i = 0;
          const interval = setInterval(() => {
            if (i >= lines.length) {
              clearInterval(interval);
              setActiveIdx(null);
              return;
            }
            playLine(i);
            i++;
          }, 3500);
        }}
        className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
      >
        <i className="fas fa-play"></i> Play Full Dialogue
      </button>
    </div>
  );
};

export default DialogueBox;
