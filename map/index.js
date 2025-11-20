const personnes = [{nom:"rami", age:33, estmembre:true},
                    {nom:"fatihi", age:24, estmembre:false},
                    {nom:"chakib", age:45, estmembre:true},
                    {nom:"mounir", age:37, estmembre:false}];

const noms = personnes.map(function(per){return per.nom;});
console.log(noms);

//exercice1
let nums = [2,5,8,7,3];
nums = nums.map(function(num){return num * 3;});

console.log(nums);