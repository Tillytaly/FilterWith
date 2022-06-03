import TypesUtils from "./TypesUtils";
const result = [
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
  ];
  
  interface FilterObject {
    [x: string]: string | number | FilterObject[] | any[];
  }

const filterObject = (
    object: FilterObject[] | FilterObject,
    phrase: string
  ): {}[] => {
    const regExpToFindPhrase = new RegExp(`${phrase}`, "gi");
    const objectToFilter = Object.values(object);
  
    return  objectToFilter.filter((element) => {
 
      if ( TypesUtils.isArray(element) || TypesUtils.isObjectLiteral(element)) {
      element = filterObject(element, phrase);
      }
  
      return regExpToFindPhrase.test(element) 
    }
    )}