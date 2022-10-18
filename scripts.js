// task 1
// დაწერეთ ფუნქცია რომელიც შეამოწმებს გადაცემული ტექსტი არის თუ არა პალინდრომი . 
// პალინდრომი არის სიტყვა რომელიც შებრუნებულ მდგომარეობაშიც იგივეა . მაგ. madam - მარცხნიდანაც და მარჯვნიდანაც ერთი და იგივეა    (შებრუნებულიც და ჩვეულებრივადაც) .
function checkPalindrom (str) {
      if( str == str.split('').reverse().join('')){
        console.log("yes it is a palindrome")
     }else{
        console.log("no it is not a palindrome")
     }
  }
 checkPalindrom("madam");
// task 2
// დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს პირველ არაგამეორებადი ქარაქტერი/სიმბოლოს. 
// მაგალითად გვაქვს string 'bcskbrk' -> c - პირველი არაგამეორებადი ქარაქტერი არის 'c'
const string = "bccsskbrk"
function firstNonRepeatedCharacter(str){
    let character = str.split('');
    for(let i = 0; i<str.length; i++){
        if(character.filter(function(b){
            return b == str.charAt(i);
        }).length ==1)
        return str.charAt(i)
    }

}
console.log(firstNonRepeatedCharacter(string));


// task 3
// დაწერეთ ფუნქცია რომელიც გადაცემულ ტექსტის camelCase ში კონვერტაციას გააკეთებს
// camelize("sad midis Matarebeli") -> "sadMidisMatarebeli"

let text = "sad midis matarebeli?"
function firsLetterToUpper(word){
    return word.charAt(0).toUpperCase() + word.substring(1);
}
let bigLetterArr = text.split(" ");
let newText = bigLetterArr.reduce((acc,cur)=>{
    acc = acc + firsLetterToUpper(cur) + " ";
    return acc;
}, "");
console.log(newText.trim());
// task 4
// დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს რიცხვს სწორი სუფიქსით , როგორიცაა 1st, 2nd, 3rd or 4th და ა.შ
function normalize(num){
    let string = num.toString();
    if(string.charAt(string.length-1)==1){
        return string+= "st"
    } else if(string.charAt(string.length-1)==2){
        return string += "nd"
    }else if(string.charAt(string.length-1)==3){
        return string += "rd"
    }else{
        return string += "th"
    }
}
console.log(normalize(11));
// task 5
// დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
// ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
// მაგალითად
// arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
 let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 let newArray =arr1.slice().sort();
 let most = [undefined,0];
 let counter = 0;
 newArray.reduce(function(acc,val){
    acc == val ? ++counter > most[1] && (most = [val, counter]) : (counter = 1)
    return val 
 })
console.log(`${most[0]} - ${most[1]} times `);

// task 6
// დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
// ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
function filterArray(arrayOne,arrayTwo){
    return [...new Set(arrayOne.concat(arrayTwo))];
}
console.log(filterArray(array1,array2));
function resultArray(arrayOne,arrayTwo){
    let result = [...arrayOne,...arrayTwo];
    result.sort(function(a,b){
        return a - b;
    })
    return result;
}
console.log(resultArray(array1,array2));
// task 7
// ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
// გამოიყენეთ map
// ["<h1>Angelina Jolie</h1><h2>80</h2>",

function readyToPutInTheDOM(arr) {
    return arr.map(function(arrI){
        return `<h1>${arrI.name}</h1><h2>${arrI.age}</h2>`
    })
  }
  console.log(readyToPutInTheDOM([
      {
        name: "gela Jolie",
        age: 80,
      },
      {
        name: "Eric gorgasaliani",
        age: 2,
      },
      {
        name: "Paris msxvilidze",
        age: 5,
      },
      {
        name: "Kayne West",
        age: 16,
      },
      {
        name: "Bob Ziroll",
        age: 100,
      },
    ])
  );
// task 8
