export type IQuetionsWorking = {
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

export type IItemsWorking = {
  citizenship: string;
  hasQuota: string;
  motives: string;
  name: string;
  surname: string;
  patronymic: string;
};

export const questionsWorking: IQuetionsWorking = {
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
};

export const itemsWorking: IItemsWorking = {
  citizenship: '',
  hasQuota: '',
  motives: '',
  name: '',
  surname: '',
  patronymic: ''
};