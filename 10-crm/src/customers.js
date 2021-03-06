const CUSTOMERS = [
  {
    id: 0,
    firstName: "Liliana",
    lastName: "Albert",
    email: "albertmayo@bitrex.com",
    invoices: [
      {
        id: "aec3a248-e6bf-4d62-a190-c41037b145c4",
        amount: 1808,
        date: "2003-08-23",
      },
      {
        id: "6bbc4121-a0e0-49e0-ac75-7fd5f4fa9e75",
        amount: 1908,
        date: "1996-07-06",
      },
    ],
  },
  {
    id: 1,
    firstName: "Beverley",
    lastName: "Daphne",
    email: "daphnemayo@bitrex.com",
    invoices: [
      {
        id: "f660f0dc-ac09-4ccd-9d20-84836fe867bf",
        amount: 670,
        date: "2000-05-10",
      },
    ],
  },
  {
    id: 2,
    firstName: "Ruth",
    lastName: "Madden",
    email: "maddenmayo@bitrex.com",
    invoices: [
      {
        id: "3edb9970-a5b8-4dfc-89cd-3907d68f4007",
        amount: 1181,
        date: "2021-03-26",
      },
      {
        id: "be604783-10ff-4b39-ba79-b0ef43c94af6",
        amount: 785,
        date: "1977-10-16",
      },
      {
        id: "09d88851-a5b6-4890-8ef1-46baf4dc7475",
        amount: 1503,
        date: "1978-02-17",
      },
    ],
  },
  {
    id: 3,
    firstName: "Marcy",
    lastName: "Melody",
    email: "melodymayo@bitrex.com",
    invoices: [
      {
        id: "3db51c7c-819a-48af-a078-37c9812b2020",
        amount: 977,
        date: "1978-08-09",
      },
      {
        id: "a65c671d-e380-4700-8716-e95d1cc50be2",
        amount: 702,
        date: "2004-10-09",
      },
      {
        id: "174a7d47-7b51-418e-a3d6-a369d5efb9d7",
        amount: 966,
        date: "1986-01-22",
      },
      {
        id: "1f874f9b-dff0-4392-b04e-6d21205f7fa4",
        amount: 1822,
        date: "1980-11-11",
      },
    ],
  },
  {
    id: 4,
    firstName: "Margarita",
    lastName: "Waller",
    email: "wallermayo@bitrex.com",
    invoices: [
      {
        id: "cf9a8101-7b31-4015-827a-8c330539871c",
        amount: 621,
        date: "2016-04-12",
      },
      {
        id: "22e1e5b2-ef3e-4b91-9869-170c110cb401",
        amount: 615,
        date: "2014-08-11",
      },
      {
        id: "93de365a-9126-49cb-8e94-049b0afd4b91",
        amount: 1253,
        date: "1975-11-11",
      },
      {
        id: "98fbf06e-5551-4ec3-8511-5900716e1539",
        amount: 926,
        date: "1983-07-25",
      },
    ],
  },
  {
    id: 5,
    firstName: "Laurie",
    lastName: "Rowland",
    email: "rowlandmayo@bitrex.com",
    invoices: [
      {
        id: "9a2c14c7-d1a5-4de0-9266-5c759f33d288",
        amount: 427,
        date: "2021-06-19",
      },
    ],
  },
  {
    id: 6,
    firstName: "Gwendolyn",
    lastName: "Reyna",
    email: "reynamayo@bitrex.com",
    invoices: [
      {
        id: "ee7747e4-017e-4362-a8c1-79cebb5ec28d",
        amount: 366,
        date: "1974-12-29",
      },
      {
        id: "946dd674-a0e0-4c1c-acf0-d5743948902a",
        amount: 1467,
        date: "1975-06-23",
      },
    ],
  },
  {
    id: 7,
    firstName: "Mccall",
    lastName: "Lori",
    email: "lorimayo@bitrex.com",
    invoices: [
      {
        id: "48033134-1ecc-411b-a44b-c574781e0e29",
        amount: 1329,
        date: "2020-05-03",
      },
      {
        id: "201376dd-6787-44ba-a1bb-89484bd428c5",
        amount: 1306,
        date: "1987-01-16",
      },
    ],
  },
  {
    id: 8,
    firstName: "Susie",
    lastName: "Milagros",
    email: "milagrosmayo@bitrex.com",
    invoices: [
      {
        id: "7719c76e-ce3c-4765-ba01-f37f78082d4c",
        amount: 277,
        date: "2012-09-03",
      },
      {
        id: "2d918b45-bb1e-4ee8-90ad-485d3d35e014",
        amount: 1529,
        date: "1982-06-22",
      },
      {
        id: "677d28bf-e0a4-408d-aad6-176d7d7cbcc3",
        amount: 1557,
        date: "1991-07-23",
      },
      {
        id: "9b68aea3-2317-4a84-b802-b7bea38ec1a5",
        amount: 629,
        date: "1984-03-01",
      },
    ],
  },
  {
    id: 9,
    firstName: "Dixon",
    lastName: "Eunice",
    email: "eunicemayo@bitrex.com",
    invoices: [
      {
        id: "b1a06c97-2b72-4c5b-b2e6-e8292331ffc0",
        amount: 911,
        date: "2010-06-21",
      },
    ],
  },
  {
    id: 10,
    firstName: "Coleen",
    lastName: "Levy",
    email: "levymayo@bitrex.com",
    invoices: [
      {
        id: "6c9f8c9c-71fd-43d7-90e4-47c4c4ccb00d",
        amount: 1010,
        date: "1990-01-01",
      },
      {
        id: "f024a990-4c03-4a7a-a06f-213da760a433",
        amount: 1019,
        date: "1997-10-13",
      },
      {
        id: "bff94775-fdc1-43de-a37a-f7801caef425",
        amount: 1360,
        date: "1993-02-23",
      },
    ],
  },
  {
    id: 11,
    firstName: "Mae",
    lastName: "Knapp",
    email: "knappmayo@bitrex.com",
    invoices: [
      {
        id: "0221149b-5398-4583-a9d7-6c98f0754899",
        amount: 1554,
        date: "1995-04-12",
      },
    ],
  },
  {
    id: 12,
    firstName: "Mcleod",
    lastName: "Tran",
    email: "tranmayo@bitrex.com",
    invoices: [
      {
        id: "f6b93e66-7cf8-4e9c-99ef-a0cb062f768f",
        amount: 1299,
        date: "1998-12-22",
      },
      {
        id: "787f6255-e237-4438-8a13-bc2f08e87edd",
        amount: 1620,
        date: "1980-06-18",
      },
      {
        id: "8edd76be-18ba-40fb-92e5-341c1a9f1827",
        amount: 1825,
        date: "1976-05-11",
      },
      {
        id: "d121e4c0-c58c-4820-b61a-0b3e308b7d0c",
        amount: 857,
        date: "2020-12-11",
      },
    ],
  },
  {
    id: 13,
    firstName: "Regina",
    lastName: "Kristina",
    email: "kristinamayo@bitrex.com",
    invoices: [
      {
        id: "3b8a8363-7666-48f5-94b6-5ff05f6eb9cf",
        amount: 1236,
        date: "2002-05-28",
      },
      {
        id: "423ae729-7ab6-472a-b4bb-6515fd95720e",
        amount: 1938,
        date: "2007-06-27",
      },
      {
        id: "6a745b1c-7536-44ef-ab80-0ca0797e5c8c",
        amount: 1857,
        date: "1975-07-21",
      },
      {
        id: "a29ce4cb-033c-4aac-8150-2476f80da595",
        amount: 952,
        date: "2013-09-05",
      },
    ],
  },
  {
    id: 14,
    firstName: "Bean",
    lastName: "Tamara",
    email: "tamaramayo@bitrex.com",
    invoices: [
      {
        id: "76397340-f672-4fd1-802f-02d06c89b108",
        amount: 714,
        date: "1974-03-19",
      },
      {
        id: "4e02111b-a57a-4bab-8632-19a3399cd4fc",
        amount: 1051,
        date: "2004-07-28",
      },
      {
        id: "f1e54956-d8c9-45f2-8fd1-1e45d167624b",
        amount: 1963,
        date: "1987-05-20",
      },
      {
        id: "62429b5e-99c4-46a3-ab45-3b7ed148b869",
        amount: 1143,
        date: "1997-12-10",
      },
      {
        id: "e2bcb7be-f0a9-488e-9364-8b2c75eff3d1",
        amount: 913,
        date: "1971-04-13",
      },
    ],
  },
  {
    id: 15,
    firstName: "Rush",
    lastName: "Contreras",
    email: "contrerasmayo@bitrex.com",
    invoices: [
      {
        id: "bec6b5f1-b1d5-44a8-99e3-aa42000f4117",
        amount: 616,
        date: "2018-04-22",
      },
      {
        id: "1197fd09-0c4e-4eef-ac5d-58f1d3e62e78",
        amount: 1036,
        date: "2004-10-17",
      },
      {
        id: "7eb5273a-eb45-48dc-a460-1cec95362f8c",
        amount: 1823,
        date: "2016-12-16",
      },
      {
        id: "f15c7a11-3d8d-43e8-b92c-b1876c7ee2d0",
        amount: 245,
        date: "1987-04-14",
      },
    ],
  },
  {
    id: 16,
    firstName: "Joy",
    lastName: "Twila",
    email: "twilamayo@bitrex.com",
    invoices: [
      {
        id: "588eb3bc-ce13-403d-8078-8cf14afa3b7a",
        amount: 1963,
        date: "2007-12-19",
      },
      {
        id: "8db19721-2a4d-4545-b72a-c2450e7a92c2",
        amount: 1771,
        date: "2001-01-09",
      },
      {
        id: "e3a47cfa-9ee4-4b30-b70a-5702aa1610aa",
        amount: 832,
        date: "1990-02-10",
      },
    ],
  },
  {
    id: 17,
    firstName: "Rose",
    lastName: "William",
    email: "williammayo@bitrex.com",
    invoices: [
      {
        id: "08cede28-0135-46f2-8600-e98db3e29cc6",
        amount: 456,
        date: "2005-09-11",
      },
      {
        id: "f1cf818d-30f5-4f07-b501-6dec55fd07e6",
        amount: 1838,
        date: "1989-01-16",
      },
      {
        id: "13ef3a75-cb97-48b0-b0bd-a5597290b66a",
        amount: 882,
        date: "2016-08-17",
      },
      {
        id: "ba6082ba-5cf4-4309-abe0-c2a16812f69c",
        amount: 714,
        date: "1986-07-28",
      },
    ],
  },
  {
    id: 18,
    firstName: "Underwood",
    lastName: "Stephanie",
    email: "stephaniemayo@bitrex.com",
    invoices: [
      {
        id: "7756b322-89fa-407a-8b48-e0f78499be30",
        amount: 1737,
        date: "1992-01-08",
      },
      {
        id: "123d4b85-caf6-4784-b96c-0fc0bb20c3e0",
        amount: 1455,
        date: "1975-01-06",
      },
      {
        id: "db0ee7cc-3c42-47ee-8491-dc7723843860",
        amount: 1706,
        date: "2005-10-09",
      },
    ],
  },
  {
    id: 19,
    firstName: "Florence",
    lastName: "Farley",
    email: "farleymayo@bitrex.com",
    invoices: [
      {
        id: "89f85a02-6db5-4c56-8288-984ae69d5247",
        amount: 1213,
        date: "1975-07-09",
      },
      {
        id: "a6a851da-bbd8-4702-8059-42e1af8ab2f4",
        amount: 1560,
        date: "1982-09-26",
      },
      {
        id: "3eb18336-2a29-4b83-a0a5-9c9e21fa1d7b",
        amount: 549,
        date: "2019-10-22",
      },
    ],
  },
  {
    id: 20,
    firstName: "Hughes",
    lastName: "Morgan",
    email: "morganmayo@bitrex.com",
    invoices: [
      {
        id: "ab0259aa-219e-40ef-abbb-1015de294986",
        amount: 474,
        date: "1988-05-06",
      },
    ],
  },
  {
    id: 21,
    firstName: "Tasha",
    lastName: "Melanie",
    email: "melaniemayo@bitrex.com",
    invoices: [
      {
        id: "fc0c9783-35bb-411b-b5f0-72c934f7f371",
        amount: 237,
        date: "1984-04-12",
      },
      {
        id: "38f9a4a6-0449-4cb9-88bb-2aaeb8049dd2",
        amount: 669,
        date: "2010-03-18",
      },
    ],
  },
  {
    id: 22,
    firstName: "Wallace",
    lastName: "Atkins",
    email: "atkinsmayo@bitrex.com",
    invoices: [
      {
        id: "14e7b53f-5392-4910-bf9c-a77deab30e0b",
        amount: 869,
        date: "1970-01-06",
      },
      {
        id: "608854f9-887c-4147-9968-b416ef51ba66",
        amount: 1793,
        date: "2005-11-28",
      },
      {
        id: "c4be9aef-23b5-44fa-8379-f41d3f9893fb",
        amount: 1198,
        date: "2003-08-29",
      },
      {
        id: "076cef02-74bd-4306-9217-e189db1ec62f",
        amount: 1523,
        date: "1994-11-16",
      },
      {
        id: "a0fabbca-8c0f-476c-ac97-3f6fd755cd13",
        amount: 1730,
        date: "1989-10-18",
      },
    ],
  },
  {
    id: 23,
    firstName: "Vanessa",
    lastName: "Warner",
    email: "warnermayo@bitrex.com",
    invoices: [
      {
        id: "df35fb6e-ee6d-440b-b8fa-6ce8efc3e1e2",
        amount: 1838,
        date: "2000-04-29",
      },
      {
        id: "2a05bfd1-725e-4c1c-b200-79ff93192598",
        amount: 907,
        date: "1981-09-29",
      },
    ],
  },
  {
    id: 24,
    firstName: "Miranda",
    lastName: "Hewitt",
    email: "hewittmayo@bitrex.com",
    invoices: [
      {
        id: "38569001-d895-431f-8ab3-b60156001380",
        amount: 450,
        date: "1994-07-27",
      },
    ],
  },
  {
    id: 25,
    firstName: "Chaney",
    lastName: "Hopkins",
    email: "hopkinsmayo@bitrex.com",
    invoices: [
      {
        id: "021bdc03-beda-48f4-967b-5360981b42ec",
        amount: 236,
        date: "1976-07-22",
      },
      {
        id: "0f1faf10-b359-4b9a-b793-6c20cc5eb8a0",
        amount: 1517,
        date: "1978-07-22",
      },
    ],
  },
  {
    id: 26,
    firstName: "Oconnor",
    lastName: "Rodriguez",
    email: "rodriguezmayo@bitrex.com",
    invoices: [
      {
        id: "191176eb-fd07-40a1-ba5c-6edfa2de3bd5",
        amount: 1395,
        date: "2000-02-25",
      },
      {
        id: "ce218797-cacb-4f52-9698-89a8cc54a752",
        amount: 923,
        date: "1985-05-31",
      },
      {
        id: "88d098e0-91d7-4591-bb9b-5a1f469b8a33",
        amount: 1091,
        date: "2009-04-20",
      },
      {
        id: "4e369ef1-9de6-4663-a5d3-9d16ecf99497",
        amount: 1049,
        date: "2020-01-29",
      },
      {
        id: "0606d334-0add-44fe-a6dd-65cb931219ae",
        amount: 1858,
        date: "2012-04-08",
      },
    ],
  },
  {
    id: 27,
    firstName: "Ronda",
    lastName: "Loretta",
    email: "lorettamayo@bitrex.com",
    invoices: [
      {
        id: "8b8af809-60ca-4e41-9d1d-8cdc9faf21aa",
        amount: 1169,
        date: "1983-08-27",
      },
      {
        id: "e04027a2-a3e0-4620-a10e-a13d975893e9",
        amount: 931,
        date: "1973-02-09",
      },
    ],
  },
  {
    id: 28,
    firstName: "Jennings",
    lastName: "Combs",
    email: "combsmayo@bitrex.com",
    invoices: [
      {
        id: "6e7d071e-fd77-4242-8762-352fcae8d48b",
        amount: 1785,
        date: "1982-05-27",
      },
      {
        id: "faa7cdbe-af43-46de-acd2-17bbb2a3600c",
        amount: 1463,
        date: "1987-02-25",
      },
    ],
  },
  {
    id: 29,
    firstName: "Ashlee",
    lastName: "Greene",
    email: "greenemayo@bitrex.com",
    invoices: [
      {
        id: "26996779-4f2c-43ac-b642-d0cc3c4dfa3e",
        amount: 1959,
        date: "2021-05-21",
      },
    ],
  },
  {
    id: 30,
    firstName: "Guerra",
    lastName: "Dianne",
    email: "diannemayo@bitrex.com",
    invoices: [
      {
        id: "c6a5c149-b6be-4966-b1a7-5fa31672a41d",
        amount: 911,
        date: "2020-08-04",
      },
      {
        id: "0153f61e-571d-4bf1-af7d-ca489d2eacdd",
        amount: 424,
        date: "1992-06-16",
      },
      {
        id: "d326eacf-e145-4adc-b94f-f99b8a3f93a4",
        amount: 291,
        date: "2019-03-08",
      },
      {
        id: "88aa990d-99bd-4fc0-b4b4-3d9244139596",
        amount: 482,
        date: "1993-10-29",
      },
      {
        id: "bb3b089e-6ce4-48a2-a1c0-9d23c1f127b6",
        amount: 339,
        date: "1976-02-23",
      },
    ],
  },
  {
    id: 31,
    firstName: "Irene",
    lastName: "Leon",
    email: "leonmayo@bitrex.com",
    invoices: [
      {
        id: "7c953595-40eb-4da1-bb6b-0f070c2d0530",
        amount: 1794,
        date: "2005-01-31",
      },
      {
        id: "3ab42675-7e5e-49d6-922f-f91ec29cfae0",
        amount: 317,
        date: "1982-06-01",
      },
      {
        id: "2279ac83-e89e-4f62-b097-13a928346165",
        amount: 222,
        date: "2017-01-07",
      },
    ],
  },
  {
    id: 32,
    firstName: "Kathie",
    lastName: "Mason",
    email: "masonmayo@bitrex.com",
    invoices: [
      {
        id: "a5a6aff3-a6d7-4c37-8594-f6640120a52f",
        amount: 1582,
        date: "2000-06-08",
      },
      {
        id: "d49a6019-81f2-446b-8384-9ab674a24df1",
        amount: 1257,
        date: "2000-04-11",
      },
      {
        id: "e45b919e-bf94-41d3-8790-305aa0cc9450",
        amount: 983,
        date: "1978-06-04",
      },
      {
        id: "f1cb8789-117c-45a4-8a69-e69ec96020c7",
        amount: 503,
        date: "1976-05-20",
      },
    ],
  },
  {
    id: 33,
    firstName: "Merrill",
    lastName: "Jolene",
    email: "jolenemayo@bitrex.com",
    invoices: [
      {
        id: "2e4b7ae4-fbaf-4407-ac88-0513c9cdcbfa",
        amount: 1882,
        date: "2020-11-06",
      },
      {
        id: "6f31db5a-8f03-4756-93ff-af0c47658728",
        amount: 1687,
        date: "2008-02-04",
      },
      {
        id: "764d2a5d-f003-4278-83b5-eff79ac16207",
        amount: 1838,
        date: "1984-01-08",
      },
    ],
  },
  {
    id: 34,
    firstName: "Rosemary",
    lastName: "Robert",
    email: "robertmayo@bitrex.com",
    invoices: [
      {
        id: "5a6ccc37-bc7d-4979-972c-c264dd74d046",
        amount: 1726,
        date: "2003-11-11",
      },
      {
        id: "ae90a0c1-1637-46dc-8021-c7b0a9983db4",
        amount: 1153,
        date: "2016-03-04",
      },
    ],
  },
  {
    id: 35,
    firstName: "Blair",
    lastName: "Good",
    email: "goodmayo@bitrex.com",
    invoices: [
      {
        id: "c1326c7d-0e6e-4989-a853-0c2e8dcc54cd",
        amount: 889,
        date: "2003-04-25",
      },
      {
        id: "bc4a2b9e-c283-4350-ad91-11be28ebe959",
        amount: 885,
        date: "1978-03-19",
      },
      {
        id: "92326a93-8d67-49e8-940c-5aa9505dc676",
        amount: 1290,
        date: "2002-03-07",
      },
      {
        id: "531eabc6-157f-4f28-9105-104e40f4ba20",
        amount: 1762,
        date: "2005-05-09",
      },
      {
        id: "49ca08f9-f14d-4c13-9bc7-4d8f4ab304e4",
        amount: 1146,
        date: "2002-11-26",
      },
    ],
  },
  {
    id: 36,
    firstName: "Baldwin",
    lastName: "Katie",
    email: "katiemayo@bitrex.com",
    invoices: [
      {
        id: "adad4948-7744-4102-8651-2d6790fd0955",
        amount: 1856,
        date: "2002-03-26",
      },
    ],
  },
  {
    id: 37,
    firstName: "Helga",
    lastName: "Wagner",
    email: "wagnermayo@bitrex.com",
    invoices: [
      {
        id: "19f1d97c-b386-4ecd-b9ab-70da8666d41e",
        amount: 1940,
        date: "1973-10-24",
      },
      {
        id: "982820ef-fddf-4897-ac74-ebd829efe031",
        amount: 709,
        date: "1976-03-09",
      },
    ],
  },
  {
    id: 38,
    firstName: "Dunlap",
    lastName: "Walton",
    email: "waltonmayo@bitrex.com",
    invoices: [
      {
        id: "d4467b36-7b36-4b17-9532-f22677b708f4",
        amount: 1037,
        date: "1983-12-02",
      },
      {
        id: "cf95a415-11ef-4f62-b2be-fb5d0333f596",
        amount: 1240,
        date: "1990-08-10",
      },
      {
        id: "9dff4e4d-f805-427d-ab5c-b5b58bddb5f8",
        amount: 925,
        date: "1988-03-17",
      },
      {
        id: "c08e7006-7810-4805-81db-53ed87fef1d7",
        amount: 309,
        date: "1980-03-22",
      },
    ],
  },
  {
    id: 39,
    firstName: "Leach",
    lastName: "Janna",
    email: "jannamayo@bitrex.com",
    invoices: [
      {
        id: "8ed06f3d-2715-4850-8975-0eda63caed1f",
        amount: 1108,
        date: "1983-09-23",
      },
      {
        id: "e8d0a933-27ac-4d41-a5b5-5416fa113f49",
        amount: 1563,
        date: "2014-10-17",
      },
      {
        id: "8e780448-305f-4d2a-875b-72e5f95bab01",
        amount: 1510,
        date: "1980-05-20",
      },
      {
        id: "bccb6a09-22f1-4d76-a767-3c8889234dff",
        amount: 1395,
        date: "2014-08-24",
      },
      {
        id: "bc42d9eb-6c90-4aa9-9f9c-8797c9322153",
        amount: 207,
        date: "2008-06-22",
      },
    ],
  },
  {
    id: 40,
    firstName: "Weiss",
    lastName: "Craig",
    email: "craigmayo@bitrex.com",
    invoices: [
      {
        id: "feee21a8-3233-49c7-8702-fbd8fd8f9189",
        amount: 1234,
        date: "1973-01-19",
      },
      {
        id: "71949e13-831f-423c-ae0c-bd148814b0ea",
        amount: 943,
        date: "1991-02-22",
      },
    ],
  },
  {
    id: 41,
    firstName: "Teresa",
    lastName: "Blackwell",
    email: "blackwellmayo@bitrex.com",
    invoices: [
      {
        id: "bb2721d4-49c9-4e86-9dea-591bb4963760",
        amount: 1063,
        date: "2010-11-13",
      },
      {
        id: "424857b0-c4ba-4295-9e60-7d5bef2104a0",
        amount: 878,
        date: "1973-07-05",
      },
      {
        id: "2ba65e81-0d08-43c1-a78c-29aefc4c1f85",
        amount: 421,
        date: "1996-10-02",
      },
    ],
  },
  {
    id: 42,
    firstName: "Trujillo",
    lastName: "Suzanne",
    email: "suzannemayo@bitrex.com",
    invoices: [
      {
        id: "379031fe-c5e4-492d-b03d-400e1af978c5",
        amount: 463,
        date: "1986-06-13",
      },
    ],
  },
  {
    id: 43,
    firstName: "Charmaine",
    lastName: "Goff",
    email: "goffmayo@bitrex.com",
    invoices: [
      {
        id: "347e1055-1830-4d0a-9336-8761c69087ce",
        amount: 1835,
        date: "1978-03-11",
      },
    ],
  },
  {
    id: 44,
    firstName: "Hatfield",
    lastName: "Chrystal",
    email: "chrystalmayo@bitrex.com",
    invoices: [
      {
        id: "a82f0ca6-3b08-4f57-93ed-1c7f79ffe574",
        amount: 1590,
        date: "1996-02-03",
      },
      {
        id: "f0fa18db-c1c1-4dc6-96a8-7077e395c7fc",
        amount: 1390,
        date: "1987-05-09",
      },
      {
        id: "e8e603c1-200c-463d-9423-67f1b0593ccf",
        amount: 544,
        date: "2004-03-21",
      },
    ],
  },
  {
    id: 45,
    firstName: "Fields",
    lastName: "Beard",
    email: "beardmayo@bitrex.com",
    invoices: [
      {
        id: "1b47a83d-b844-4950-85d2-21d895bd7784",
        amount: 404,
        date: "1975-10-20",
      },
      {
        id: "e1f6f897-6509-49af-9178-f89ae7744e2c",
        amount: 1622,
        date: "1981-11-24",
      },
      {
        id: "2caf5230-6d59-4607-84fb-1679a1973000",
        amount: 1216,
        date: "2014-04-29",
      },
      {
        id: "93831199-439f-45b3-8c25-a642491fc098",
        amount: 1204,
        date: "1991-05-06",
      },
    ],
  },
  {
    id: 46,
    firstName: "Lee",
    lastName: "Estelle",
    email: "estellemayo@bitrex.com",
    invoices: [
      {
        id: "92f03886-c979-4cfe-8b17-2916b0ca8771",
        amount: 958,
        date: "1990-11-21",
      },
      {
        id: "9d5ebcb6-e917-4ada-ba90-dc467bbb87e6",
        amount: 1289,
        date: "2009-09-13",
      },
    ],
  },
  {
    id: 47,
    firstName: "Henderson",
    lastName: "Laura",
    email: "lauramayo@bitrex.com",
    invoices: [
      {
        id: "85854d0d-67c1-4ba2-a3ac-a7a90a053e59",
        amount: 1894,
        date: "1971-08-29",
      },
      {
        id: "6a38576b-486e-4e34-93d9-09d3ad1dbd8c",
        amount: 984,
        date: "2020-03-10",
      },
      {
        id: "2502badd-02db-4ce0-a96d-3150175cc3c2",
        amount: 1535,
        date: "2004-07-22",
      },
    ],
  },
  {
    id: 48,
    firstName: "Leola",
    lastName: "Carrillo",
    email: "carrillomayo@bitrex.com",
    invoices: [
      {
        id: "1b8ea76b-781d-4e95-be0f-ac5b7edff872",
        amount: 272,
        date: "1985-02-25",
      },
      {
        id: "4edb177c-c4cd-4721-818a-35eecdb9eb2f",
        amount: 1780,
        date: "2009-06-22",
      },
      {
        id: "f6d434cc-bdb2-45c5-890f-ffdf194dc166",
        amount: 1735,
        date: "1988-12-03",
      },
      {
        id: "0724c023-3af0-4395-8b6d-5b78107cdf13",
        amount: 1194,
        date: "2001-03-06",
      },
      {
        id: "d7940746-cc6e-46c1-b20a-8f48abc0a810",
        amount: 1829,
        date: "1971-05-20",
      },
    ],
  },
  {
    id: 49,
    firstName: "Cochran",
    lastName: "Adrienne",
    email: "adriennemayo@bitrex.com",
    invoices: [
      {
        id: "3aa33278-b6d3-4ae8-96cf-e3f3454aa8ee",
        amount: 783,
        date: "1998-11-02",
      },
      {
        id: "fe22f8b8-9f90-49e0-bf6a-a1a8af8ce278",
        amount: 221,
        date: "1970-04-02",
      },
      {
        id: "7743d32b-e656-4cf9-b6c5-ae2297acb6bd",
        amount: 799,
        date: "2016-01-19",
      },
    ],
  },
  {
    id: 50,
    firstName: "Luann",
    lastName: "Rena",
    email: "renamayo@bitrex.com",
    invoices: [
      {
        id: "18038abf-568b-431c-b1d3-f648f5c0a47a",
        amount: 725,
        date: "1990-03-23",
      },
      {
        id: "c6e32f62-2a5e-478c-8eee-3edf3c47ec39",
        amount: 1535,
        date: "1996-03-21",
      },
      {
        id: "1cfe2dfa-3d73-418d-8e14-e4ee2ef2d087",
        amount: 1092,
        date: "1999-12-09",
      },
      {
        id: "a4e7b39c-6090-47cd-820b-75f83817728e",
        amount: 244,
        date: "1987-03-29",
      },
    ],
  },
  {
    id: 51,
    firstName: "Esther",
    lastName: "Cross",
    email: "crossmayo@bitrex.com",
    invoices: [
      {
        id: "6525069e-2078-4102-8fff-972d96289b20",
        amount: 688,
        date: "2018-08-08",
      },
      {
        id: "f04b49db-a2db-424e-aa0e-b8e42e98cf9f",
        amount: 1858,
        date: "1996-01-22",
      },
    ],
  },
  {
    id: 52,
    firstName: "Freida",
    lastName: "Mathis",
    email: "mathismayo@bitrex.com",
    invoices: [
      {
        id: "db2319ce-1240-4e27-9213-1ba8a12ee501",
        amount: 1476,
        date: "2017-07-19",
      },
      {
        id: "a02ca7a9-1918-404b-b000-88b5c28942ff",
        amount: 1462,
        date: "1984-12-07",
      },
      {
        id: "c6af3c2f-7651-4a81-aa93-254f26e8cde2",
        amount: 1732,
        date: "2021-02-06",
      },
    ],
  },
  {
    id: 53,
    firstName: "Rachel",
    lastName: "Vera",
    email: "veramayo@bitrex.com",
    invoices: [
      {
        id: "cb697d78-2f2a-4d0b-a512-4e3facfae86d",
        amount: 1469,
        date: "1998-04-30",
      },
      {
        id: "94332804-aa77-4841-b163-559c996f3362",
        amount: 1117,
        date: "2003-11-19",
      },
    ],
  },
  {
    id: 54,
    firstName: "Andrea",
    lastName: "Chandra",
    email: "chandramayo@bitrex.com",
    invoices: [
      {
        id: "f168f51d-5211-45f3-9c71-c2454b3a7b1c",
        amount: 1771,
        date: "2018-09-24",
      },
    ],
  },
  {
    id: 55,
    firstName: "Nona",
    lastName: "Janelle",
    email: "janellemayo@bitrex.com",
    invoices: [
      {
        id: "95320aa9-e533-49f4-94c7-0273457f326a",
        amount: 205,
        date: "1985-01-29",
      },
    ],
  },
  {
    id: 56,
    firstName: "Melinda",
    lastName: "Turner",
    email: "turnermayo@bitrex.com",
    invoices: [
      {
        id: "c3f7a333-16c1-42f4-bc87-37378c037824",
        amount: 435,
        date: "1994-02-25",
      },
    ],
  },
  {
    id: 57,
    firstName: "Little",
    lastName: "Keisha",
    email: "keishamayo@bitrex.com",
    invoices: [
      {
        id: "2662c993-6e31-45f3-a16c-b68d80159463",
        amount: 865,
        date: "1987-03-10",
      },
      {
        id: "65ab357f-3a99-4de6-b350-ad3a399a2742",
        amount: 333,
        date: "2005-06-10",
      },
      {
        id: "34c00d94-4dc7-49da-80b1-e250d20b651d",
        amount: 1599,
        date: "2012-06-08",
      },
      {
        id: "809ac996-55c2-41e0-ad74-5b66367dc334",
        amount: 1289,
        date: "1976-10-03",
      },
      {
        id: "a93c640b-0348-4b6e-a872-6896d3fdf2f1",
        amount: 232,
        date: "1975-08-29",
      },
    ],
  },
  {
    id: 58,
    firstName: "Chambers",
    lastName: "Sheryl",
    email: "sherylmayo@bitrex.com",
    invoices: [
      {
        id: "03f5f407-7769-4a19-9ec8-2470888ff592",
        amount: 931,
        date: "2010-09-06",
      },
      {
        id: "25d06d9d-2c7e-4a6b-aae5-f3601bdfe662",
        amount: 1779,
        date: "2010-04-05",
      },
      {
        id: "2708db6e-601a-4b0d-b756-bc820bd42f1a",
        amount: 1980,
        date: "2015-06-17",
      },
      {
        id: "e716e05a-9c29-41cf-9999-49683395344c",
        amount: 1743,
        date: "1991-09-23",
      },
    ],
  },
  {
    id: 59,
    firstName: "Brittany",
    lastName: "Nanette",
    email: "nanettemayo@bitrex.com",
    invoices: [
      {
        id: "8dcc93c9-d77b-4477-84a9-29f691bccab2",
        amount: 713,
        date: "1971-05-01",
      },
    ],
  },
  {
    id: 60,
    firstName: "Whitney",
    lastName: "Hope",
    email: "hopemayo@bitrex.com",
    invoices: [
      {
        id: "81258558-fafa-40b6-a075-89e51b43eae4",
        amount: 1113,
        date: "1981-09-19",
      },
    ],
  },
  {
    id: 61,
    firstName: "Smith",
    lastName: "Socorro",
    email: "socorromayo@bitrex.com",
    invoices: [
      {
        id: "d3bc976b-e9a2-403b-bc9a-6715c84f69dd",
        amount: 1617,
        date: "2006-11-12",
      },
      {
        id: "626fdd8e-26ec-44a3-b2e0-413aec983261",
        amount: 720,
        date: "2006-04-21",
      },
      {
        id: "2d36d2c8-5968-40a4-bc68-856a632924b4",
        amount: 1713,
        date: "1987-11-12",
      },
    ],
  },
  {
    id: 62,
    firstName: "Buckner",
    lastName: "Louisa",
    email: "louisamayo@bitrex.com",
    invoices: [
      {
        id: "d094ffc3-66c1-40b1-84e9-e61dd47a8def",
        amount: 228,
        date: "1977-11-10",
      },
      {
        id: "5479406b-d457-40ec-b163-379c56c48a79",
        amount: 1642,
        date: "2010-04-01",
      },
      {
        id: "69fb76bf-eb23-48d7-ad50-11551b97c6bd",
        amount: 855,
        date: "2012-11-05",
      },
      {
        id: "d691d256-04c4-4cde-8119-7a4406495f8d",
        amount: 1380,
        date: "1986-11-16",
      },
    ],
  },
  {
    id: 63,
    firstName: "Mccarty",
    lastName: "Doris",
    email: "dorismayo@bitrex.com",
    invoices: [
      {
        id: "e0feed0d-af18-4c61-b948-c5f2c6ac9495",
        amount: 1411,
        date: "2014-02-01",
      },
      {
        id: "cb9a9c78-53d4-468c-a8e8-c4b31ca9c8ea",
        amount: 925,
        date: "1978-02-02",
      },
      {
        id: "f0e5d715-38b2-4604-9485-fdf6bebe2ad3",
        amount: 727,
        date: "2014-03-29",
      },
    ],
  },
  {
    id: 64,
    firstName: "Beryl",
    lastName: "Henry",
    email: "henrymayo@bitrex.com",
    invoices: [
      {
        id: "8b1ccb71-b734-443f-b700-01dcdb608ee4",
        amount: 1230,
        date: "1999-12-12",
      },
      {
        id: "daf48a4e-4651-46a3-9635-14724611f9c7",
        amount: 1695,
        date: "1970-04-09",
      },
      {
        id: "bc813a43-cd53-4050-af16-42d5c192d30e",
        amount: 1245,
        date: "1996-08-26",
      },
      {
        id: "504a4a6b-87bf-4508-ace1-febd0b86fe8e",
        amount: 534,
        date: "2011-03-08",
      },
    ],
  },
  {
    id: 65,
    firstName: "Alice",
    lastName: "Valdez",
    email: "valdezmayo@bitrex.com",
    invoices: [
      {
        id: "76252f46-94ec-48f7-b8eb-464fc77e43cd",
        amount: 1967,
        date: "1972-06-19",
      },
    ],
  },
  {
    id: 66,
    firstName: "Williamson",
    lastName: "Bradshaw",
    email: "bradshawmayo@bitrex.com",
    invoices: [
      {
        id: "5f1b7c38-600d-41a9-8d49-979aa4256cd1",
        amount: 1588,
        date: "2011-10-02",
      },
    ],
  },
  {
    id: 67,
    firstName: "Compton",
    lastName: "Watkins",
    email: "watkinsmayo@bitrex.com",
    invoices: [
      {
        id: "0d971804-dd79-4d90-b677-0eb480daee43",
        amount: 1465,
        date: "1972-03-10",
      },
      {
        id: "d2ab798f-47d7-4fc7-9f3f-31e2ace6cc36",
        amount: 535,
        date: "1975-07-31",
      },
    ],
  },
  {
    id: 68,
    firstName: "Rosalie",
    lastName: "Jerry",
    email: "jerrymayo@bitrex.com",
    invoices: [
      {
        id: "93a21247-150d-4921-9c39-47ce5b5d47a3",
        amount: 763,
        date: "1985-04-17",
      },
      {
        id: "11ba80db-dcea-48f7-847e-076e3f622e9b",
        amount: 482,
        date: "2003-06-20",
      },
    ],
  },
];

export default CUSTOMERS;
