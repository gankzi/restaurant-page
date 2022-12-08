function home() {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const a = document.createElement('a');

    div.setAttribute('id', 'main-content');

    h2.setAttribute('id', 'intro');
    h2.innerHTML = "Have you tried Chimek?";

    p.innerHTML = "Click below to discover the authentic taste of Korea";

    a.setAttribute('href', '/');
    a.classList.add('button');
    a.innerHTML = "Menu";
    
    div.append(h2,p,a);

    return div;
}

export default home();