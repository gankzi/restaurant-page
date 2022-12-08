function header() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const heading = document.createElement('h1');
    const div = document.createElement("div");
    const linkHome = document.createElement("a");
    const linkMenu = document.createElement("a");
    const linkContact = document.createElement("a");

    nav.setAttribute('id', 'nav');
    heading.setAttribute('id', 'brand');
    div.setAttribute('id', 'nav-buttons');

    heading.innerHTML = "Korean Fried Chicken";
    linkHome.setAttribute('href', '/');
    linkHome.innerHTML = "Home";
    linkMenu.setAttribute('href', '/');
    linkMenu.innerHTML = "Menu";
    linkContact.setAttribute('href', '/');
    linkContact.innerHTML = "Contact us";

    div.append(linkHome, linkMenu, linkContact);

    nav.append(heading, div);
   
    header
     .appendChild(nav);
    
     return header;
}


export default header();