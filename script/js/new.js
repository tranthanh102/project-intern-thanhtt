/* var mouse = {
    weight: 0.2,
    getWeight: function() {
        return this.weight;
    }
};

function Mouse(color, weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
}
Mouse.prototype.sleep = function() {
    console.log(this.color + 'Sleeping zzz...');
};
var jerry = new Mouse('Orange', 20);
var mickey = new Mouse('blue', 20);
jerry.sleep();
mickey.sleep();
========================================================================================================
var myDog = { name: 'Dan', age: 20, dead: false };
var myDogString = JSON.stringify(myDog);
console.log(myDogString);
=======================================================================================================
var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
var readlineSync = require('readline-sync');
var pet = {};
var name = readlineSync.question('What your name: ');
var gender = readlineSync.question('what is male/female: ');
var weight = readlineSync.question('Weight nang cua ban la: ');
pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);
console.log(pet); */
/* ===================================================================================================
var trafficLight = 'yellow';

function goOrNotInVietNam(LightValue) {
    switch (LightValue) {
        case 'green':
            console.log('Go');
            break;
        case 'yellow':
            console.log('di cham');
            break;
        default:
            console.log('Stop');
            break;
    }
}
goOrNotInVietNam(trafficLight); */
/* ================================================================================
var readlineSync = require('readline-sync');
var fs = require('fs');
var students = [];

function loadData() {

}

function showMenu() {
    console.log('1. Show all students');
    console.log('2. Create a new students');
    console.log('3. Exit & Save');
}

function main() {
    loadData();
    showMenu();
    var option = readlineSync.question('Moi ban nhap: ');
    switch (option) {
        case '1':
            showStudents();
            break;
        case '2':
            showCreateStudents();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log(wrong option);
            break;
    }
}

main(); */
var fs = require('fs');
console.log('start');
fs.readFile('song1.txt', { encoding: 'utf-8' }, function(err, song1) {
    console.log(song1);
});
console.log('end');