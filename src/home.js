import { componentTab } from "./index";
import menu from "./menu";

function home() {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');

    div.setAttribute('id', 'main-content');

    h2.setAttribute('id', 'intro');
    h2.innerHTML = "Have you tried Chimek?";

    p.innerHTML = "Click below to discover the authentic taste of Korea";

    button.addEventListener('click', () => {componentTab(menu)});
    button.innerHTML = "Menu";
    
    div.append(h2,p,button);

    return div;
}



export default home;