const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
sountBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

// random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "loading..";
    fetch("https://free-quotes-api.herokuapp.com/").then(res => res.json()).then(result => {
        console.log(result)
        quoteText.innerText = result.quote;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    
    
    });
}




sountBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance();
} );

quoteBtn.addEventListener("click", randomQuote);
















