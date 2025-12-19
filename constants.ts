
import { FoodItem, DialogueLine, PhonicsWord, QuizQuestion, StoryNode } from './types';

export const FOOD_ITEMS: FoodItem[] = [
  { id: '1', name: 'noodles', price: 16, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop' },
  { id: '2', name: 'cake', price: 10, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop' },
  { id: '3', name: 'bread', price: 8.5, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop' },
  { id: '4', name: 'egg', price: 2.5, image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop' },
  { id: '5', name: 'juice', price: 8, image: 'https://images.unsplash.com/photo-1600266175161-cfaa048b4a27?w=400&h=400&fit=crop' },
  { id: '6', name: 'milk', price: 5, image: 'https://images.unsplash.com/photo-1563636619-e910f01859ec?w=400&h=400&fit=crop' },
];

export const DIALOGUE: DialogueLine[] = [
  { speaker: 'Mum', text: 'Breakfast time!' },
  { speaker: 'Son', text: "OK, Mum. I'd like some bread and eggs, please." },
  { speaker: 'Mum', text: 'Here you are. Have some milk too.' },
  { speaker: 'Son', text: 'Thanks.' },
];

export const CHANT_LINES = [
  "Eat your egg. Eat, eat, eat!",
  "Drink your milk. Drink, drink, drink!",
  "Cut your bread. Cut, cut, cut!",
  "Eat your noodles. Eat, eat, eat!",
  "Drink your juice. Drink, drink, drink!",
  "Share the cake. Yummy!"
];

export const PHONICS_WORDS: PhonicsWord[] = [
  { word: 'not', type: 'o' },
  { word: 'note', type: 'o-e' },
  { word: 'hot', type: 'o' },
  { word: 'home', type: 'o-e' },
  { word: 'John', type: 'o' },
  { word: 'Jones', type: 'o-e' },
  { word: 'box', type: 'o' },
  { word: 'bone', type: 'o-e' },
  { word: 'cone', type: 'o-e' },
  { word: 'joke', type: 'o-e' },
  { word: 'hope', type: 'o-e' },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: "I'd like some _____, please.",
    options: ["bread", "cake", "juice"],
    answer: "bread",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop"
  },
  {
    id: 'q2',
    question: "What do you want for breakfast?",
    options: ["egg", "pencil", "bag"],
    answer: "egg",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop"
  },
  {
    id: 'q3',
    question: "Drink your _____.",
    options: ["noodles", "milk", "cake"],
    answer: "milk",
    image: "https://images.unsplash.com/photo-1563636619-e910f01859ec?w=400&h=400&fit=crop"
  }
];

export const STORY_NODES: StoryNode[] = [
  {
    id: 'start',
    text: "Zip is hungry. It's time for breakfast! What should Zip eat?",
    image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=600&h=400&fit=crop",
    choices: [
      { text: "Have some bread", nextNodeId: 'eat_bread', feedback: "Yummy! Bread is good." },
      { text: "Have some noodles", nextNodeId: 'eat_noodles', feedback: "Slurp! Noodles are long." }
    ]
  },
  {
    id: 'eat_bread',
    text: "Zip eats the bread. Now Zip is thirsty. What should Zip drink?",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    choices: [
      { text: "Drink some milk", nextNodeId: 'finish_milk' },
      { text: "Drink some juice", nextNodeId: 'finish_juice' }
    ]
  },
  {
    id: 'eat_noodles',
    text: "Zip loves noodles! But Zip wants an egg too. Where is the egg?",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop",
    choices: [
      { text: "Look in the box", nextNodeId: 'found_egg' },
      { text: "Look on the table", nextNodeId: 'found_egg' }
    ]
  },
  {
    id: 'finish_milk',
    text: "Zip drinks the milk. He is very happy! 'Thank you, Mum!'",
    image: "https://images.unsplash.com/photo-1563636619-e910f01859ec?w=600&h=400&fit=crop",
    choices: [
      { text: "Play again", nextNodeId: 'start' }
    ]
  },
  {
    id: 'finish_juice',
    text: "The orange juice is sweet! Zip is ready for school now.",
    image: "https://images.unsplash.com/photo-1600266175161-cfaa048b4a27?w=600&h=400&fit=crop",
    choices: [
      { text: "Play again", nextNodeId: 'start' }
    ]
  },
  {
    id: 'found_egg',
    text: "Found it! Zip eats the egg and noodles. What a great breakfast!",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&h=400&fit=crop",
    choices: [
      { text: "Play again", nextNodeId: 'start' }
    ]
  }
];
