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
  }
]
