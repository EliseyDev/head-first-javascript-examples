console.log("---------- method indexOf ----------");

var phrase = "the cat in the hat";
var index = phrase.indexOf("cat");
console.log(index);

index = phrase.indexOf("the", 5);
console.log(index);

index = phrase.indexOf("dog");
console.log(index);

console.log("---------- method substring ----------");

var data = "name|phone|address";
var val = data.substring(5, 10);
console.log(val);

val = data.substring(5);
console.log(val);

console.log("---------- method split ----------");

data = "name|phone|address";
var vals = data.split("|");
console.log(vals);

console.log("---------- method toLowerCase & toUpperCase ----------");

var cases = "String WitH bIg and SmaLl lEtTers";
var result = cases.toLowerCase();
console.log(result);
result = cases.toUpperCase();
console.log(result);

console.log("---------- method replace ----------");

var repl = "I can't do it";
result = repl.replace("can't", "can");
console.log(result);

console.log("---------- method slice ----------");

var slicing = "What do you think about this?";
result = slicing.slice(5, 17);
console.log(result);