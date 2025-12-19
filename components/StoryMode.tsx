
import React, { useState } from 'react';
import { StoryNode } from '../types';
import { speakText } from '../services/audioService';

interface StoryModeProps {
  nodes: StoryNode[];
}

const StoryMode: React.FC<StoryModeProps> = ({ nodes }) => {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const currentNode = nodes.find(n => n.id === currentNodeId) || nodes[0];

  const handleChoice = (nextNodeId: string, feedback?: string) => {
    if (feedback) {
      speakText(feedback);
    }
    setCurrentNodeId(nextNodeId);
  };

  const playStory = () => {
    speakText(currentNode.text);
  };

  return (
    <div className="bg-pink-50 rounded-3xl p-6 border-4 border-pink-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-pink-700 comic-font">Zip's Breakfast Adventure</h3>
        <button onClick={playStory} className="bg-pink-200 text-pink-700 p-3 rounded-full hover:scale-110 transition-transform">
          <i className="fas fa-volume-up"></i>
        </button>
      </div>

      <div className="space-y-6">
        <img 
          src={currentNode.image} 
          alt="Story" 
          className="w-full h-60 object-cover rounded-2xl border-4 border-white shadow-lg" 
        />
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100">
          <p className="text-xl font-bold text-gray-800 comic-font leading-relaxed">{currentNode.text}</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {currentNode.choices.map((choice, idx) => (
            <button
              key={idx}
              onClick={() => handleChoice(choice.nextNodeId, choice.feedback)}
              className="group bg-white hover:bg-pink-500 p-4 rounded-xl border-2 border-pink-200 hover:border-pink-600 flex justify-between items-center transition-all shadow-sm"
            >
              <span className="text-lg font-bold text-pink-700 group-hover:text-white comic-font">{choice.text}</span>
              <i className="fas fa-chevron-right text-pink-200 group-hover:text-white"></i>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryMode;
