export type IQuetionsRVP = {
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

export type IItemsRVP = {
  citizenship: string;
  hasQuota: string;
  motives: string;
  name: string;
  surname: string;
  patronymic: string;
};

export const questionsRVP: IQuetionsRVP = {
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

export const itemsRVP: IItemsRVP = {
  citizenship: '',
  hasQuota: '',
  motives: '',
  name: '',
  surname: '',
  patronymic: ''
};