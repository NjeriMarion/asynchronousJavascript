// Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should 
// log the message to the console after the specified delay time.

function delayedWord(word, time){
    setTimeout(() =>{
        console.log(word)
    },time)
}
delayedWord("This is a string from the first question", 3000)


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
// Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

let userIds = [{UserId:01, UserName : "Mary"}, {UserId:02, UserName:"Maria"}, {UserId:03, UserName:"Ndemo"}, {UserId:04, UserName:"Mwangi"}, {UserId:05, UserName:"Loise"}]
function getUserData(id){
    let output = new Promise((resolve, reject) => {
        for(let i =0 ; i <=userIds.length; i++){
            if(userIds[i].UserId === id){
                resolve(userIds[i].UserName)
            }
            else{
                reject("The user was not found")
            }
        }   
    })
    return output
}
console.log(getUserData(01))

// You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success
//  message if the task is successful, and a custom error message if there's an error.

let functionSuccess = true;
let performTask = new Promise((resolve, reject) => {
    if(functionSuccess){
        resolve("The task was a success")
    }
    else{
        reject("The task was not a success")
    }
})
console.log(performTask)