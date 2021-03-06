// Zadnie 1. Dana jest tablica:
//
// Jak widać elementami tej tablicy są obiekty reprezentujące pewne przedziały na
// osi liczbowej. Należy określić jaka jest największa ilość jednocześnie
// nakładających się na siebie odcinków. Na problem można spojrzeć jak na serię
// lotów mających początek i koniec w określonych momentach czasu. Należy określić
// minimalną ilość samolotów potrzebnych do wykonania powyższych lotów. Należy
// założyć, że nie jest wymagana przerwa pomiędzy odcinkami wykonywanymi przez
// samolot.

var parts = [
{'from': 3, 'to': 5},
{'from': 4, 'to': 7},
{'from': 6, 'to': 8},
{'from': 2, 'to': 10},
{'from': 1, 'to': 5},
{'from': 5, 'to': 10},
{'from': 9, 'to': 10}
];

// var parts = [
// {'from': 12345, 'to': 13455},
// {'from': 12745, 'to': 13755},
// {'from': 2345, 'to': 2755},
// {'from': 5345, 'to': 9455},
// {'from': 2700, 'to': 5240},
// {'from': 345, 'to': 13455},
// {'from': 11345, 'to': 13000}
// ];
// //Change objects to arrays of numbers, each starting from "from" and ending with "to".
function objectsToArrays(object) {
    for (var i = 0; i < object.length; i++) {
        var newArray = [];
        for (var j = object[i].from; j <= object[i].to; j++) {
            newArray.push(j);
        }
        object[i] = newArray;
    };
};

objectsToArrays(parts);

// Compare content of array with kontet of next array
var overlap = [];
function compareArraysOfArray(parts) {
    var counter = 1;
    for (var a = 0; a < parts.length; a++) {
        var row = [];
        for (var b = 0; b < parts[a].length; b++) {
            for (var c = 0; c < parts.length; c++) {
                for (var d = 0; d < parts[c].length; d++) {
                    //Comparing only parts that weren't compared yet
                    if (a !== c && a < c) {
                        var endEdge = parts[a].length-1;
                        if (parts[a][b] === parts[c][d] && !(parts[a][endEdge] === parts[c][0])) {
                            row.push(c);
                        }
                    }
                }
            }
            overlap[a] = row;
        }
    };
};

compareArraysOfArray(parts);
//console.log(overlap);

var flightOverlapsWith = [];
var flightDoesNotOverlapWith = [];

function clean (el)   {
    for (var i = 0; i < el.length; i++) {
        var row = [];
        var row2 = [];
            for (var k = 0; k < el.length; k++) { //7, sprawdż, czy na bank el
                if (!(el[i].includes(k)) && i !== k && i < k) {
                        row.push(k);
                } else if (i !== k && i < k) {
                        row2.push(k);
                }
            }

        flightDoesNotOverlapWith[i] = row;
        flightOverlapsWith[i] = row2;
    }
};

clean(overlap);

planes = [];
function howManyPlanes () {
    var free = flightDoesNotOverlapWith;
    planeCounter = 0;
    for (var i = 0; i < free.length; i++) {
        if(!(planes.includes(i))) {
            planeCounter++;
            planes.push("Plane will serve flights:")
            planes.push(i);
            for (var j = 0; j < free[i].length; j++) {
                if(!(planes.includes(free[i][0]))) {
                    planes.push(free[i][0]);
                }
                y = free[i][j];
                if(free[y].includes(free[i][j+1]) && !(planes.includes(free[i][j+1]))) {
                    planes.push(free[i][j+1]);
                }
            }
        }
    }
};

howManyPlanes();
console.log(planes);
console.log(planeCounter);
