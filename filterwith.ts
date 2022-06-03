const dataset: {}[] = [
  {
    _id: "5e985a07feddae7617ac44f6",
    age: 24,
    eyeColor: "brown",
    name: "Cummings Baxter",
    gender: "male",
    company: "VELOS",
    email: "cummingsbaxter@velos.com",
    phone: "+1 (907) 482-2451",
    tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
    friends: [
      {
        id: 0,
        name: "Sheppard Jensen",
      },
    ],
  },
  {
    _id: "efnb81hf139fh0193",
    age: 28,
    eyeColor: "blue",
    name: "John DOe",
    gender: "male",
    company: "Microsoft",
    email: "mcs@microsoft.com",
    phone: "+1 (907) 111-2422251",
    tags: ["nisi", "japaneeese", "mollit", "anim", "aliquip"],
    friends: [
      {
        id: 2,
        name: "Bruce Jensen",
      },
      {
        id: 3,
        name: "Shaekspear Bro",
      },
    ],
  },
  {
    _id: "qeoifnqoiejfwqe",
    age: 31,
    eyeColor: "gray",
    name: "Joaana Doe",
    gender: "male",
    company: "Microsoft",
    email: "mcs@microsoft.com",
    phone: "+1 (907) 111-2422251",
    x: {
      y: {
        z: {
          dude: "Sheppard"
        }
      }
    },
    tags: ["nisi", "japaneeese", "mollit", "anim", "aliquip"],
    friends: [
      {
        id: 2,
        name: "Bruce Jensen",
      },
      {
        id: 3,
        name: "Shaekspear Bro",
      },
    ],
  },
];

const regExpToFindPhrase = (phrase: string): RegExp => new RegExp(`${phrase}`, "gi");

const filterObjectCallback = (value: any, phrase: string): boolean => {
  let isArray = Array.isArray(value);
  let isObject = typeof value === "object" && !isArray;

  let isNonPrimitive: boolean = (isArray || isObject);

  if(isNonPrimitive) {
    if(isObject) {
      return filterObjectCallback(Object.values(value), phrase);
    }

    if(isArray) {
      return value.filter(arrayItemValue => {
        return filterObjectCallback(arrayItemValue, phrase);
      }).length > 0;
    }
  }

  return regExpToFindPhrase(phrase).test(value);
}

const result = Object.values(dataset).filter(item => {
  return filterObjectCallback(item, "Sheppard");
});

console.log(result);
