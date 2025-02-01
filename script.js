
const container = document.querySelector(".clocks");
function updateTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    container.textContent = `${hours}:${minutes}:${seconds}`;
    setTimeout(updateTime, 1000);
}
updateTime();