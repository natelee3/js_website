'use strict';

//Create container object, header, main title, nav, ul, li
const bodyElement = document.getElementById('body');
const container = document.getElementById('container');
const headerElement = document.createElement('header');
container.append(headerElement);

const mainTitle = document.createElement('h1');
mainTitle.innerText = 'HighOnCoding'
headerElement.append(mainTitle);
const navBar = document.createElement('ul');
const homeTab = document.createElement('li');
homeTab.innerText = 'Home'
const categoriesTab = document.createElement('li');
categoriesTab.innerText = 'Categories'
navBar.append(homeTab, categoriesTab);
headerElement.append(navBar);


//create subcontainer
const subcontainer = document.createElement('div');
subcontainer.classList.add('subcontainer');
container.append(subcontainer);

//create div1, h2, p
const div1 = document.createElement('div');
div1.classList.add('article1');
subcontainer.append(div1);
const subtitle = document.createElement('h2');
subtitle.innerText = 'Curse of the Current Reviews';
const paragraph1 = document.createElement('p');
paragraph1.innerText = 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the user scroll past the application descripton completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three improtant factors: price, screenshot, and reviews.';
div1.append(subtitle, paragraph1);

//create div2, main, footer,
const div2 = document.createElement('div');
div2.classList.add('article');
subcontainer.append(div2);
const div2main = document.createElement('div');
div2main.classList.add('article-main');
const div2footer = document.createElement('div');
div2footer.classList.add('article-footer');
div2.append(div2main, div2footer);
//create h3 subtitle and p
const div2subtitle = document.createElement('h3');
div2subtitle.innerText = 'Hello Watchkit';
const paragraph2 = document.createElement('p');
paragraph2.innerText = 'Last month Apple released the anticipated WatchKit Framework or developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.';
div2main.append(div2subtitle, paragraph2);
//create comments and likes
const div2ul = document.createElement('ul');
div2footer.append(div2ul);
const div2comments = document.createElement('li');
div2comments.innerText = '12 comments'
const div2likes = document.createElement('li');
div2likes.innerText = '124 likes';
div2ul.append(div2comments, div2likes);



//create div3, main, footer
const div3 = document.createElement('div');
div3.classList.add('article');
subcontainer.append(div3);
const div3main = document.createElement('div');
div3main.classList.add('article-main');
const div3footer = document.createElement('div');
div3footer.classList.add('article-footer');
div3.append(div3main, div3footer);
//create subtitle and paragraph
const div3subtitle = document.createElement('h3');
div3subtitle.innerText = 'Introduction to Swift';
const paragraph3 = document.createElement('p');
paragraph3.innerText = 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development, but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.';
div3main.append(div3subtitle, paragraph3);
//create comments and likes
const div3ul = document.createElement('ul');
div3footer.append(div3ul);
const div3comments = document.createElement('li');
div3comments.innerText = '15 comments'
const div3likes = document.createElement('li');
div3likes.innerText = '45 likes';
div3ul.append(div3comments, div3likes);

//Styles font-family, header background color, text color, 
const styleElement = document.createElement('style');
body.append(styleElement)
styleElement.innerText = `
* {
    box-sizing: border-box;
    font-family: Open-sans, sans-serif;
    list-style-type: none;
}

header {
    background-color: #52A6FA;
    color: #FBFDFF;
    display: flex;
    padding: 5px 5px 5px 25px;
    align-items: center;
}

header > h1 {
    font-weight: 500;
}

h3 {
    color: #52A7FA;
    font-weight: 500;
}

.subcontainer {
    margin: 20px 60px 60px 20px
}

.article1 {
    background-color: DDDEE0;
}

.article1 > h2 {
    color: #60656D;
}

div.article1 {
    padding: 10px 10px 10px 10px;
}

.article-footer {
    background-color: #F29119;
    color: white;
}

ul {
    display: flex;
}

li {
    margin: 3px 30px 3px 0;
}
`