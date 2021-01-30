'use strict';

const peeps = document.querySelector("#peeps");
const username = document.querySelector("#name");
const job = document.querySelector("#job");
const alert = document.querySelector("#onsuccess");


const printNameToScreen = (username) => {
    let user = document.createElement("p");
    let text = document.createTextNode(`${username}`);
    user.appendChild(text);
    peeps.appendChild(user);
}

const retrieveData = () => {
    fetch("https://reqres.in/api/users")
        .then((response) => {
            // check that the response is OK (i.e. 200)
            if (response.status !== 200) {
                throw new Error("I don't have a status of 200");
            } else {
                console.log(response);
                console.log(`response is OK (200)`);
                //json-ify it (which returns a promise)
                response.json().then((infofromserver) => {
                    console.log(infofromserver);
                    console.log(infofromserver.data); // key - return array(6)
                    for (let users of infofromserver.data) {
                        console.log(users.first_name);
                        printNameToScreen(users.first_name);
                    }
                })
            }
        }).catch((err) => {
            console.error(err);
        })
}
retrieveData();

const createUsers = () => {
    const userValue = username.value;
    const jobValue = job.value;

    let data = {
        name: userValue,
        job: jobValue
    }

    fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(info => {
            console.log(info);
            alert.setAttribute("class", "alert alert-success");
            alert.innerHTML = "User has been successfully created!";
            setTimeout(() => {
                alert.removeAttribute("class");
                alert.innerHTML = "";
            }, 2000);
        })
        .catch(err => console.error(`Stopppppp! ${err}`));
}


retrieveData();
createUsers();

//get single user
const retrieveData2 = () => {
    fetch("https://reqres.in/api/users/2")
        .then((response) => {
            //checking if the response is ok
            if (response.status !== 200) {
                console.error("status is not 200");
            } else {
                console.log(response);
                console.log(`response is good (200)`);
                response.json().then((infofromserver) => {
                    //checking to see if the data of the single user is there
                    console.log(infofromserver.data);
                    //printing out first name of user
                    printNameToScreen(infofromserver.first_name);
                })
            }
        }).catch((err) => {
            console.error(err);
        })
}
retrieveData2();

//POST login successful
const loginSuccess = () => {
    const userEmail = email.value;
    const userPassword = password.value;

    let data = {
        email: userEmail,
        password: userPassword
    }
    fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
        .then(info => {
            console.log(info);
        }).catch(err => console.error(`Stopppppp! ${err}`));
}
loginSuccess();