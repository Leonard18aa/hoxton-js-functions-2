// Using the usual Users and Todo lists:
//   - Prompt the user for a letter
//   - Find all the users who's name contains the letter 
//   - Say hi to those users in the console - but only 1 greeting every 2 seconds.
//   - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.


// first task to prompt a user for a letter

let userText = String(prompt('Enter a letter:'))

// Second task to mach the letter that the user gave to console every user name who contain that leter
let FinalUser = []

for (user of users) {
    if (user.name.includes(userText)) {
        FinalUser.push(user.username)
    } else (
        console.log(`Thi is the list of users who don't start with that letter`)
    )
}
console.log(FinalUser)

// Third task to greed users one time every 2 sec 

setTimeout(function(greet) {console.log(`Hello ${FinalUser}`)}, 2000)

// promt the user

let userIdPrompt = Number(prompt('Type the ID you want to search!'))

if (userIdPrompt === Number) {
    let filterTodos = todos.filter(todosTitle => todos.userId === userIdPrompt)
} else {
    console.log('Please enter a real number')
}


