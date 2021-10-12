/*
 * Add the contents of your index.js file from Assignment 3 here to see the
 * interactions you implemented.  This is not required for your grade on this
 * assignment, but it'll allow you to have the full experience of the site
 * as we've implemented it so far.
 */

alert('JS successfully loaded.');
var twitsContainer = document.getElementsByClassName('twit-container')
var Originaltwits = document.querySelectorAll('article.twit')


function generateTwit(twitU, author){
    var newTwit = document.createElement('article')
    newTwit.classList.add('twit')

    var twitIcon = document.createElement('div')
    twitIcon.classList.add('twit-icon')
    newTwit.appendChild(twitIcon)

    var bullhorn = document.createElement('i')
    bullhorn.classList.add('fas')
    bullhorn.classList.add('fa-bullhorn')
    twitIcon.appendChild(bullhorn)

    var twitContent = document.createElement('div')
    twitContent.classList.add('twit-content')
    newTwit.appendChild(twitContent)

    var twitText = document.createElement('p')
    twitText.classList.add('twit-text')
    twitContent.appendChild(twitText)

    twitText.textContent = twitU

    var twitAuthor = document.createElement('p')
    twitAuthor.classList.add('twit-author')
    twitContent.appendChild(twitAuthor)
    
    var twitA = document.createElement('a')
    twitA.href = '#'
    twitA.textContent = author
    twitAuthor.appendChild(twitA)

    twitsContainer[0].appendChild(newTwit)
    Originaltwits = document.querySelectorAll('article.twit')

}
var twitButton = document.getElementById('create-twit-button')
var twitSearchButton = document.getElementById('navbar-search-button')
var twitSearch = document.getElementById('navbar-search-input')
var twitCancel = document.getElementsByClassName('modal-cancel-button')
var twitAccept = document.getElementsByClassName('modal-accept-button')
var twitX = document.getElementsByClassName('modal-close-button')
var newTwitbox = document.getElementById('twit-text-input')
var newAuthorbox = document.getElementById('twit-attribution-input')

function twitButtonClick() {
    document.getElementById('modal-backdrop').style.display = 'block'
    document.getElementById('create-twit-modal').style.display = 'block'
}

function twitCancelButtons(){
    document.getElementById('modal-backdrop').style.display = 'none'
    document.getElementById('create-twit-modal').style.display = 'none'
    newTwitbox.value = ''
    newAuthorbox.value = ''

}

function twitPost(){
    if ((newTwitbox.value == '')&&(newAuthorbox.value == '')){
        window.alert("No Twit Text Provided and No Author Provided!")
        return
    }
    if (newTwitbox.value == ''){
        window.alert("No Twit Text Provided!")
        return
    }
    if (newAuthorbox.value == ''){
        window.alert("No Twit Author Provided!")
        return
    }
    generateTwit(newTwitbox.value, newAuthorbox.value)
    twitCancelButtons()
}


function standardSearch(){
    for(var i = 0; i < Originaltwits.length; i++){
        twitsContainer[0].appendChild(Originaltwits[i])
    }
    var userInput = twitSearch.value.toLowerCase()
    var twits = document.getElementsByClassName('twit')
    var twitText = document.getElementsByClassName('twit-text')
    var twitAuthor = document.getElementsByClassName('twit-author')
    for(var i = twits.length-1; i >= 0; i--){
        var twitInput = twitText[i].textContent.toLowerCase()
        var authorInput = twitAuthor[i].textContent.toLowerCase()
        if((twitInput.indexOf(userInput) == -1) && (authorInput.indexOf(userInput) == -1)) {
            twits[i].remove()
        }
    }
}




twitSearch.addEventListener('input', standardSearch)
twitAccept[0].addEventListener('click', twitPost)
twitCancel[0].addEventListener('click', twitCancelButtons)
twitX[0].addEventListener('click', twitCancelButtons)
twitButton.addEventListener('click', twitButtonClick)
twitSearchButton.addEventListener('click', standardSearch)