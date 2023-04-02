function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read

    this.info = function(){
        console.log(title, author, pages, read)
    }

}

let maindiv = document.getElementsByClassName('verti')
let aaddedButton = document.getElementsByClassName('addedbooks')


  
let titleInput =  document.getElementsByClassName('title')
titleInput[0].setAttribute('id', 'title')
let authorInput = document.getElementsByClassName('author')
authorInput[0].setAttribute('id', 'author')


let titleId = document.getElementById('title')
let authorId = document.getElementById('author')

let noPages = document.getElementById('nopages')
let read = document.getElementById('read')

let formD =  document.getElementsByClassName('form')
let buttonNew = document.getElementsByClassName('newbook')
let addBook = document.getElementById('addB')
formD[0].setAttribute('id', 'formid')
let formID = document.getElementById('formid')

let removeButton = document.getElementById('remove')

let optionToggle = document.getElementById('options')

let edit = document.getElementById('edit')
var textt = read.options[read.selectedIndex].text;
console.log(typeof(textt))




addBook.addEventListener('click', () =>{

   var shownId = document.createElement('div')
   let editToggle = document.createElement('button')
   let remove = document.createElement('button')
   remove.innerHTML = 'remove'
   remove.classList.add('remove')
   editToggle.innerHTML = 'complete'
   let div = document.createElement('div')
   


   shownId.setAttribute('class', 'newddd')
   
maindiv[0].appendChild(shownId)




  let NewBook = {
    title: titleId.value,
    author: authorId.value,
    noPages: noPages.value,
    read: read.value
  }


let emptyArr= []
  for(let u in NewBook){
    emptyArr.push(NewBook[u])
  } 
 
  titleId.value = ''
  authorId.value = ''
  noPages.value = ''
  read.value = ''

let addedBook = new Book(...emptyArr)

    let string = JSON.stringify(addedBook)  
    shownId.innerHTML = string.replace(/[{}]/g, '')
    .replace(/[""]/g, '\n')
    .replace(/[',']/g, '<br>')
    shownId.style.display = 'block'
    shownId.appendChild(div)
    div.appendChild(remove)
    div.appendChild(editToggle)
    
 
formID.style.display = 'none'

shownId.addEventListener('click', function(e){
    if (e.target.matches('button.remove')) {
       shownId.style.display = 'none'
       
    }
    })



editToggle.addEventListener('click', () => {
    if(shownId.innerHTML.includes('yes')){
        shownId.innerHTML = shownId.innerHTML.replace('yes', 'not-yet')
    }else if(shownId.innerHTML.includes('not-yet')){
        shownId.innerHTML = shownId.innerHTML.replace('not-yet', 'yes')
    }
 })

 remove.addEventListener('click', () => {
    
        shownId.remove()
     
})


aaddedButton[0].addEventListener('click', () => {
  if(shownId.innerHTML !== ''){
    formD[0].style.display = 'none'
    shownId.style.display = 'block'
  }
})

buttonNew[0].addEventListener('click', () => {
  formD[0].style.display = 'block'
  shownId.style.display = 'none'
  console.log('cliced')

})

})


 
buttonNew[0].addEventListener('click', () => {
    formD[0].style.display = 'block'
    shownId.display = 'none'
    console.log('cliced')

})

aaddedButton[0].addEventListener('click', () => {
  if(shownId.innerHTML !== null){
    formD[0].style.display = 'none'
  }
})

 
       


  