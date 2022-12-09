import './css/styles.css';
import home from './home';
import menu from './menu';
import contact from './contact';
import footer from './footer';

const content = document.getElementById('content');

function header() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const heading = document.createElement('h1');
    const div = document.createElement("div");
    const buttonHome = document.createElement("button");
    const buttonMenu = document.createElement("button");
    const buttonContact = document.createElement("button");

    nav.setAttribute('id', 'nav');
    heading.setAttribute('id', 'brand');
    div.setAttribute('id', 'nav-buttons');

    heading.innerHTML = "Korean Fried Chicken";
    buttonHome.addEventListener('click', () => {componentTab(home)});
    buttonHome.innerHTML = "Home";
    buttonMenu.addEventListener('click', () => {componentTab(menu)});
    buttonMenu.innerHTML = "Menu";
    buttonContact.addEventListener('click', () => {componentTab(contact)});
    buttonContact.innerHTML = "Contact";

    div.append(buttonHome, buttonMenu, buttonContact);

    nav.append(heading, div);
   
    header
     .appendChild(nav);
    
     return header;
}


function component() {
    content.append(header(), home(), footer());

    return content;
};

function componentTab(tab) {
    clearPage();
    content.append(header(), tab(), footer());

    return content;
};

function clearPage() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
};

component();

export {componentTab};