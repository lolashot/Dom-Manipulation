let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
      quote: `'dont live someoneelse life'`,
      person: `seven jobs`
    }, {
        quote: `'dont live someoneelse life live'`,
        person: `alber eiser`
    }, {
        quote: `'dont live someoneelse life live ours'`,
      person: `arisole`
    }, {

        quote: `'dont live someoneelse life be ourself'`,
      person: `ghandhi`
    }, {
        quote: `'dont live someoneelse life alwas'`,
      person: `franklin ben`
    }, {
        quote: `'dont live someoneelse life be ou'`,
      person: `oprah winfre`
    }, {
        quote: `'dont live someoneelse life be differen'`,
        person: `conficus`
    },

];

btn.addEventListener('click', function(){
    
    let random= Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})


