
export enum LessonSection {
  TALK = 'TALK',
  LEARN = 'LEARN',
  DO = 'DO',
  SPELL = 'SPELL',
  GAMES = 'GAMES',
  STORY = 'STORY'
}

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface DialogueLine {
  speaker: 'Mum' | 'Son' | 'Zip' | 'Zap';
  text: string;
}

export interface PhonicsWord {
  word: string;
  type: 'o' | 'o-e';
  pair?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
  image?: string;
}

export interface StoryNode {
  id: string;
  text: string;
  image: string;
  choices: {
    text: string;
    nextNodeId: string;
    feedback?: string;
  }[];
}
