document.getElementById("favorite-btn").addEventListener("click", () => {
    let icon = document.getElementById("favorite-icon-heart")
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
})