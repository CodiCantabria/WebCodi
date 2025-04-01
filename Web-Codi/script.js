document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".content-box");
    const contentWrapper = document.getElementById("content");

    function ajustarAltura() {
        const activo = document.querySelector(".content-box.active");
        if (activo) {
            requestAnimationFrame(() => {
                const nuevaAltura = activo.scrollHeight;
                contentWrapper.style.height = nuevaAltura + "px";
            });
        }
    }

    ajustarAltura(); // Arreglo de box

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            contents.forEach(content => {
                content.classList.remove("active");
                content.style.position = "absolute";
            });

            const targetContent = document.getElementById(button.getAttribute("data-target"));
            targetContent.classList.add("active");
            targetContent.style.position = "relative";

            setTimeout(ajustarAltura, 100); 
        });
    });

    window.addEventListener("resize", ajustarAltura);
});
