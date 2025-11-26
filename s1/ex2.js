const personnes = [
  { nom: "Ali", age: 22, estMember: true },
  { nom: "Sara", age: 19, estMember: false },
  { nom: "Youssef", age: 30, estMember: true },
  { nom: "Lina", age: 17, estMember: false },
  { nom: "Amine", age: 25, estMember: true }
];
const nomAgés = personnes
  .filter(personne => personne.estMember === true) 
  .map(personne => personne.nom); 

console.log(nomAgés); 

