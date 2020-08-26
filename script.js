function getText () {
let  input = document.getElementById('editor');
let output = document.getElementById('preview');
if(input != null && output != null) {
    output.innerHTML = marked(input.value);
}
}
function setDefault () {
    let input = document.getElementById('editor')
    input.value = 
    `
# Hello!
## My name is Matvey.
### Today you will see how you can use markdown!
[Here you can find more of my projects](https://github.com/MotyaBolt)
> This line is part of the same quote.

Block of code: \`<h1></h1>\`

More code: 

\`\`\`
function sayHello () {
console.log('hello!')
}
\`\`\`

Lists: 
1. Item 1
    2. Item 2
    3. Item 3
* Item 1
    * Item 2
    * Item 3

Table:

One | Two | Three
------------ | ------------- | ------------- 
Four | Six | Seven

You can also make **bolded** text!

Image: 

![logo-markdown](logo.png)
`;
    getText();
}