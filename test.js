const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<h1><span style="visibility: hidden">hello<br><hr>world</span></h1>`);
console.log(dom.window.document.body.innerHTML);
