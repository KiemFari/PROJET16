alert("Le fichier fonctionne!")

//ceci est un commetaire

/*ceci 
est 
un 
commentaire*/
   /* faire appel a la console*/
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");

/*integrer une variable*/

let variable = "coucou";
console.log(variable);

let maVariableSuperCool = "KamelCase";

console.log(maVariableSuperCool);

var unTexte = "voici un texte";

console.log(unTexte);

unTexte = "Nouveau texte...";

console.log(unTexte);

const prenom = "Fari";

console.log(prenom);

let unChiffre = 24;

unChiffre = 12;

console.log(unChiffre);


let chaine = "je suis l\\'autre chaine de caractere";
console.log(chaine);

let chiffre = 24;

let nouvelleChaine = "Le chiffre attendu est : " +  chiffre  +  "degres";

console.log(nouvelleChaine);

/*let chiffre = 47;

let nouvelleChaine = 'Le chiffre attendu est : ${47} degres';

console.log(nouvelleChaine);*/

let string = "Je suis une chaine";
let number = 24; 
let boolean = true;
let array = ["je", "suis", 24, false];
let objet ={
    prenom: "ridoss",
    age: 34,
    ville: "Londres"
};
console.log(string);
console.log(boolean);
console.log(number);
console.log(typeof array);
console.log(objet);

let arbre = null;
console.log(arbre);

/*let bois;

console.log(typeof bois);*/

console.log(4 + 5);

console.log(4 - 5);

console.log(4 / 5);

console.log(4 * 5);

console.log(4 ** 5);

 /*let total  = 0;

total = total + 1;
console.log(total );*/

let total = 2;
let x = 4
x++;

total = ++x;

console.log(total);

/*let total = 0;

total ++ 5;

console.log(total);*/

let c= 6;
let k =5;

if (c < k) {
    console.log("c est inferieur à k");
}else{
    console.log("c est superieur à k");
}

/*let x = 6;
let y = 5;
if (x <= y ); {
    console.log("x est inferieur à y");
    console.log("x est superieur à y");
}*/

let e = 4;
let y = 4;

if (e === y || e > 3) {
    console.log("True !");


}else if (e == y) {
    console.log("e et y sont egaux en valeur");
}else {
    console.log("e et y ne sont pas du tout egaux");
}
let g = 5;
let s = "5"

if (g != s) {
    console.log("True !");
}else {
    console.log("false !");
}
let u = 4;
let i = 5;

if (u === i && u > 3) {
    console.log("True !");
}else{
    console.log("false !");
}
let b= 5;
let t = "5"

if (t == b && t > 3 && b< 10) {
    console.log("True !");
}else{
    console.log("false !");
}
let n = 4;
let m = 5;

if (n === m) {
    console.log("True !");
}else if (n == m) {
    console.log("n et m egaux en valeur");

} else {
     console.log("n et y ne sont pas du tout egaux");
}
let v = 6;
let q = "5"

if (v === q) {
    console.log("True !");
}else if (v == q) {
    console.log("v et q egaux en valeur");

} else {
    
    console.log(v + "et" + q + "ne sont pas du tout egaux");
    console.log('${v} et  ${q}  ne sont pas du tout egaux');
}
let h = 5;
let o = "5";

if (h == o) console.log("True !");

let r = 5;
let z = "5";

r == z ? console.log("True !") : console.log(false);

/*pour declarer une fonction*/

function faireQuelqueChose() {
  console.log("je fais un truc");
  console.log("Trop cool");  
} 
faireQuelqueChose();

const  faireUneTache = (tache) => {
    console.log( " je fais : " + tache); 
};
faireUneTache('les courses')
faireUneTache('le menage')

function calc(x, y) {
  return  x + y;
}
calc(4, 9);
(function maFunction() {
    console.log('je ne joue toute seule');
})();
(function (){
    console.log('je ne joue toute seule');
})();
(() => {
    console.log("je ne joue aussi toute seule");
})();
function add2(){
    let a = 4;
    console.log(a);
    return a + 2;
}
add2();
        /*comment rendre des donnees à l'ecran*/
let totals = 0;

function addition(x, y) {
    totals = x + y
    return  totals;
    /*addition(3, 7)*/
    console.log(totals);
}
/*let total = 0;
function addition(x){
    total += x;
    return total;
}
addition(3)*/
 
function soustraction(x){
    total -= x;
    return total;
}
/*function division(x)
if (total === 0) {
   return(total = x); 
}else{
    total /= x;
    return total;
}*/

function multiplication(x){

    if (total === 0) {
      return  (total = x);
    }else{
    total *= x;
    return total;
    }
}
/*function reset() {
    total = 0;
}*/





