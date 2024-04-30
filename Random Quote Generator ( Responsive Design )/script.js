function generate(){
    var quotes = {
        "- Deepak Chopra" : '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."', "- Anne Morrow" : '"Him that I love, I wish to be free -- even from me."', "― Jamie Ford" : '"The library is like a candy store where everything is free."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}








// A função `Object.keys()` em JavaScript é utilizada para retornar um array contendo as chaves de um objeto. Essa função recebe como parâmetro o objeto do qual se deseja obter as chaves.

// Por exemplo, suponha que temos o seguinte objeto:

// ```javascript
// const person = {
//   name: 'João',
//   age: 30,
//   city: 'São Paulo'
// };
// ```

// Ao utilizar a função `Object.keys(person)`, obteremos o seguinte array:

// ```javascript
// ['name', 'age', 'city']
// ```

// Dessa forma, podemos utilizar esse array de chaves para realizar iterações sobre o objeto, acessar valores específicos das propriedades ou realizar outras operações com as chaves.

// Em resumo, a função `Object.keys()` serve para obter as chaves de um objeto em forma de array, facilitando o acesso e manipulação das propriedades do objeto.