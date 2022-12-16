// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
    cats.push("Ralph");
}


function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const catAppend = [...cats.slice(0, 3), "Broom"];
    return catAppend;
}

function prependCat(){
    const catPrepend = ["Arnold", ...cats];
    return catPrepend;
}

function removeLastCat(){
    return cats.slice(0, 2);
}

function removeFirstCat(){
    return cats.slice(-2);
}