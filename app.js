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
}

objectsToArrays(parts);


//Compare length of one array with length of others
// for (var k = 0; k < parts.length-1; k++) {
//     for (var m = 0; m < parts.length; m++) {
//         if (k !== m && k < m) {
//             console.log("Długość " + k + " to: " + parts[k].length + ", a długość następnego, czyli " + m + " to " + parts[m].length);
//         }
//     }
// };


// Compare content of array with kontet of next array
function compareArraysOfArray(parts) {
    var counter = 1;
    for (var a = 0; a < parts.length; a++) {
        for (var b = 0; b < parts[a].length; b++) {
            for (var c = 0; c < parts.length; c++) {
                for (var d = 0; d < parts[c].length; d++) {
                    // console.log("Powónujemy " + parts[a][b] + " do " + parts[c][d]);
                    if (a !== c && a < c) {
                        // console.log("Powónujemy " + parts[a][b] + " do " + parts[c][d]);
                        // if (parts[a][b] === parts[c][d]) {
                        //     console.log("Nakłada się tabela " + a + " element " + b + " z tabelą " + c + " elementem " + d);
                        // }
                    }
                }
            }
        }
    };
}

compareArraysOfArray(parts);
