const archives_fp="/pages/archives/archives.html";
const menu_deroulant=document.querySelector(".menu-deroulant ul");

async function chargerMenuDeroulant() {
    const result = await fetch(archives_fp);
    const archives_html= await result.text();
    const parser=new DOMParser();
    const archives_doc=parser.parseFromString(archives_html, "text/html");
    const projets=archives_doc.querySelectorAll(".card a");
    projets.forEach((projet) => {
        const menu_item=document.createElement("li");
        const imgs=projet.querySelectorAll("img");
        imgs.forEach(img=>{
            projet.removeChild(img);
        });
        menu_item.appendChild(projet);
        menu_deroulant.appendChild(menu_item);
    });
};

chargerMenuDeroulant();
