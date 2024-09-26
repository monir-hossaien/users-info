let userList = document.getElementById("userList");
let form = document.getElementById("form-body")

class User {
    constructor(name, userName, email, address, phone, website, company) {
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

class CreateUser {
    constructor() {
        this.users = this.loadUsers();
        this.editIndex = null; // Track the index of the user being edited
        this.showUsers();
    }

    loadUsers() {
        let usersData = localStorage.getItem("users");
        return usersData ? JSON.parse(usersData) : [];
    }

    setUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    addUser(user) {
        this.users.push(user);
        this.setUsers();
        this.showUsers();
    }

    updateUser(index, user) {
        this.users[index] = user;
        this.setUsers();
        this.showUsers();
        this.editIndex = null; // Reset edit index after updating
    }

    deleteUser(index) {
        this.users.splice(index, 1);
        this.setUsers();
        this.showUsers();
    }

    showUsers() {
        userList.innerHTML = ''; // Clear existing entries
        this.users.forEach((user, index) => {
            userList.innerHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.userName}</td>
                    <td>${user.email}</td>
                    <td>${user.address}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                    <td>${user.company}</td>
                    <td>
                        <i onclick="usersInstance.editUser(${index})" class="fa-solid fa-pen-to-square text-white bg-success p-2 rounded-2"></i>
                        <i onclick="usersInstance.deleteUser(${index})" class="fa-solid fa-trash text-white bg-danger p-2 rounded-2"></i>
                    </td>
                </tr>`;
        });
    }

    editUser(index) {
        modalOpen()
        let user = this.users[index];
        document.getElementById("name").value = user.name;
        document.getElementById("userName").value = user.userName;
        document.getElementById("userEmail").value = user.email;
        document.getElementById("userAddress").value = user.address;
        document.getElementById("userPhone").value = user.phone;
        document.getElementById("userWebsite").value = user.website;
        document.getElementById("userCompany").value = user.company;

        this.editIndex = index; // Set the index for editing
    }
}
// users object
const usersInstance = new CreateUser();

// modal open
function modalOpen(){
    document.getElementById("modal").style.display = "block"

}
//modal close
function closeModal() {
    document.getElementById("modal").style.display = "none"
}

// user create
function createUser() {
    let name = document.getElementById("name").value;
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let address = document.getElementById("userAddress").value;
    let phone = document.getElementById("userPhone").value;
    let website = document.getElementById("userWebsite").value;
    let company = document.getElementById("userCompany").value;

    // New user creation
    const newUser = new User(name, userName, email, address, phone, website, company);

    if (usersInstance.editIndex !== null) {
        usersInstance.updateUser(usersInstance.editIndex, newUser);
        usersInstance.editIndex = null; // Reset edit index after update
    } else {
        usersInstance.addUser(newUser);
    }

    // reset form data
    form.reset()

    // modal close
    document.getElementById("modal").style.display = "none"





}
