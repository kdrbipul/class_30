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

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(users){
    const ul=document.getElementById('users');
    for(const user of users){
        // console.log(user?.address?.city);
        const li=document.createElement('li');
        li.innerText=user.address.city;
        ul.appendChild(li)
    }
}
