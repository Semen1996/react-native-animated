const RVPTemplate = {
  isFill: false,
  length: 6,
  progress: 0,
  procent: 0,
  id: '',
  titleForm: 'Заявление о выдаче РВП',
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