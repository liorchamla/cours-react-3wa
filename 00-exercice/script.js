// Exercice 1 : Quand on clique sur le bouton, son texte devient "Je n'aime plus"

// Exercice 2 : Quand je reclique dessus, son texte redevient "J'aime" et quand ça fonctionne à l'infini

// Exercice 3 : On tient compte de l'état du bouton au départ (dans le HTML)

// Exercice 4 : Lorsqu'on clique sur le bouton "Afficher / Cacher", le bouton "like" doit être supprimé ou créé

const wrapper = document.querySelector(".wrapper");
const toggle = document.querySelector(".toggle");
const btn = document.querySelector("button");

let isLiked = btn.dataset.liked === "true";

btn.addEventListener("click", (e) => {
  if (!isLiked) {
    btn.textContent = "Je n'aime plus";
    // isLiked = true;
  } else {
    btn.textContent = "J'aime";
    // isLiked = false;
  }
  isLiked = !isLiked;
});

let button = document.querySelector('.like');

toggle.addEventListener("click", (e) => {
  if (wrapper.children.length === 0) {
    button = document.createElement("button");
    button.textContent = "J'aime";
    button.classList.add("like");
    button.setAttribute("data-liked", "false");

    let isLiked = button.dataset.liked === "true";

    button.addEventListener("click", (e) => {
      if (!isLiked) {
        button.textContent = "Je n'aime plus";
        // isLiked = true;
      } else {
        button.textContent = "J'aime";
        // isLiked = false;
      }
      isLiked = !isLiked;
    });

    wrapper.appendChild(button);
  } else {
    wrapper.removeChild(button);
  }
});
