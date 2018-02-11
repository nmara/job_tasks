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
{'from': 7, 'to': 9}
];

//Change objects to arrays of numbers, each starting from "from" and ending with "to".
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
                            // console.log("Nakłada się tabela " + a + " z tabelą " + c);
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
