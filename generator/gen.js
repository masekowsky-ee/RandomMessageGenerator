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
    'MICHAEL JACKSON'
];
let second = [
    'CAN', 'SHOULD', 'MUST', 'NEEDS TO', 'WILL', 'IS GOING TO', 
    'CAN\'T', 'SHOULDN\'T', 'OUGHT NOT TO', 'WON\'T', 'ISN\'T GOING TO'
];
let third = [
    'GO', 'WIN', 'LOSE', 'STAY', 'RUN', 'DIE', 'GO OUT AND PARTY', 'HAVE SOME ICECREAM', 'PRAY TONIGHT', 'HAVE A NIGHTMARE', 'FIND 50 BUCKS',
    'MAKE A DAD JOKES', 'SKIP CLASS TOMORROW', 'GET MORE MONEY'
];

let messageArray = [];

for (i = 0; i < 10; i++){
    let newString = '';
    newString = newString + Math.floor(Math.random()*first.length);
    newString = newString + ' ' + Math.floor(Math.random()*second.length);
    newString = newString + ' ' + Math.floor(Math.random()*third.length);
    messageArray.push(newString);
}

for (message of messageArray) {
    console.log(message);
}