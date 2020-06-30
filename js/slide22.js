
let userInput= prompt("Enter A Number from 1-100")

while (userInput < 0 || userInput > 100 ){
    userInput=prompt("Re-enter your number")
}
     
document.write(parseInt(userInput * userInput))