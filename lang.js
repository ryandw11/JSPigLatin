"use strict";

function onTranslate() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var msg = translateMessage(input.value);
    output.value = msg;
}

function translateMessage(msg) {
    var finalString = "";
    var output = removeEmptySentance(removeEmpty(msg.split(".")));
    for (var i = 0; i < output.length; i++) {
        var temp = removeEmpty(output[i].split(" "));
        var sentance = "";
        var wordOne;
        var wordTwo;
        for (var x = 0; x < temp.length; x++) {
            var word = temp[x];
            var finalWord = "";
            if (word.length > 1) {
                finalWord = word[word.length - 1];
                for (var y = 1; y < word.length - 1; y++) {
                    finalWord += word[y];
                }
                finalWord += word[0].toLowerCase();
            } else {
                finalWord = word;
            }
            if (x == 0) {
                wordOne = finalWord;
                continue;
            }
            if (x === temp.length - 1) {
                wordTwo = finalWord;
                continue;
            }
            sentance += finalWord + " ";
        }
        var finalSentance = capWordTwo(wordTwo) + " " + sentance + capWordOne(wordOne) + ". ";

        finalString += finalSentance;
    }
    return finalString;
}

function capWordTwo(word) {
    var output = "";
    for (var z = 0; z < word.length; z++) {
        if (z === 0) output += word[z].toUpperCase();
        else output += word[z];
    }
    return output;
}

function capWordOne(word) {
    var output = "";
    for (var z = 0; z < word.length; z++) {
        if (z === 0) output += word[z].toLowerCase();
        else output += word[z];
    }
    return output;
}

function removeEmpty(ar) {
    var output = [];
    for (var y = 0; y < ar.length; y++) {
        if (ar[y] != "" && ar[y] != " ") output.push(ar[y]);
    }
    return output;
}

function removeEmptySentance(ar) {
    var output = [];
    for (var y = 0; y < ar.length; y++) {
        if (ar[y].length != 0) output.push(ar[y]);
    }
    return output;
}