import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IItemsRVP, IQuetionsRVP, itemsRVP, questionsRVP } from '../utils/RVPFormTemp';
import { itemsWorking, questionsWorking } from '../utils/WorkingFormTemp';


type IQuetionsAny = {
  [key: string]: {
    title: string;
    screen: string;
    isFill: boolean;
  };
};

type IItemsAny = {
  [key: string]: string;
};

type IQuetions = IQuetionsRVP | IQuetionsAny;
type IItems = IItemsRVP | IItemsAny;

export type IPetition = {
  readonly id: string;
  isFill: boolean;
  progress: number;
  length: number;
  procent: number;
  update: string;
  titleForm: string;
  questions: IQuetions;
  items: IItems;
};

type PetitionsState = {
  currentID: string;
  list: IPetition[];
};

const initialState: PetitionsState = {
  currentID: '',
  list: [],
};

function countProgress(questions: IQuetions): number {
  let progress = 0;
  for (let key in questions) {
    if (questions[key as keyof IQuetions].isFill) progress++;
  }
  return progress
}

function countUpdateTime(): string {
  const date = new Date();
  return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()+1}`
}

const petitionSlice = createSlice({
  name: 'petitions',
  initialState,
  reducers: {
    addPetition(state: PetitionsState,
      action: PayloadAction<{titleForm: string}>) {
      const idPetition = new Date().toISOString();

      const titleForm = action.payload.titleForm;
      let questions = {};
      let items = {};

      if(titleForm === 'Заявление о выдаче РВП') {
        questions = questionsRVP;
        items = itemsRVP;
      } else if(titleForm === 'Оформление патента на работу') {
        questions = questionsWorking;
        items = itemsWorking;
      }

      const newPetition: IPetition = {
        isFill: false,
        length: Object.keys(questions).length,
        progress: 0,
        procent: 0,
        id: idPetition,
        update: '',
        titleForm: titleForm,
        questions,
        items
      };

      state.list.push(newPetition);
      state.currentID = idPetition;
    },


    changePetition<K extends keyof IQuetions>(state: PetitionsState, action: PayloadAction<{id: string; question: K; isFill: boolean}>) {
      const id = action.payload.id;
      const question = action.payload.question;
      const isFill = action.payload.isFill;
      const petition = state.list.find(p => p.id === id);

      if (petition) {
        petition.questions[question].isFill = isFill;
        petition.progress = countProgress(petition.questions);
        petition.procent = Math.floor(petition.length / petition.progress* 100);
        petition.isFill = (petition.procent === 100);
      } else {
        console.log('Вызвать метод addPetition');
      }
    },

    changeItem<K extends keyof IItems, V extends IItems[K]>(state: PetitionsState, action: PayloadAction<{id: string; item: K, value: V}>) {
      const id = action.payload.id;
      const item = action.payload.item;
      const value = action.payload.value;
      const petition = state.list.find(p => p.id === id);
      if (petition) {
        petition.items[item] = value;
        petition.update = countUpdateTime();
      }
    }
  },
});

export const {addPetition, changePetition, changeItem} = petitionSlice.actions;

export default petitionSlice.reducer;
