'use strict';


let userName = prompt('what\'s your name?');
while (!userName) {
    userName = prompt('please write your name');
}
alert('welcome dear ' + userName);

let score = 0;


let first = '';

function q1(first) {
    first = prompt('Did I study at the University of Jordan?');
    while (!first) {
        first = prompt('please answer only yes/y or no/n withoutspaces for previous question');

    }
    first = first.toLowerCase();
    if (first == 'yes' || first == 'y') {
        alert(first + ' I studied chemical engineering there')
        score++;
    } else if (first == 'no' || first == 'n') {
        alert(first + ' you didn\'t guess')
    } else {
        alert('your answer was wrong')
    }
    return (first);
}
q1(first);


let second = prompt('Is my age more than 23?');
function q2(second) {
    while (!second) {
        second = prompt('please answer only yes/y or no/n withoutspaces for previous question');
    }
    second.toLowerCase()
    if (second == 'yes' || second == 'y') {
        alert('my age is 26')
        score++;
    } else if (second == 'no' || second == 'n') {
        alert('it isn\'t interested')
    } else {
        alert('your answer was wrong')
    }
    return (second);
}

q2(second);

let third = prompt('Is my departement chemical engineering?');
function q3(third) {
    while (!third) {
        third = prompt('please answer only yes/y or no/n withoutspaces for previous question');
    }
    third.toLowerCase()
    if (third == 'yes' || third == 'y') {
        alert('you can continue')
        score++;
    } else if (third == 'no' || third == 'n') {
        alert('never mind dear')
    } else {
        alert('your answer was wrong')
    }
    return (third);
}
q3(third);

let forth = prompt('Do you have experience in this field?');
while (!forth) {
    forth = prompt('please answer only yes/y or no/n withoutspaces for previous question');
}
forth.toLowerCase()
if (forth == 'yes' || forth == 'y') {
    alert('I have one year of experience')
    score++;
} else if (forth == 'no' || forth == 'n') {
    alert('I have one year of experience')
} else {
    alert('your answer was wrong')
}


let fifth = prompt('DO I like  chemical engineering?');
while (!fifth) {
    fifth = prompt('please answer only yes/y or no/n withoutspaces for previous question');
}
fifth.toLowerCase()
if (fifth == 'yes' || fifth == 'y') {
    alert('I lik my field')
    score++;
} else if (fifth == 'no' || fifth == 'n') {
    alert('you\'re wrong, I like my field')
} else {
    alert('sorry to bother you')
}

for (let i = 0; i < 4; i++) {
    let sixth = prompt('can you guess how many materials should be passed in the chemical engineering departement? ');

    if (sixth < 50) {
        alert('too low');
    } else if (sixth > 50) {
        alert('too high');
    } else if (sixth == 50) {
        alert('you won!')
        score++;
        break;
    } else {
        alert('good')
    }
}
alert('the correct answer is 50');






for (let i = 0; i < 6; i++) {
    let seventh = prompt('give me unit of mass in general?')
    let letters = ['kg', 'g', 'lbm', 'pound', 'ton']
    let correct = false
    for (let j = 0; j < letters.length; j++) {

        if (seventh == letters[j]) {
            correct = true
            break;
        }
    }
    if (correct == false) {
        alert('that wrong please try again')
    } else {
        alert('that is right')
        score++;
        break;

    }
}
alert('your answer should be either kg, g, lbm, pound, ton ')



alert(`thanks for playing ${userName} your score is ${score} `);
console.log('Your name is', userName);
alert('welcome in my page ' + userName)