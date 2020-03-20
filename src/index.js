module.exports = function reverse (n) {
var a;
if(n<0){
a = ('' + n).slice(1);
return (('' + a).split('').reverse().join(''));
}
return (('' + n).split('').reverse().join(''));
}
