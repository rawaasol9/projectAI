 const text = document.getElementById("text");
const button = document.getElementById("toggleBtn");

const words = ["رواء - جود خالد - ريف - لارا - لينا - لانا ","مشروع طالبات 2/4"];
let currentIndex = 0;

button.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % words.length;
    text.textContent = words[currentIndex];
});