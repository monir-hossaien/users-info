// let nameInput = document.getElementById("name");
// let userNameInput = document.getElementById("userName");
// let emailInput = document.getElementById("userEmail");
// let addressInput = document.getElementById("userAddress");
// let phoneInput = document.getElementById("userPhone");
// let websiteInput = document.getElementById("userWebsite");
// let companyInput = document.getElementById("userCompany");

// let userList = document.getElementById("userList");

// let url = "https://jsonplaceholder.typicode.com/users";


// async function createUser(){

//     let data = {
//         name: nameInput.value,
//         username: userNameInput.value,
//         email: emailInput.value,
//         address: {
//           city: addressInput.value,
//         },
//         phone: phoneInput.value,
//         website: websiteInput.value,
//         company: {
//           name: companyInput.value,
//         },
//     };

//     let res = await axios.post(url,data)
    
//     if(res.status === 200){
        
//     }else{
//         alert("Something went wrong")
//     }

// }





// getData()









// // get user list from backend
// async function getData() {

//   let res = await axios.get(url);
  
//   if (res.status === 200) {
//     let users = res.data
//     console.log(users)
//     users.map((user)=>{
//         userList.innerHTML +=`<tr>

//             <td>${user.name}</td>
//             <td>${user.username}</td>
//             <td>${user.email}</td>
//             <td>${user.address.city}</td>
//             <td>${user.phone}</td>
//             <td>${user.website}</td>
//             <td>${user.company.name}</td>
//             <td>
//             <i onclick="userUpdate('${user.id}')" class="fa-solid fa-pen-to-square text-white bg-success p-2 rounded-2"></i>
//             <i onclick="userDelete('${user.id}')" class="fa-solid fa-trash text-white bg-danger p-2 rounded-2"></i>
//             </td>
//         </tr>`
//     })
    
//   }
// }



// async function userDelete(id){
    
//     let res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
//     if (res.status === 200){
//         userList.innerHTML = '';
        
//     }else{
//         alert('Something went wrong')
//     }
    

// }

