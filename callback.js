const playThe = (genre) => console.log(genre + " music");  // Arrow function

const watchThe = function (genre) {           // Anonymous function
    return console.log(genre + " movie");
}

// playThe = function funkyFunction(funky) {
//         return console.log(funky + " music")
//     };

playThe("Rock");
watchThe("Action");