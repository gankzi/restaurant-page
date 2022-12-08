import './css/styles.css';
import header from './header';
import footer from './footer';
import home from './home';

const content = document.getElementById('content');

function component() {
    content.append(header, home, footer);

    return content;
};

component();

