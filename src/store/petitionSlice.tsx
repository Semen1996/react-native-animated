import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Petition = {
  readonly id: string;
  isFill: boolean;
  progress: number;
  length: number;
  titleForm: string;
  citizenship: string;
  hasQuota: string;
  motives: string;
  name: string;
  surname: string;
  patronymic: string;
};

type PetitionsState = {
  currentPetition: string;
  list: Petition[];
};

const initialState: PetitionsState = {
  currentPetition: '',
  list: [],
};

const petitionSlice = createSlice({
  name: 'petitions',
  initialState,
  reducers: {
    addPetition(state) {
      const idPetition = new Date().toISOString();
      console.log('v')
      state.list.push({
        isFill: false,
        length: 6,
        progress: 0,
        id: idPetition,
        titleForm: '',
        citizenship: '',
        hasQuota: '',
        motives: '',
        name: '',
        surname: '',
        patronymic: '',
      });

      state.currentPetition = idPetition;
    },
    addPetitionItem<K extends keyof Petition, V extends Petition[K]>(
      state: PetitionsState,
      action: PayloadAction<{id: string; item: K; value: V}>,
    ) {
      const petition = state.list.find(
        petition => petition.id === action.payload.id,
      );
      if (petition) {
        petition[action.payload.item] = action.payload.value;
        petition.progress++;
        if(petition.progress === petition.length) petition.isFill = true;
      } else {
        console.log('Вызвать метод addPetition')
      }
    },
  },
});

export const {addPetition, addPetitionItem} = petitionSlice.actions;

export default petitionSlice.reducer;
