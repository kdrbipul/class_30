// const user={id:20, name:"kader", job:"developer"};
// // console.log(user);

// const stringified=JSON.stringify(user);
// // console.log(stringified);

// const object=JSON.parse(stringified);
// // console.log(object);

// const company={
//     name:"facebook",
//     ceo:{
//         name:'Mark',
//         id:2,
//         food:'Fried Rice'
//     },
//     web:{
//         work:'website developer',
//         employee:22,
//         teach:{
//             first:'html',
//             second:'css',
//             third:'js'
//         }
//     }
// }


// const companyStringified=JSON.stringify(company);
// // console.log(companyStringified);

// const convert=JSON.parse(companyStringified);
// console.log(convert);

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
}

