const domExe = function() {
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
}

let container = document.getElementById('container')
const changeRow = function(){
    tableData = document.querySelectorAll('td')
        tableData.forEach((td) => {
            td.innerText = 1
        });
    }
    changeRow()

    const changeHeading = function(){
    let heading  = document.querySelector('h1')
    heading.innerText += '    -- from here Heading Changed from JS'
    }

    changeHeading()
    const createTable = function(){
        let  table = document.querySelector('table')
        for(let j = 1; j <= 3; j++){ 
            let row = document.createElement('tr')
        for(let i = 1; i <= 5; i++){
            const td = document.createElement('td')
            td.innerText =  i*1 + j*10
            row.appendChild(td)
        }
        row.classList.add('test')
        table.appendChild(row)
    }
    }
    createTable()

const redLink = function(){
    let links = document.querySelectorAll('a')
    links.forEach((link) => {
        link.classList.add('red-bg')
        link.style.color = 'white'
        link.style.textDecoration = 'none'
        
    })
}

redLink()

const editList = function(){
    //adding new list in ul
    let ul = document.getElementsByTagName('ul')
    let li = document.createElement('li')
    li.innerText = 'new list created'
    ul[0].appendChild(li)
    //changing the content of a list
    let list = document.getElementsByTagName('li')
     list[3].innerText = 'just trying to change this from javascript'

     //empty a list removed ul 1 at the bottom of the page
  
   ul[1].innerHTML =''

} 
editList()

window.onload = function(){
console.log('the page is loaded')
}

const linkHover = function(){
    let links = document.getElementsByTagName('a')
    for(let link of links){

    }
}


const hideButton = function(eventData){
    let button = document.querySelector('button1')
    if(eventData){
        button.addEventListener('click',hideTable())
    }
}

const hideTable = function(){
    let table = document.querySelector('table')
    if(table.style.display !=='none')
      table.style.display ='none'
      else
      table.style.display = 'inline-block'
}


const tableSum = function(){
    let td = document.querySelectorAll('td')
    let sum = 0;
    for(let i = 0; i < td.length; i++){
            sum += Number(td[i].innerText)
    }
    td[0].innerText = sum + '- SUM OF ALL CELL'
}
tableSum()


const colorButton = function(eventdata){
    let td = document.querySelectorAll('td')
    for(let i = 0; i < td.length; i++){
        td[i].addEventListener = ('click',changeColor(i))
    }
}

const changeColor = function(change){
    let td = document.querySelectorAll('td')
    let a= td[change]
    a.style.backgroundColor = 'red'
}

const addButton = function(){
    let table = document.querySelector('table')
    let tr = document.createElement('tr')
    for(let i = 0; i < 5; i++){
       let  td = document.createElement("td")
       td.innerHTML = `<button> delete </button>`
       tr.appendChild(td)
    }
    table.appendChild(tr)
}
addButton()


const deleteCellButton = function(eventData){
    let heading = document.querySelector('h1')
    heading.addEventListener = ('click', deleteLast())
}

const deleteLast = function(){
    let h1 = document.querySelector('h1')
    let  heading = h1.innerText
    let splitH1 = heading.split('')
    splitH1.pop()
    let newHeading = splitH1.join ('')
    h1.innerText = newHeading
   

}

const deleteData = function(){
    let td =  document.querySelectorAll('td')
}