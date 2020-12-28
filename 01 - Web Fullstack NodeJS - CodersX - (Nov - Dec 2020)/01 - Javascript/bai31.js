// Tao 1 password 8 ki tu de nho
var generatePassword = require('password-generator');
var password1 = generatePassword(8, false, /\d/,'hung__')
// false = number, true = abc
console.log(password1);

console.log('=========');

// markdown to HTML
var markdown = require('markdown').markdown;
var markdownText = 'Hello *Coders.Tokyo*!';
console.log(markdown.toHTML(markdownText));
// markdown chuyen doi tu text binh thuong sang HTML, giup dev de doc hon

console.log('=========');

// Tu tim hieu ve mot node module
var randomInt = require('random-int');
console.log(randomInt(1, 100));
// random-int giup tao mot so nguyen ngau nhien
// cu phap : randomInt(min, max)