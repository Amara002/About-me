'use strict';
let userName = prompt('what\'s your name?' );
alert('welcome dear ' + userName );
let first = prompt('Did you study at the University of Jordan?');
let yes = 'yes';
let no = 'no';
let w = 'Welcome';
if (first.toLowerCase() == 'yes') {
    console.log('Did you study at the University of Jordan?', yes);
} else if (first.toLowerCase() == 'no') {
    console.log('Did you study at the University of Jordan?', no);
} else {
    console.log(w);
}

let second= prompt('Is your age more than 23?');
if (second.toLowerCase() == 'yes') {
    console.log('Is your age more than 23?', yes);
} else if (second.toLowerCase() == 'no') {
    console.log('Is your age more than 23?', no);
} else {
    console.log(w);
}

let third = prompt('Is your departement chemical engineering?');
if (third.toLowerCase() == 'yes') {
    console.log('Is your departement chemical engineering?', yes);
} else if (third.toLowerCase() == 'no') {
    console.log('Is your departement chemical engineering?', no);
} else {
    console.log(w);
}

let forth = prompt('Do you have experience in this field?');
if (forth.toLowerCase() == 'yes') {
    console.log('Do you have experience in this field?', yes);
} else if (forth.toLowerCase() == 'no') {
    console.log('Do you have experience in this field?', no);
} else {
    console.log(w);
}


let fifth = prompt('would you like to study chemical engineering?');
if (fifth.toLowerCase() == 'yes') {
    console.log('would you like to study chemical engineering?', yes);
} else if (fifth.toLowerCase() == 'no') {
    console.log('would you like to study chemical engineering?', no);
} else {
    console.log(w);
}
console.log('Your name is',userName);
alert('welcome in my page ' + userName )