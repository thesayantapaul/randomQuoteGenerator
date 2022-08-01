const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
sountBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

// random quote generator function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "loading..";
    // fetching data from a random api
    fetch("https://free-quotes-api.herokuapp.com/").then(res => res.json()).then(result => {
        quoteText.innerText = result.quote;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}



// for listening the quote
sountBtn.addEventListener("click", ()=>{
    let utter = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    utter.lang = 'en-IN';
    utter.pitch = 1.1;
    utter.volume = 2;
    speechSynthesis.speak(utter);
} );


// for copying the quote
copyBtn.addEventListener("click", ()=>{
   alert("Copied");
   navigator.clipboard.writeText(quoteText.innerText);
} );

// for tweeting the quote
twitterBtn.addEventListener("click", ()=>{
   let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
   window.open(tweetUrl, "_blank");
 } );

 
quoteBtn.addEventListener("click", randomQuote);
















