// 1er ejercicio

var nom = ['L','u','i','s'];
      for (i=0;i<nom.length;i ++) {
    console.log(nom[i]);
  }

//2on ejercicio

var nom = ['A','L','3','J','A','N','D','R','0'];
console.log("Partim del nom "+nom);
for (i=0;i<nom.length;i++) {
    if(isNaN(nom[i])) {
       if(/[aeiouAEIOU]/.test(nom[i])){
         console.log("HE TROBAT LA VOCAL "+nom[i]);
       }else console.log("HE TROBAT LA CONSONANT "+nom[i]);
    }else console.log(" Els noms de persones no contenen el número " +nom[i]);
}

//3er ejercicio
var nom1 = ['A','L','E','J','A','N','D','R','O'];

var mapanom = new Map();

for (i=0;i<nom1.length;i++) {
    if (mapanom.has(nom1[i])) {

     mapanom.set(nom1[i], mapanom.get(nom1[i])+1);

    } else {

      (mapanom.set(nom1[i],1));
  }
}
console.log(mapanom);


//var nom = ['A','L','3','J','A','N','D','R','0']; PUEDES PROBAR CON ESTE ARRAY TB
// map, has, get, set ver videos
/*
var nom = prompt("Introduce la palabra para poder contar");
var contar= 0;
var verif;
for (i=0;i<nom.length;i ++) {
  verif= nom[i];
   for (j=0;j<nom.length;j++){
     if (nom[j] == verif){
       contar++;
     }
   }
   console.log(nom[i]+ ":" +contar);
   contar = 0;
}*/

//4o ejercicio

var name1 = ["L","u",'i','s'];
var surname = ['S','a','u','r','a'];
var fullname = [].concat(name1," ",surname);
console.log(fullname);


