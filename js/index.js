const info = document.getElementById("info");
const invite = document.getElementById("invite");

info.addEventListener("click",() => {
    location.href = "info.html";
});
invite.addEventListener("click",() => {
    location.href = "https://discord.com/api/oauth2/authorize?client_id=977276791423119371&permissions=8&scope=bot%20applications.commands";
});