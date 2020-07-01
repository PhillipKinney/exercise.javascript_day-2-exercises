

let myArray = new Array(10)

for(let addNumber=0; addNumber < myArray.length; addNumber++){
   
        myArray[addNumber] = 1
   
}

//console.log(myArray)


do{
    prompt(cellIndex=prompt("Enter Index"), newValue=prompt("Enter New Value"));
}
while(cellIndex <=0 || cellIndex > 10);
   
    myArray[cellIndex]=[newValue]


   document.write(myArray)