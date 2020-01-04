# 301-practice-1

__Q1:What library do we use in Node on the server side to allow us to create and run an HTTP server that obeys the HTTP protocol?__
The Answer : For node we need these two depd ( Express and NPM ) only.


**Q2: Explain this snippet of code from a server-side application?**

**response.status(200).send('Hello World!');**
The Answer : This line of code means the code succesfully runs with status 200 , once runs will show up the string on send method .


__Q3 : Write a function that takes an array of numbers as an argument and outputs the square of each number in that array.__
The Answer : 

let numArr = [2,4,6,8,10];

let sqrArr = numArr.map(n=> 
{
return n*n;
} );

console.log(sqrArr);