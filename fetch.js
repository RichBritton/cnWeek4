



async function fetchBuzzWords()
{
    await fetch("https://corporatebs-generator.sameerkumar.website/")
    .then(res =>
    {
        return res.json();
    })

    .then(data => 
    {
        let phrase = data.phrase.toString().toUpperCase(); //<- manipulating data before logging
        console.log(phrase);
    })

    .catch(error => console.log("error"))
}



fetchBuzzWords();