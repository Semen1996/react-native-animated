import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type IQuetionsRVP = {
  citizenship: {
    title: string;
    screen: 'Сitizenship';
    isFill: boolean;
  };
  hasQuota: {
    title: string;
    screen: 'IsQuota';
    isFill: boolean;
  };
  motives: {
    title: string;
    screen: 'Motives';
    isFill: boolean;
  };
  FIO: {
    title: string;
    screen: 'FIO';
    isFill: boolean;
  };
};

type IQuetions = IQuetionsRVP;

type IItemsAny = {
  [key: string]: string | boolean;
};

type IItemsRVP = {
  update: string,
  citizenship: string;
  hasQuota: string;
  motives: string;
  name: string;
  surname: string;
  patronymic: string;
};

type IItems = IItemsRVP;


export type IPetition = {
  readonly id: string;
  isFill: boolean;
  progress: number;
  length: number;
  procent: number;
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
      const newPetition: IPetition = {
        isFill: false,
        length: 4,
        progress: 0,
        procent: 0,
        id: idPetition,
        titleForm: action.payload.titleForm,
        questions: {
          citizenship: {
            title: 'Текущее гражданство',
            screen: 'Сitizenship',
            isFill: false,
          },
          hasQuota: {
            title: 'Подача заявления с квотой или без',
            screen: 'IsQuota',
            isFill: false,
          },
          motives: {
            title: 'Мотивы получения РВП',
            screen: 'Motives',
            isFill: false,
          },
          FIO: {
            title: 'ФИО',
            screen: 'FIO',
            isFill: false,
          },
        },
        items: {
          update: '',
          citizenship: '',
          hasQuota: '',
          motives: '',
          name: '',
          surname: '',
          patronymic: ''
        },
      }
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
        petition.items.update = countUpdateTime();
      }
    }
  },
});

export const {addPetition, changePetition, changeItem} = petitionSlice.actions;

export default petitionSlice.reducer;
