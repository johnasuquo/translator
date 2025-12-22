const text = document.getElementById("text");
const sourceLang = document.getElementById("sourceLang");
const deslang = document.getElementById("desLang");
const display = document.getElementById("display");
const translateBtn = document.getElementById("translateBtn");
const switched = document.getElementById("switchBtn");

translateBtn.addEventListener("click", () => {
    const textValue = text.value;
    const sourceLangValue = sourceLang.value;
    const deslangValue = deslang.value;

    const url = `https://api.mymemory.translated.net/get?q=${textValue}&langpair=${sourceLangValue}|${deslangValue}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

         display.innerHTML = data.responseData.translatedText;   
         console.log(data);
        })
})

