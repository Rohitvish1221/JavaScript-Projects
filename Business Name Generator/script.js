/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
//First Word
let first , second , third;
let random = Math.random();
if(random<0.33){
    first = 'Crazy'
}
else if(random>0.33 && random<0.66){
    first = 'Amazing'
}
else{
    first = 'Fire'
}
//Middle Word
if(random<0.33){
    second = 'Engine'
}
else if(random>0.33 && random<0.66){
    second = 'Foods'
}
else{
    second = 'Garments'
}
//Last Word
if(random<0.33){
    third = 'Bros'
}
else if(random>0.33 && random<0.66){
    third = 'Limited'
}
else{
    third = 'Hub'
}

alert(`${first} ${second} ${third}`)
console.log(`${first} ${second} ${third}`)