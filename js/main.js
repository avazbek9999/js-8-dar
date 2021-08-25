// console.log(
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(Response => Response.json())
//         .then(data => console.log(data))
// );retur 200 obect

//===============================================================

// function renderTodo(data) {
//     console.log(data);
// }

//   //RESTAPE
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(Response => Response.json())
//     .then(data => {
//         if (data.length) {
//             renderTodo(data);
//         }
            
//     });

 
   //GRAPAPE
   //bekkendan malumot olib kelish
//    const API_KEY ="54195bce";
//    const API = "http://www.omdbapi.com/?apikey="+ API_KEY +"&s=loki";
   
   
//   async function fetchMoves(){
//       const response = await fetch(API); // response javob qaytadi 
     
//       const data = await response.json(); // ma'lumotni o'zimizga o'girib olamiz
//       console.log(data);   // nechta malumot chiqqanini ko'rish uchun datani o'zini beramiz
//   }
  
//   fetchMoves();


// asyn await takrorlash beckenddan ma'lumot olish:

// 1-usul 

// console.log(fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => console.log(data))//data qaytarmaydi agar responsni Json funcsiyasini ishlatmasak
// );


// 2-usul

// async function fetchTodo() {
//     const reponse = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const date = await reponse.json()
//     console.log(date);
// }

// fetchTodo();

//domga render qilish  becendagi ma'lumotni
function renderTodo(data) {

    const fragmentTodo = document.createDocumentFragment();

    data.forEach(row => {
        const newLi = document.createElement('li');
        newLi.textContent = row.title;
        
        fragmentTodo.appendChild(newLi);
    })
    list.appendChild(fragmentTodo);
}

async function fetchTodo() {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    const date = await reponse.json();
    renderTodo(date);
}

fetchTodo();






