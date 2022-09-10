// variables

let button = document.querySelector('#Tbtn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person-area');

// quotes array
const quotes = [{

    quote   : `“The only thing we have to fear is fear itself.”`,
    person  : `Franklin Rousevelt`
},{
    quote   : `Your life is designed to get the results you are getting right now. 
                Whether you realize it or not, you are the architect`,
    person  : `Shane Parrish`
},{
    quote   : `"If you change the way you look at things, the things you look at change."`,
    person  : `Safoan Touil`
},{
    quote   :`" The things you think about determine the quality of your mind. Your soul takes the color of your thoughts."`,
    person  :`Mohammed Ali`
},{
    quote   :`"The more a person limits himself, the more resourceful he becomes."`,
    person  :`Soren Kierkegaard`
},]


// add a listener to our button 

button.addEventListener('click',function(){

    let random = Math.floor(Math.random() * quotes.length)
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})