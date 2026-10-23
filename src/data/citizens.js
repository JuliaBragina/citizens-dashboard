export const citizens = [
  {
    "id": "1",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "anna.ivanova@example.com",
    "maritalStatus": "Замужем",
    "education": "Высшее",
    "occupation": "Бухгалтер",
    "employer": "ООО «Вектор»",
    "department": "Финансовый отдел",
    "workFormat": "Офис",
    "employmentStart": "2019-03-11",
    "previousEmployer": "ООО «Спектр»",
    "fullName": "Иванова Анна Сергеевна",
    "birthDate": "1992-04-15",
    "region": "Москва",
    "status": "active",
    "family": [
      {
        "fullName": "Иванов Алексей Петрович",
        "relationship": "Супруг",
        "birthDate": "1990-07-12",
        "id": "1-family-1",
        "citizenId": "1"
      },
      {
        "fullName": "Иванова Софья Алексеевна",
        "relationship": "Дочь",
        "birthDate": "2018-05-09",
        "id": "1-family-2",
        "citizenId": "1"
      }
    ],
    "educationRecords": [
      {
        "institution": "Учебный институт «Перспектива»",
        "level": "Высшее",
        "specialty": "Экономика",
        "startYear": 2009,
        "endYear": 2014,
        "id": "1-education-1",
        "citizenId": "1"
      }
    ],
    "work": [
      {
        "employer": "ООО «Вектор»",
        "occupation": "Бухгалтер",
        "department": "Финансовый отдел",
        "workFormat": "Офис",
        "startDate": "2019-03-11",
        "endDate": null,
        "id": "1-work-0",
        "citizenId": "1"
      },
      {
        "employer": "ООО «Спектр»",
        "id": "1-work-1",
        "citizenId": "1"
      }
    ]
  },
  {
    "id": "2",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "mikhail.petrov@example.com",
    "maritalStatus": "Женат",
    "education": "Высшее",
    "occupation": "Инженер",
    "employer": "ООО «Север»",
    "department": "Технический отдел",
    "workFormat": "Гибридный",
    "employmentStart": "2017-08-21",
    "previousEmployer": "АО «Горизонт»",
    "fullName": "Петров Михаил Андреевич",
    "birthDate": "1985-09-23",
    "region": "Санкт-Петербург",
    "status": "active",
    "family": [
      {
        "fullName": "Петрова Ольга Николаевна",
        "relationship": "Супруга",
        "birthDate": "1987-03-21",
        "id": "2-family-1",
        "citizenId": "2"
      }
    ],
    "educationRecords": [
      {
        "institution": "Технический институт «Север»",
        "level": "Высшее",
        "specialty": "Инженерное дело",
        "startYear": 2002,
        "endYear": 2007,
        "id": "2-education-1",
        "citizenId": "2"
      }
    ],
    "work": [
      {
        "employer": "ООО «Север»",
        "occupation": "Инженер",
        "department": "Технический отдел",
        "workFormat": "Гибридный",
        "startDate": "2017-08-21",
        "endDate": null,
        "id": "2-work-0",
        "citizenId": "2"
      },
      {
        "employer": "АО «Горизонт»",
        "id": "2-work-1",
        "citizenId": "2"
      }
    ]
  },
  {
    "id": "3",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "elena.smirnova@example.com",
    "maritalStatus": "Замужем",
    "education": "Высшее",
    "occupation": "Преподаватель",
    "employer": "Учебный центр «Знание»",
    "department": "Учебный отдел",
    "workFormat": "Офис",
    "employmentStart": "2012-09-01",
    "previousEmployer": "Школа «Развитие»",
    "fullName": "Смирнова Елена Викторовна",
    "birthDate": "1978-12-07",
    "region": "Казань",
    "status": "archived",
    "family": [
      {
        "fullName": "Смирнов Виктор Олегович",
        "relationship": "Супруг",
        "birthDate": "1976-11-03",
        "id": "3-family-1",
        "citizenId": "3"
      }
    ],
    "educationRecords": [
      {
        "institution": "Педагогический институт «Знание»",
        "level": "Высшее",
        "specialty": "Педагогика",
        "startYear": 1995,
        "endYear": 2000,
        "id": "3-education-1",
        "citizenId": "3"
      }
    ],
    "work": [
      {
        "employer": "Учебный центр «Знание»",
        "occupation": "Преподаватель",
        "department": "Учебный отдел",
        "workFormat": "Офис",
        "startDate": "2012-09-01",
        "endDate": null,
        "id": "3-work-0",
        "citizenId": "3"
      },
      {
        "employer": "Школа «Развитие»",
        "id": "3-work-1",
        "citizenId": "3"
      }
    ]
  },
  {
    "id": "4",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "dmitry.kozlov@example.com",
    "maritalStatus": "Не женат",
    "education": "Среднее профессиональное",
    "occupation": "Разработчик",
    "employer": "ООО «Код»",
    "department": "Отдел разработки",
    "workFormat": "Удалённый",
    "employmentStart": "2023-06-05",
    "previousEmployer": null,
    "fullName": "Козлов Дмитрий Игоревич",
    "birthDate": "2001-06-30",
    "region": "Москва",
    "status": "active",
    "family": [],
    "educationRecords": [
      {
        "institution": "Колледж цифровых технологий",
        "level": "Среднее профессиональное",
        "specialty": "Программирование",
        "startYear": 2017,
        "endYear": 2021,
        "id": "4-education-1",
        "citizenId": "4"
      }
    ],
    "work": [
      {
        "employer": "ООО «Код»",
        "occupation": "Разработчик",
        "department": "Отдел разработки",
        "workFormat": "Удалённый",
        "startDate": "2023-06-05",
        "endDate": null,
        "id": "4-work-0",
        "citizenId": "4"
      }
    ]
  },
  {
    "id": "5",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "maria.volkova@example.com",
    "maritalStatus": "Не замужем",
    "education": "Высшее",
    "occupation": "Дизайнер",
    "employer": "Студия «Форма»",
    "department": "Отдел дизайна",
    "workFormat": "Удалённый",
    "employmentStart": "2021-02-15",
    "previousEmployer": "Студия «Линия»",
    "fullName": "Волкова Мария Алексеевна",
    "birthDate": "1996-02-18",
    "region": "Екатеринбург",
    "status": "archived",
    "family": [
      {
        "fullName": "Волкова Ирина Павловна",
        "relationship": "Мать",
        "birthDate": "1970-08-16",
        "id": "5-family-1",
        "citizenId": "5"
      }
    ],
    "educationRecords": [
      {
        "institution": "Институт искусств «Палитра»",
        "level": "Высшее",
        "specialty": "Графический дизайн",
        "startYear": 2013,
        "endYear": 2017,
        "id": "5-education-1",
        "citizenId": "5"
      },
      {
        "institution": "Школа «Практика»",
        "level": "Дополнительное",
        "specialty": "Дизайн интерфейсов",
        "startYear": 2020,
        "endYear": 2021,
        "id": "5-education-2",
        "citizenId": "5"
      }
    ],
    "work": [
      {
        "employer": "Студия «Форма»",
        "occupation": "Дизайнер",
        "department": "Отдел дизайна",
        "workFormat": "Удалённый",
        "startDate": "2021-02-15",
        "endDate": null,
        "id": "5-work-0",
        "citizenId": "5"
      },
      {
        "employer": "Студия «Линия»",
        "id": "5-work-1",
        "citizenId": "5"
      }
    ]
  },
  {
    "id": "6",
    "fullName": "Соколов Алексей Игоревич",
    "birthDate": "1950-01-01",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen6@example.com",
    "maritalStatus": "Не женат",
    "region": "Москва",
    "status": "archived",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "7",
    "fullName": "Соколова Ольга Игоревна",
    "birthDate": "1952-02-02",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen7@example.com",
    "maritalStatus": "Не замужем",
    "region": "Санкт-Петербург",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "8",
    "fullName": "Попов Сергей Викторович",
    "birthDate": "1954-03-03",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen8@example.com",
    "maritalStatus": "Не женат",
    "region": "Казань",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "9",
    "fullName": "Попова Ирина Викторовна",
    "birthDate": "1956-04-04",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen9@example.com",
    "maritalStatus": "Не замужем",
    "region": "Екатеринбург",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "10",
    "fullName": "Лебедев Андрей Николаевич",
    "birthDate": "1958-05-05",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen10@example.com",
    "maritalStatus": "Не женат",
    "region": "Самара",
    "status": "archived",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "11",
    "fullName": "Лебедева Наталья Николаевна",
    "birthDate": "1960-06-06",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen11@example.com",
    "maritalStatus": "Не замужем",
    "region": "Новосибирск",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "12",
    "fullName": "Новиков Павел Сергеевич",
    "birthDate": "1962-07-07",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen12@example.com",
    "maritalStatus": "Не женат",
    "region": "Москва",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "13",
    "fullName": "Новикова Дарья Сергеевна",
    "birthDate": "1964-08-08",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen13@example.com",
    "maritalStatus": "Не замужем",
    "region": "Санкт-Петербург",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "14",
    "fullName": "Морозов Илья Андреевич",
    "birthDate": "1966-09-09",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen14@example.com",
    "maritalStatus": "Не женат",
    "region": "Казань",
    "status": "archived",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "15",
    "fullName": "Морозова Полина Андреевна",
    "birthDate": "1968-10-10",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen15@example.com",
    "maritalStatus": "Не замужем",
    "region": "Екатеринбург",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "16",
    "fullName": "Егоров Николай Павлович",
    "birthDate": "1970-11-11",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen16@example.com",
    "maritalStatus": "Не женат",
    "region": "Самара",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "17",
    "fullName": "Егорова Татьяна Павловна",
    "birthDate": "1972-12-12",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen17@example.com",
    "maritalStatus": "Не замужем",
    "region": "Новосибирск",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "18",
    "fullName": "Кузнецов Артём Олегович",
    "birthDate": "1974-01-13",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen18@example.com",
    "maritalStatus": "Не женат",
    "region": "Москва",
    "status": "archived",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "19",
    "fullName": "Кузнецова Алина Олеговна",
    "birthDate": "1976-02-14",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen19@example.com",
    "maritalStatus": "Не замужем",
    "region": "Санкт-Петербург",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "20",
    "fullName": "Орлов Максим Дмитриевич",
    "birthDate": "1978-03-15",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen20@example.com",
    "maritalStatus": "Не женат",
    "region": "Казань",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "21",
    "fullName": "Орлова Ксения Дмитриевна",
    "birthDate": "1980-04-16",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen21@example.com",
    "maritalStatus": "Не замужем",
    "region": "Екатеринбург",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "22",
    "fullName": "Макаров Денис Юрьевич",
    "birthDate": "1982-05-17",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen22@example.com",
    "maritalStatus": "Не женат",
    "region": "Самара",
    "status": "archived",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "23",
    "fullName": "Макарова Светлана Юрьевна",
    "birthDate": "1984-06-18",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen23@example.com",
    "maritalStatus": "Не замужем",
    "region": "Новосибирск",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "24",
    "fullName": "Захаров Роман Алексеевич",
    "birthDate": "1986-07-19",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen24@example.com",
    "maritalStatus": "Не женат",
    "region": "Москва",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "25",
    "fullName": "Захарова Вера Алексеевна",
    "birthDate": "1988-08-20",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen25@example.com",
    "maritalStatus": "Не замужем",
    "region": "Санкт-Петербург",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "26",
    "fullName": "Белов Иван Петрович",
    "birthDate": "1990-09-21",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen26@example.com",
    "maritalStatus": "Не женат",
    "region": "Казань",
    "status": "archived",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "27",
    "fullName": "Белова Екатерина Петровна",
    "birthDate": "1992-10-22",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen27@example.com",
    "maritalStatus": "Не замужем",
    "region": "Екатеринбург",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "28",
    "fullName": "Соловьёв Кирилл Борисович",
    "birthDate": "1994-11-23",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen28@example.com",
    "maritalStatus": "Не женат",
    "region": "Самара",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "29",
    "fullName": "Соловьёва Елизавета Борисовна",
    "birthDate": "1996-12-24",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen29@example.com",
    "maritalStatus": "Не замужем",
    "region": "Новосибирск",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "30",
    "fullName": "Васильев Олег Иванович",
    "birthDate": "1998-01-25",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen30@example.com",
    "maritalStatus": "Не женат",
    "region": "Москва",
    "status": "archived",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "31",
    "fullName": "Васильева Надежда Ивановна",
    "birthDate": "2000-02-26",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen31@example.com",
    "maritalStatus": "Не замужем",
    "region": "Санкт-Петербург",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "32",
    "fullName": "Зайцев Виктор Михайлович",
    "birthDate": "2002-03-27",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen32@example.com",
    "maritalStatus": "Не женат",
    "region": "Казань",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "33",
    "fullName": "Зайцева Валерия Михайловна",
    "birthDate": "2004-04-01",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen33@example.com",
    "maritalStatus": "Не замужем",
    "region": "Екатеринбург",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "34",
    "fullName": "Павлов Юрий Александрович",
    "birthDate": "2006-05-02",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen34@example.com",
    "maritalStatus": "Не женат",
    "region": "Самара",
    "status": "archived",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "35",
    "fullName": "Павлова Людмила Александровна",
    "birthDate": "2008-06-03",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen35@example.com",
    "maritalStatus": "Не замужем",
    "region": "Новосибирск",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "36",
    "fullName": "Семёнов Григорий Васильевич",
    "birthDate": "2010-07-04",
    "gender": "Мужской",
    "citizenship": "Россия",
    "email": "citizen36@example.com",
    "maritalStatus": "Не женат",
    "region": "Москва",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  },
  {
    "id": "37",
    "fullName": "Семёнова Софья Васильевна",
    "birthDate": "2012-08-05",
    "gender": "Женский",
    "citizenship": "Россия",
    "email": "citizen37@example.com",
    "maritalStatus": "Не замужем",
    "region": "Санкт-Петербург",
    "status": "active",
    "family": [],
    "educationRecords": [],
    "work": []
  }
]
