const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



// function titleCased(){
//     const final = tutorials.map(title => {
//     let finalTitle = [];
//     const words = title.split(' ');
//       for (let i = 0; i < words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//         finalTitle.push(words[i]);
//       } 
//       return finalTitle.join(' ');
//      })
//     return final;
//   }


function titleCased(){
  const final = tutorials.map(title => {
    let finalTitle = [];
  const words = title.split(' ');
  //for (let title of array){
    for (let i = 0; i < words.length; i++){
      debugger
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
      finalTitle.push(words[i]);
      debugger
    } 
    return finalTitle.join(' ');
   })
  return final;
}


// function titleCased(){
//   const final = tutorials.map(title => {
//     let finalTitle = [];
//     const words = title.split(' ');
//     for (let i = 0; i < words.length; i++){
//       words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//       finalTitle.push(words[i]);
//     } 
//     return finalTitle.join(' ');
//    })
//   return final;
// }
// const titleCased = tutorials.map(titleCased())


// const singleTitle = 'i have learned'
// const words = singleTitle.split(" ")
// words.map(word => {
// console.log(word[0].toUpperCase() + word.substring(1))
// }).join(" ")


// function capWords(title){
//   let finalTitle;
//   for (let title of array){
//     const words = title.split(' ');
//     for (let i = 0; i < words.length; i++){
//       debugger
//       words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//       finalTitle.push(words[i]);
//       debugger
//     } 
//     finalTitle = finalTitle.join(' ');
//     // finalArray.push(finalTitle);
//     debugger
//     // finalTitle = [];
//     debugger
//   }
//   return finalTitle;
//   // console.log(finalArray);
//   // return finalArray;
// }

// keep below
// function capWords(array){
//   let finalTitle = [];
//   let finalArray = [];
//   for (let title of array){
//     const words = title.split(' ');
//     for (let i = 0; i < words.length; i++){
//       debugger
//       words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//       finalTitle.push(words[i]);
//       debugger
//     } 
//     finalTitle = finalTitle.join(' ');
//     finalArray.push(finalTitle);
//     debugger
//     finalTitle = [];
//     debugger
//   }
//   return finalArray;
// }



// function capWords(array){
//   let finishedPhrase;
//   let finishedArray = [];
//   for (let phrase of array){
//     debugger
//     for (let i = 0; i < phrase.length; i++){
//       let word;
//       debugger
//       if (i === 0){
//         finishedPhrase = phrase[0].toUpperCase();
//       }
//       else if (phrase[i] === ' '){
//         word = phrase.substring(i+1,i+1);
//         finishedPhrase = finishedPhrase + word;
//         for (let j = i+1; j <= phrase.length; j++){
//           debugger
//           if (phrase[j] === ' '){
//             //capitalize did not work! says its not a function
//             //word = phrase.substring(i+1 , j).capitalize();
//             finishedPhrase = finishedPhrase + phrase[i+1].toUpperCase() + phrase.substring(i+2,j)
//             //finishedPhrase = finishedPhrase + word;
//             break;
//           }
//         }
//       }

//         //for the first letter cap it
//         // find first space, find second space, use substring to cap i+1
//         //sub(i,j)
//     }
//   }

// }
// do while loop where 


// function capWords(array){
//   let finishedArray = []
//   for (let phrase of array){
//     // debugger
//     //for (let char of phrase){
//       for (let i = 0; i < phrase.length; i++){
//         if (phrase[i] === ' '){
//           debugger
//           phrase = phrase.replace(phrase[i+1], phrase[i+1].toUpperCase())
//           debugger
//           finishedArray = [...finishedArray, phrase]
//         }
//         finishedArray = [...finishedArray, array[phrase]]
//       }
//       // let firstLetter = word[0].toUpperCase();
//       // debugger
//     //}
//   }
//}

  //return new array w/ cap letters
  // for (phrase in array){
  //   for(word in phrase){
  //     word[0].toUpperCase()
  //   }
  // }
  
//   return tutorials.map()
// }

