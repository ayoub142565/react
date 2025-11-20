const personnes = [{nom:"rami", age:33, estmembre:true},
                    {nom:"fatihi", age:24, estmembre:false},
                    {nom:"chakib", age:45, estmembre:true},
                    {nom:"mounir", age:37, estmembre:false}];

const noms = personnes.map(function(per){return per.nom;});
console.log(noms);

//exercice1 
let nums = [2,5,8,7,3];
newnums = nums.map(function(num){return num * 3;});

console.log(newnums);

//reduce
const clients = [{nom:"rami", montant:4500},
                    {nom:"karimi", montant:2300},
                    {nom:"chaouki", montant:5500},
                    {nom:"ramooun", montant:7700}];

const totalMontant = clients.reduce(function(total, client){
    console.log(total, client.montant);
    return (total < client.montant ? client.montant : total);
}, 0);

console.log(totalMontant);