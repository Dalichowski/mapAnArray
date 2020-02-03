//Variables exemples nombres
const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [7, 8, 9]

//Variables exemple mots
const d = ['Jean', 'Pierre', 'Paul']
const e = ['Luc', 'Julien', 'Mathieu']
const f = ['Paris', 'Roma', 'Barcelona']

//Map_An_Array :
//Deux Arguments => Un array et une function
function mapArray(arr, func){
    //Définir func comme une fonction
    func();
    //Array de résultat à stocker 
    const res = [];
    //Boucle pour passer la fonction à chaque élément de l'array et copier le résultat dans le nouvel array
    for(let i=0; i<arr.length; i++){
        res[i] = func(arr[i]);
    }
    //Montrer le résultat
    console.log(res)
}

//Exemples de Fonctions à appliquer à chaque élément
function addOne(x){
    return x + 1;
}
function multiplyTen(x){
    return x * 10;
}

function Hello(x){
    return 'Hello ' + x ;
}

function Welcome(x){
    return 'Welcome to ' + x ;
}

mapArray(e, Hello)