function myFunction(){
 var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
console.log ("Sebelumnya : " + angka);

angka = angka.sort();
return angka;
}

console.log("Ascending : " + myFunction());


var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
angka.sort(function(a, b){
    return b - a;
    
})

console.log(angka);