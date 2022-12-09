import './css/styles.css';
import menu from './menu';
import header from './header';
import footer from './footer';
// import home from './home';

const content = document.getElementById('content');

function component() {
    content.append(header, menu, footer);

    return content;
};

component();

