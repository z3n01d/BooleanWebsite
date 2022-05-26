const info = document.getElementById("info");
const invite = document.getElementById("invite");

info.addEventListener("click",() => {
    window.location.href = "info.html";
});
invite.addEventListener("click",() => {
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=977276791423119371&permissions=8&scope=bot%20applications.commands";
});