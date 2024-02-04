// Exercise 1 : Menu

const menu = [
    {
      type: "starter",
      name: "Houmous with Pita"
    },
    {
      type: "starter",
      name: "Vegetable Soup with Houmous peas"
    },
    {
      type: "dessert",
      name: "Chocolate Cake"
    }
  ];
  
  // Check if at least one element in the menu array is a dessert
  const hasDessert = menu.some(item => item.type === "dessert");
  
  // Check if all elements in the array are starters
  const allStarters = menu.every(item => item.type === "starter");
  
  // Check if there is at least one element in the array that is a main course
  const hasMainCourse = menu.some(item => item.type === "main");
  if (!hasMainCourse) {
    // Add a main course of your choice to the array
    menu.push({ type: "main", name: "Grilled Salmon" });
  }
  
  const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];
  
  // Add a key “vegetarian” (a boolean) to the menu array
  menu.forEach(item => {
    item.vegetarian = vegetarian.some(ingredient =>
      item.name.toLowerCase().includes(ingredient)
    );
  });
  
  console.log("Menu:", menu);
  console.log("Has Dessert:", hasDessert);
  console.log("All Starters:", allStarters);
  console.log("Has Main Course:", hasMainCourse);

  
//   Exercise 2 : Chop Into Chunks


function string_chop(str, chunkLength) {
    const chunks = [];
    for (let i = 0; i < str.length; i += chunkLength) {
      chunks.push(str.slice(i, i + chunkLength));
    }
    return chunks;
  }
  
  console.log(string_chop('developers', 2)); // ["de", "ve", "lo", "pe", "rs"]

  
//   Exercise 3 : You Said String ?


function search_word(str, word) {
    const words = str.split(' ');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word) {
        count++;
      }
    }
    return `'${word}' was found ${count} times.`;
  }
  
  console.log(search_word('The quick brown fox', 'fox')); // "'fox' was found 1 times."

  
//   Exercise 4 : Reverse Array

function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      const temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
  
  console.log(reverseArray([1,2,3,4,5])); // [5,4,3,2,1]
  console.log(reverseArray([1,2])); // [2,1]
  console.log(reverseArray([])); // []
  console.log(reverseArray([1,2,3,4,5,6,7,8,9,10])); // [10,9,8,7,6,5,4,3,2,1]
  
