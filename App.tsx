
import React, { useState } from 'react';
import { LessonSection } from './types';
import { FOOD_ITEMS, DIALOGUE, CHANT_LINES, PHONICS_WORDS, QUIZ_QUESTIONS, STORY_NODES } from './constants';
import SectionCard from './components/SectionCard';
import FoodMenu from './components/FoodMenu';
import DialogueBox from './components/DialogueBox';
import PhonicsChallenge from './components/PhonicsChallenge';
import GameArena from './components/GameArena';
import StoryMode from './components/StoryMode';
import { speakText } from './services/audioService';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LessonSection>(LessonSection.TALK);

  const renderContent = () => {
    switch (activeTab) {
      case LessonSection.TALK:
        return <DialogueBox lines={DIALOGUE} />;
      case LessonSection.LEARN:
        return <FoodMenu items={FOOD_ITEMS} />;
      case LessonSection.DO:
        return (
          <div className="space-y-4">
            <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-100 space-y-4">
              {CHANT_LINES.map((line, idx) => (
                <button 
                  key={idx}
                  onClick={() => speakText(line)}
                  className="w-full text-left p-3 hover:bg-red-100 rounded-xl transition-colors font-bold text-xl text-red-800 comic-font border-b border-red-100 last:border-0"
                >
                  <i className="fas fa-music text-red-300 mr-3 text-sm"></i>
                  {line}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border shadow-sm">
               <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=200&fit=crop" className="w-16 h-16 rounded-lg" alt="Action" />
               <p className="text-gray-600 italic">"Follow the rhythm and do the actions! Let's move!"</p>
            </div>
          </div>
        );
      case LessonSection.SPELL:
        return <PhonicsChallenge words={PHONICS_WORDS} />;
      case LessonSection.GAMES:
        return <GameArena questions={QUIZ_QUESTIONS} />;
      case LessonSection.STORY:
        return <StoryMode nodes={STORY_NODES} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pb-24 max-w-2xl mx-auto px-4 pt-8">
      {/* Header */}
      <header className="mb-8 text-center">
        <div className="inline-block bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full font-bold text-sm mb-2 shadow-sm">
          Unit 4: What do we eat?
        </div>
        <h1 className="text-4xl font-extrabold text-blue-900 comic-font mb-2">Fun English Learning</h1>
        <p className="text-blue-600 font-medium">Grade 3 (Three) • Page 38-40</p>
      </header>

      {/* Main Interactive Area */}
      <main className="mb-8">
        <SectionCard 
          title={
            activeTab === LessonSection.TALK ? "Let's Talk" :
            activeTab === LessonSection.LEARN ? "Let's Learn" :
            activeTab === LessonSection.DO ? "Listen and Do" :
            activeTab === LessonSection.SPELL ? "Let's Spell" :
            activeTab === LessonSection.GAMES ? "Game Arena" : "Story Adventure"
          }
          subtitle={
            activeTab === LessonSection.TALK ? "Dialogue & Conversation" :
            activeTab === LessonSection.LEARN ? "Vocabulary & Menu" :
            activeTab === LessonSection.DO ? "Rhyme & Action" :
            activeTab === LessonSection.SPELL ? "Phonics Practice" :
            activeTab === LessonSection.GAMES ? "Challenge Your Knowledge" : "Interactive Tale"
          }
          icon={
            activeTab === LessonSection.TALK ? "fa-comments" :
            activeTab === LessonSection.LEARN ? "fa-utensils" :
            activeTab === LessonSection.DO ? "fa-running" :
            activeTab === LessonSection.SPELL ? "fa-font" :
            activeTab === LessonSection.GAMES ? "fa-gamepad" : "fa-book-open"
          }
          active
        >
          {renderContent()}
        </SectionCard>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-full shadow-2xl p-2 flex gap-1 border border-white/50 z-50 overflow-x-auto max-w-[95vw]">
        <NavButton 
          active={activeTab === LessonSection.TALK} 
          onClick={() => setActiveTab(LessonSection.TALK)}
          icon="fa-comments"
          label="Talk"
        />
        <NavButton 
          active={activeTab === LessonSection.LEARN} 
          onClick={() => setActiveTab(LessonSection.LEARN)}
          icon="fa-utensils"
          label="Learn"
        />
        <NavButton 
          active={activeTab === LessonSection.DO} 
          onClick={() => setActiveTab(LessonSection.DO)}
          icon="fa-music"
          label="Chant"
        />
        <NavButton 
          active={activeTab === LessonSection.SPELL} 
          onClick={() => setActiveTab(LessonSection.SPELL)}
          icon="fa-font"
          label="Spell"
        />
        <NavButton 
          active={activeTab === LessonSection.GAMES} 
          onClick={() => setActiveTab(LessonSection.GAMES)}
          icon="fa-gamepad"
          label="Game"
        />
        <NavButton 
          active={activeTab === LessonSection.STORY} 
          onClick={() => setActiveTab(LessonSection.STORY)}
          icon="fa-book"
          label="Story"
        />
      </nav>

      {/* Educational Footer Tip */}
      <div className="bg-white/50 p-4 rounded-2xl border border-dashed border-blue-300 text-center mb-8">
        <p className="text-blue-700 text-sm font-medium">
          <i className="fas fa-lightbulb mr-2"></i>
          Finish the story and games to earn digital stars!
        </p>
      </div>
    </div>
  );
};

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  icon: string;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center min-w-[3.5rem] h-14 rounded-full transition-all ${
      active ? 'bg-blue-600 text-white shadow-lg scale-110' : 'text-gray-400 hover:bg-blue-50'
    }`}
  >
    <i className={`fas ${icon} text-lg mb-0.5`}></i>
    <span className="text-[9px] font-bold uppercase">{label}</span>
  </button>
);

export default App;
