let newProm = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        //we say what happens in the success outcome
        resolve("Success");
    } else {
        //we say what happens in the reject outcome
        reject("Failed");
    }
});

//we then pass the value from resolve or reject and we set it to message.
//.then() is executed if Fulfilled/successful.
newProm.then((message) => {
    console.log(`This is in the then block and the status is: ${message}`);
    //.catch() is executed if rejected/failed.
}).catch((message) => {
    console.log(`This is in the catch block and the status is: ${message}`);
    //.then can be chained and will execute regardless of the outcome.
}).then(() => {
    console.log("I will take place regardless of what happened before.");
})

let promprom = new Promise((resolve, reject) => {
    //do something where i request information 
    // compute something
    let a = 1 + 1;
    if (a == 2) {
        // successful outcome
        resolve("Oh great it all went well!");
    }
    else {
        // something went wrong
        reject("It didn't work");
    }
});

//.then()(if successful what should i do)
//.catch ()  ( if failed / rejected what should i do )
promprom.then((message) => {
    alert(`Woohoo let's throw a partyy ${message}`);
}).catch((error) => {
    alert(`oh no something happened: ${error}`);
});


let myPromise = new Promise((resolve, reject) => {
    let b = 2 + 3;
    if (b == 5) {
        resolve("good");
    } else {
        reject("bad");
    }
});
myPromise.then((msg) => {
    console.log(`resolved!! ${msg}`);
}).catch((err) => {
    console.error(`rejected!! ${err}`);
})