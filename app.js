fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {
        const aName = quote.anime;
        const aCharacter = quote.character;
        const animeQuote = quote.quote;

        const animeName = document.getElementById('a_name');
        const animeCharac = document.getElementById('a_character');
        const quoteElement = document.getElementById('a_quotes');
        
        animeName.innerHTML = aName;
        animeCharac.innerHTML = aCharacter;
        quoteElement.innerHTML = animeQuote;
    })