const inscriptions = [
  { id: 10, nom: 'Rami', filiere: 'DEV' },
  { id: 11, nom: 'Kamali', filiere: 'DEV' },
  { id: 12, nom: 'Fahmi', filiere: 'DEV' },
  { id: 13, nom: 'Chaouki', filiere: 'DEV' }
];




function pureAddInscription(newInscription) {
  return [...inscriptions, newInscription];
}


function pureAddInscriptionAt(index, newInscription) {
  return [
    ...inscriptions.slice(0, index),
    newInscription,
    ...inscriptions.slice(index)
  ];
}




function pureDeleteInscription(id) {
  return inscriptions.filter(ins => ins.id !== id);
}



const notes = [
  { id: 10, module: 'Algorithme', note: 15 },
  { id: 10, module: 'POO', note: 17 },
  { id: 11, module: 'Algorithme', note: 16 },
  { id: 11, module: 'POO', note: 14 }
];




function pureUpdateNote(id, module, note) {
  return [
    ...notes.filter(n => !(n.id === id && n.module === module)),
    { id: id, module: module, note: note }
  ];
}


const personne = { id: 10, nom: 'Rami' };


function addAge(age) {
  return { ...personne, age: age };
}


function addAge2(age) {
  return Object.assign({}, personne, { age: age });
}





console.log("----- ADD -----");
console.log(pureAddInscription({ id: 14, nom: 'Sami', filiere: 'DEV' }));
console.log(pureAddInscriptionAt(1, { id: 15, nom: 'Mouna', filiere: 'DEV' }));

console.log("----- DELETE -----");
console.log(pureDeleteInscription(12));
console.log(inscriptions);

console.log("----- UPDATE NOTE -----");
console.log(pureUpdateNote(10, 'POO', 18));
console.log(notes);

console.log("----- CHANGE OBJECT -----");
console.log(addAge(33));
console.log(addAge2(40));
console.log(personne);
