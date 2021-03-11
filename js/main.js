const person = {
    name: 'Anna',
    address: 'Riga',
    number: 13,
};

console.log(`Hello, my name is ${person.name}, I live in ${person.address}, and my favourite number is ${person.number}!`);

const cars = ['Vaz', 'Zaz', 'Gaz', 'Uaz', 'Maz'];

for (i = 4; i > -1; i--) {
    console.log(`Car number ${i+1} is: ${cars[i]}`)
}