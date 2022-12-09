function footer() {
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    const link = document.createElement('a');
    const img = document.createElement('img');

    p.innerHTML = "Created by Gankzi 2022";

    link.setAttribute("href", "https://github.com/gankzi");
    link.setAttribute("target", "_blank");

    img.setAttribute("src", "../src/css/github.svg");
    img.setAttribute("alt", "github-icon");
    img.classList.add("filter-white");

    link.appendChild(img);

    footer.append(p, link);

    return footer;
}

export default footer;