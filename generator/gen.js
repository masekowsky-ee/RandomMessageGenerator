let first = [
    'I',
    'YOU',
    'HE','SHE','IT',
    'WE',
    'YOU',
    'THEY',
    'A RANDOM PERSON',
    'MY BROTHER',
    'YOUR MOM',
    'THE BUS DRIVER IN MIDDLE SCHOOL',
    'MY BOSS',
    'MICHAEL JACKSON',
    'THE NEIGHBOURS',
    'THE DEMOCRATIC REPUBLIC OF KONGO'
];
let second = [
    'CAN', 'SHOULD', 'MUST', 'OUGHT TO', 'WILL', 
    'CAN\'T', 'SHOULDN\'T', 'OUGHT NOT TO', 'WON\'T',
];
let third = [
    'GO', 'WIN', 'LOSE', 'STAY', 'RUN', 'DIE', 'GO OUT AND PARTY', 'HAVE SOME ICECREAM', 'PRAY TONIGHT', 'HAVE A NIGHTMARE', 'FIND 50 BUCKS',
    'MAKE A DAD JOKES', 'SKIP CLASS TOMORROW', 'GET MORE MONEY', 'FORGET TO HAVE BREAKFAST', 'HEAR THE ALARM TOMORROW MORNING'
];

let messageArray = [];

console.log('This is the oracle of Okemos.')

for (i = 0; i < 10; i++){
    let newString = '';
    newString = newString + first[Math.floor(Math.random()*first.length)];
    newString = newString + ' ' + second[Math.floor(Math.random()*second.length)];
    newString = newString + ' ' + third[Math.floor(Math.random()*third.length)];
    messageArray.push(newString);
}

for (message of messageArray) {
    console.log('Oh great oracle, can you tell us something wise?')
    console.log(message);
}

console.log('Thank you for your time...');