document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".content-box");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Quitar clase active de todos los botones
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Mostrar el contenido correspondiente
            const target = button.getAttribute("data-target");
            contents.forEach(content => {
                content.classList.remove("active");
            });
            document.getElementById(target).classList.add("active");
        });
    });
});
