let kakoName = document.createElement("h3");
kakoName.innerText = "Joaquin Pereira"


let kako = document.createElement("a");
kako.href = "https://wa.me/message/A4TRLPXUWPM6D1";
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
mariWt.href = "https://wa.me/message/HKZHXKUATXUMC1";

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
santiWt.href = "https://wa.me/message/";

function venta() {
    let nombreDelVendedor = document.getElementById("vendedor").value;

    switch (nombreDelVendedor) {
        case "joaco":
            document.getElementById("wasup").appendChild(kakoIg);
            document.getElementById("wasup").appendChild(kakoName);
            document.getElementById("wasup").appendChild(kako);
            break;

        case "mari":
            document.getElementById("wasup").appendChild(mariIg);
            document.getElementById("wasup").appendChild(mari);
            document.getElementById("wasup").appendChild(mariWt);
            break;
        case "santi":
            document.getElementById("wasup").appendChild(santiIg);
            document.getElementById("wasup").appendChild(santi);
            document.getElementById("wasup").appendChild(santiWt);
            break;
        default:
            let muevete = document.getElementById("wasup");
            muevete.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            document.getElementById("wasup").appendChild(error);

            setTimeout(function () {
                document.getElementById("error").remove()
            }, 2000)
            return;
    }

    let borrado = document.getElementById("importante");
    borrado.remove();
}