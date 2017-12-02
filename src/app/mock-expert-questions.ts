import uuid from 'uuid/v1';

import { ExpertQuestion } from './expert-question';

export const QUESTIONS: ExpertQuestion[] = [
  {  text: 'Jaka jest dlugość twojej działki?', id: uuid(), answer: 100, type: 'number' },
  {  text: 'Jaka jest szerokość twojej działki?', id: uuid(), answer: 100, type: 'number' },
  {  text: 'Ile masz samochodów?', id: uuid(), answer: 0, type: 'number' },
  {  text: 'Czy pracujesz z domu?', id: uuid(), answer: false, type: 'boolean' },
  {  text: 'Czy w rodzinie są osoby niepełnosprawne?', id: uuid(), answer: false, type: 'boolean' },
  {  text: 'Czy dbasz o ekologię?', id: uuid(), answer: false, type: 'boolean' },
  {  text: 'Czy śledzisz trendy mody?', id: uuid(), answer: false, type: 'boolean' },
  {  text: 'Czy pracujesz z domu?', id: uuid(), answer: false, type: 'boolean' },
  {  text: 'Czy posiadasz zwierzęta?', id: uuid(), answer: false, type: 'boolean' },
  {  text: 'Czy mieszkasz z żoną?', id: uuid(), answer: false, type: 'boolean' },
  {  text: 'Ile masz dzieci?', id: uuid(), answer: 0, type: 'number' },
]