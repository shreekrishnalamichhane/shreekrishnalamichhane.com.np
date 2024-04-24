let em_ = document.querySelector('#em');
let ph_ = document.querySelector('#ph');
window.addEventListener("beforeprint", (e) => {
    // Just preventing the b o t.
    let em = "hello" + "@" + "shreecodes" + "." + "dev";
    let ph = "+977" + "9861" + "5320" + "72";
    e.preventDefault();
    em_.innerHTML = em;
    em_.href = "mailto:" + em;
    ph_.innerHTML = ph;
    ph_.href = "tel:" + ph;
})

window.addEventListener("afterprint", (e) => {
    e.preventDefault();
    em_.innerHTML = "";
    em_.href = "mailto:";
    ph_.innerHTML = "";
    ph_.href = "tel:";
})