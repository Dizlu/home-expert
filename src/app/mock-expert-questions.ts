import uuid from 'uuid/v1';

import { ExpertQuestion } from './expert-question';

export const QUESTIONS: ExpertQuestion[] = [
  {  text: 'Jaka jest dlugość twojej działki?', id: uuid(), answer: '' },
  {  text: 'Jaka jest szerokość twojej działki?', id: uuid(), answer: '' },
  {  text: 'Ile masz samochodów?', id: uuid(), answer: '' },
  {  text: 'Czy pracujesz z domu?', id: uuid(), answer: '' },
  {  text: 'Czy w rodzinie są osoby niepełnosprawne?', id: uuid(), answer: '' },
  {  text: 'Czy dbasz o ekologię?', id: uuid(), answer: '' },
  {  text: 'Czy śledzisz trendy mody?', id: uuid(), answer: '' },
  {  text: 'Czy pracujesz z domu?', id: uuid(), answer: '' },
  {  text: 'Czy posiadasz zwierzęta?', id: uuid(), answer: '' },
  {  text: 'Ile masz dzieci?', id: uuid(), answer: '' },
]