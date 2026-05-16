const media_query = window.matchMedia("(width<800px)");

function updateLayout() {
    const illustrations=document.querySelector(".illustrations");
    const description=document.querySelector(".description");
    const layout=document.querySelector(".layout")
    if (media_query.matches) {
        illustrations.style.width="200px";
        illustrations.remove();
        description.prepend(illustrations);
        illustrations.classList.add("floated");
    } else {
        if (illustrations.classList.contains("floated")) {
            illustrations.remove();
            illustrations.style.width="unset";
            layout.prepend(illustrations);
            illustrations.classList.remove("floated");
        }
    }
};

updateLayout();

media_query.addEventListener("change", updateLayout) 
// cet événement sert à updater le layout si l'écran est redimensionné pendant utilisation.
// combiner un appel initial à la fonctin et cet eventlistener permet de reproduire le comportement
// des média queries css.

