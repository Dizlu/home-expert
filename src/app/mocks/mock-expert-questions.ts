import uuid from 'uuid/v1';

import { ExpertQuestion } from '../expert-question';

export const QUESTIONS: ExpertQuestion[] = [
  {  text: 'Jaka jest dlugość twojej działki?[m]', id: uuid(), answer: 40, type: 'number' },
  {  text: 'Jaka jest szerokość twojej działki?[m]', id: uuid(), answer: 40, type: 'number' },
  {  text: 'Ile chcesz mieć w domu samochodów?', id: uuid(), answer: 0, type: 'number' },
  {  text: 'Czy pracujesz z domu?', id: uuid(), answer: false, type: 'boolean' },
  {  text: 'Czy w rodzinie są osoby niepełnosprawne?', id: uuid(), answer: false, type: 'boolean' },
  //{  text: 'Czy dbasz o ekologię?', id: uuid(), answer: false, type: 'boolean' },
  {  text: 'Czy chcesz dom w nowoczesnej bryle?', id: uuid(), answer: false, type: 'boolean' },
  //{  text: 'Czy posiadasz zwierzęta?', id: uuid(), answer: false, type: 'boolean' },
  //{  text: 'Czy mieszkasz z żoną?', id: uuid(), answer: false, type: 'boolean' },
  {  text: 'Ile masz dzieci?', id: uuid(), answer: 0, type: 'number' },
]