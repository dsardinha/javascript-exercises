const getAge = (death, birth) => {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(arr) {
    let arrSorted = arr.sort((a, b) => (getAge(b.yearOfDeath, b.yearOfBirth) - getAge(a.yearOfDeath, a.yearOfBirth)));
    return arrSorted[0];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
