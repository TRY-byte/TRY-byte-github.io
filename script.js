const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
copyBtn = document.querySelector(".copy"),
synth = speechSynthesis;
function randomQuote(){
    try{
        fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
            quoteText.innerText = result.content;
            authorName.innerText = result.author;
            quoteBtn.classList.remove("loading");
            quoteBtn.innerText = "New Quote";
        });
    }catch(e){
        alert("You Cannot Use This Feature Currently, Error Message: " + e)
    }
    
}

if (window.innerWidth < 500){
    document.getElementById("body").innerHTML = '';
    alert("Cannot Use This Website For Mobile, Sorry For The Inconvienience");
}

quoteBtn.addEventListener("click", randomQuote);