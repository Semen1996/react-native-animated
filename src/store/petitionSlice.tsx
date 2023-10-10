import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type IQuetionsRVP = {
  citizenship: {
    title: string;
    screen: string;
    value: string;
    isFill: boolean;
  };
  hasQuota: {
    title: string;
    screen: string;
    value: string;
    isFill: boolean;
  };
  motives: {
    title: string;
    screen: string;
    value: string;
    isFill: boolean;
  };
  name: {
    title: string;
    screen: string;
    value: string;
    isFill: boolean;
  };
  surname: {
    title: string;
    screen: string;
    value: string;
    isFill: boolean;
  };
  patronymic: {
    title: string;
    screen: string;
    value: string;
    isFill: boolean;
  };
};

type IQuetions = IQuetionsRVP;

export type IPetition = {
  readonly id: string;
  isFill: boolean;
  progress: number;
  length: number;
  titleForm: string;
  questions: IQuetions;
};

type PetitionsState = {
  currentPetition: IPetition | undefined;
  list: IPetition[];
};

const initialState: PetitionsState = {
  currentPetition: undefined,
  list: [],
};

function countProgress(questions: IQuetions): number {
  let progress = 0;
  for (let key in questions) {
    if (questions[key as keyof IQuetions].isFill) progress++;
  }
  return progress
}

const petitionSlice = createSlice({
  name: 'petitions',
  initialState,
  reducers: {
    addPetition(state: PetitionsState,
      action: PayloadAction<{titleForm: string}>) {
      const idPetition = new Date().toISOString();
      const newPetition = {
        isFill: false,
        length: 6,
        progress: 0,
        id: idPetition,
        titleForm: action.payload.titleForm,
        questions: {
          citizenship: {
            title: 'Текущее гражданство',
            screen: 'Сitizenship',
            isFill: false,
            value: '',
          },
          hasQuota: {
            title: 'Подача заявления с квотой или без',
            screen: 'IsQuota',
            isFill: false,
            value: '',
          },
          motives: {
            title: 'Мотивы получения РВП',
            screen: 'Motives',
            isFill: false,
            value: '',
          },
          name: {
            title: 'ФИО',
            screen: 'FIO',
            value: '',
            isFill: false,
          },
          surname: {
            title: 'ФИО',
            screen: 'FIO',
            value: '',
            isFill: false,
          },
          patronymic: {
            title: 'ФИО',
            screen: 'FIO',
            value: '',
            isFill: true,
          },
        },
      }
      state.list.push(newPetition);

      state.currentPetition = newPetition;
    },

    addPetitionItem<K extends keyof IQuetions, V extends IQuetions[K]['title']>(
      state: PetitionsState,
      action: PayloadAction<{id: string; item: K; value: V}>,
    ) {
      const id = action.payload.id;
      const item = action.payload.item;
      const value = action.payload.value;
      const petition = state.list.find(p => p.id === id);

      if (petition) {
        petition.questions[item].value = value;
        petition.questions[item].isFill = true;
        petition.progress = countProgress(petition.questions);
      } else {
        console.log('Вызвать метод addPetition');
      }
    },

    changePetitionItem<K extends keyof IQuetions, V extends IQuetions[K]['title']>(
      state: PetitionsState,
      action: PayloadAction<{id: string; item: K; value: V}>,
    ) {
      const id = action.payload.id;
      const item = action.payload.item;
      const value = action.payload.value;
      const petition = state.list.find(p => p.id === id);

      if (petition) {
        petition.questions[item].value = value;
        petition.questions[item].isFill = false;
        petition.progress = countProgress(petition.questions);
      } else {
        console.log('Вызвать метод addPetition');
      }
    },
    fillPetitionItem<K extends keyof IQuetions>(
      state: PetitionsState,
      action: PayloadAction<{id: string; item: K}>,
    ) {
      const id = action.payload.id;
      const item = action.payload.item;
      const petition = state.list.find(p => p.id === id);

      if (petition) {
        petition.questions[item].isFill = true;
        petition.progress = countProgress(petition.questions);
      } else {
        console.log('Вызвать метод addPetition');
      }
    },
  },
});

export const {addPetition, addPetitionItem, fillPetitionItem, changePetitionItem} = petitionSlice.actions;

export default petitionSlice.reducer;
