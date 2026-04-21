let kakoName = document.createElement("h3");
kakoName.innerText = "Joaquin Pereira"


let kako = document.createElement("a");
kako.href = "https://wa.me/541128884710";
kako.className = "whats"
kako.innerText = "Whatsapp";
kako.target = "_blank";

let kakoIg = document.createElement("a");
kakoIg.href = "https://www.instagram.com/joaquin_pereira_07/";
kakoIg.className = "ig";
kakoIg.innerText = "Instagram";
kakoIg.target = "_blank";

const error = document.createElement("p");
error.innerText = "Nombres validos = (joaco, santi o mari)"
error.id = "error"

let mari = document.createElement("h3");
mari.innerText = "Marilin Jara"

let mariIg = document.createElement("a");
mariIg.innerText = "Instagram";
mariIg.className = "ig";
mariIg.target = "_blank"
mariIg.href = "https://www.instagram.com/ma.rilyn6171?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

let mariWt = document.createElement("a");
mariWt.innerText = "WhatsApp";
mariWt.className = "whats";
mariWt.target = "_blank";
mariWt.href = "https://wa.me/541121556495";

// Santino Rigoni 

let santi = document.createElement("h3");
santi.innerText = "Santino Rigoni"

let santiIg = document.createElement("a");
santiIg.innerText = "Instagram";
santiIg.className = "ig";
santiIg.target = "_blank"
santiIg.href = "https://www.instagram.com/santick_16/?utm_source=ig_web_button_share_sheet";

let santiWt = document.createElement("a");
santiWt.innerText = "WhatsApp";
santiWt.className = "whats";
santiWt.target = "_blank";
santiWt.href = "https://wa.me/542320512050";

document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("vendedor");
    const contenedor = document.getElementById("wasup");
    const contenedor1 = document.getElementById("particles-js");

    // 👉 Si no existe, no ejecuta nada (clave para otras páginas)
    if (!input || !contenedor) return;

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            venta();
        }
    });
});


function venta() {

    const contenedor = document.getElementById("wasup");
    if (!contenedor) return;

    let nombreDelVendedor = document.getElementById("vendedor").value.toLowerCase().trim();

    contenedor.innerHTML = ""; // limpia antes de agregar

    switch (nombreDelVendedor) {
        case "joaco":
            contenedor.appendChild(kakoIg);
            contenedor.appendChild(kakoName);
            contenedor.appendChild(kako);
            break;

        case "mari":
            contenedor.appendChild(mariIg);
            contenedor.appendChild(mari);
            contenedor.appendChild(mariWt);
            break;

        case "santi":
            contenedor.appendChild(santiIg);
            contenedor.appendChild(santi);
            contenedor.appendChild(santiWt);
            break;

        default:
            contenedor.appendChild(error);

            contenedor.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            setTimeout(() => {
                if (document.getElementById("error")) {
                    document.getElementById("error").remove();
                }
            }, 2000);

            return;
    }

    let borrado = document.getElementById("importante");
    if (borrado) borrado.remove(); // 👈 clave
}


particlesJS("particles-js", {
    particles: {
        number: { value: 400, density: { enable: true, value_area: 800 } },
        color: { value: "#fff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 10,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 5,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 0.5 } },
            bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

particlesJS("particles-jj", {
    particles: {
        number: { value: 400, density: { enable: true, value_area: 800 } },
        color: { value: "#fff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 10,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 5,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 0.5 } },
            bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});
