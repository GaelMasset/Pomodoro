const personne = {
    prenom: "Jean",
    nom: "Dupont",
    age: "1",
    ville: "Maen Roch",
}

console.log(personne.prenom);
console.log(personne.nom);
console.log(personne.age);
console.log(personne.ville);

personne2 = [{prenom: "John", nom: "Doe", age: 25, ville: "Rouen"}, {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},{prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"} ]
console.log(personne2[2].prenom)


personne2.push({prenom:"Joe", nom:"MAzaf", age:40, ville:"Paris"});

personne2.splice(2,1)
console.log(personne2[personne2.length-1])

numbers = [ 2, 5, 1, 9, 0, 3, 7, 4, 6, 8 ]

console.log(numbers);
console.log(numbers.sort())