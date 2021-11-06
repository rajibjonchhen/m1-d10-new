let x = 'John'
let y = 'Doe'
console.log('John<>Doe')

let profile = {
name: 'Loreal', surname:'Ipsum', email:'loreal@ipsum.com'    
}

delete profile.email;
console.log(profile)


let js = ['datatypes','primitive ','numbers','string','boolean','undefined','null','function','array','object']
for(let i = 0; i< 10; i++){
    console.log(js[i])

}

let arrayOfRandomNumber = []
for(let i =0; i < 100; i++){
    let randomNumber = Math.floor(Math.random()*100)
    arrayOfRandomNumber.push(randomNumber)
}
console.log(arrayOfRandomNumber)

let biggestNumber = arrayOfRandomNumber[0]
let smallestNumber =arrayOfRandomNumber[0]
for(let i = 1; i < arrayOfRandomNumber.length; i++){
    if(biggestNumber < arrayOfRandomNumber[i])
        biggestNumber = arrayOfRandomNumber[i]
}
console.log('Biggest Number --', biggestNumber)

for(let i = 1; i < arrayOfRandomNumber.length; i++){
    if(smallestNumber > arrayOfRandomNumber[i])
        biggestNumber = arrayOfRandomNumber[i]
}
console.log('Smallest Number --', smallestNumber)


let arrayOfArray = []

for(let i = 0; i < 10; i++){
    let array = []
    

    for(let j = 0; j < 10; j++){
        randomNumber = Math.floor(Math.random()*100)
        array.push(randomNumber)
    }
    
    arrayOfArray.push(array)
}
console.log(arrayOfArray)
