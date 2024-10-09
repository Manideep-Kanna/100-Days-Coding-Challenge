"use strict";
const helloKanna = (firstName) => {
    console.log(firstName);
};
helloKanna("FirstName");
const sum = (a, b) => {
    return a + b;
};
console.log(3, 4);
function customTimeOut(fn) {
    setTimeout(fn, 1000);
}
customTimeOut(() => {
    console.log("Hello Brother");
});
