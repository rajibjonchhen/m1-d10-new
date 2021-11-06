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


const checkLongest = function(array1,array2){
if(array1.length > array2.length)
    return ('the first array is longer'+array1)
else
    return ('The second array is longer' + array2)
}

a =['13','32','34','34','436','78','35','fw','234','av']
b =['a','s','d','e','3','3','4','5','f','2','5','5','a']
console.log(checkLongest(a,b))



const arrayBigSum = function(array1,array2){
    let array1sum = 0
    let array2sum = 0
    for(let i = 0; i < array1.length; i++)
    array1sum += array1[i]
    for(let i = 0; i < array1.length; i++)
     array2sum += array2[i]
    if(array1sum > array2sum)
        return ('The sum of the first array is bigger which is\t' + array1sum)
        else if(array1sum < array2sum)
        return ('The sum of the second array is bigger which is\t' + array2sum)
        else if(array1sum === array2sum)
        return ('There sum are equal\t'+ array1sum)
        else 
        return('Not a number')
    }

    console.log(arrayBigSum(arrayOfArray[1],arrayOfArray[2]))

    
    const readData = function(){
        let container = document.getElementById('container')
        let tableData = document.getElementsByTagName('td')
        let data
        for(let i = 0; i < tableData.length; i++){
           data = tableData[i].readData
            console.log(data)
        }
    }

    const changeHeading = function(){
        let heading = document.querySelector('h1')
        heading.innerText = 'Rajib'
    }
   changeHeading()

   