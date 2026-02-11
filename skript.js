"use strict";

    const likeBtn = document.getElementById("like-btn");
    const likeStatus = document.getElementById("like-status");

    if (likeBtn && likeStatus) {
        let isLiked = false;
        let likeCount = 0;

        likeBtn.addEventListener("click", function () {
            isLiked = !isLiked;
            if (isLiked) {
                likeBtn.style.backgroundColor = "#ff4444";
                likeBtn.textContent = "👎 Не нравится";
                likeCount++;
            } else {
                likeBtn.style.backgroundColor = "";
                likeBtn.textContent = "👍 Нравится";
                likeCount--;
            }
            likeStatus.textContent = likeCount;
        });
    }

    const drawBtn = document.getElementById("draw-btn");
    if (drawBtn) {
        let drawing = false;
        const dots = [];

        drawBtn.addEventListener("click", function () {
            drawing = !drawing;
            drawBtn.textContent = drawing ? "Остановить рисование" : "Начать рисование";
            drawBtn.style.backgroundColor = drawing ? "#00cc00" : "";
        });

        document.addEventListener("mousemove", function (e) {
            if (!drawing) return;

            const dot = document.createElement("div");
            dot.style.position = "fixed";
            dot.style.left = (e.clientX - 5) + "px";
            dot.style.top = (e.clientY - 5) + "px";
            dot.style.width = "10px";
            dot.style.height = "10px";
            dot.style.borderRadius = "50%";
            dot.style.backgroundColor = "#00ff00";
            dot.style.boxShadow = "0 0 8px #00ff00";
            dot.style.pointerEvents = "none";
            dot.style.zIndex = "2147483647"; // максимальный z-index
            document.body.appendChild(dot);
            dots.push(dot);

            // Удаляем точку через 1.2 секунды
            setTimeout(function () {
                const index = dots.indexOf(dot);
                if (index !== -1) {
                    dots.splice(index, 1);
                }
                if (dot.parentNode) {
                    dot.parentNode.removeChild(dot);
                }
            }, 1200);
        });

    }
    function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        const input = prompt("Введите число:", "0");
        const num = parseFloat(input);
        if (!isNaN(num)) {
            this.value += num;
        } else {
            alert("Неверное число!");
        }
    };
}

function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;
    return str.slice(0, maxlength - 3) + "...";
}

// === Демо-функции ===
function demoAccumulator() {
    const acc = new Accumulator(100);
    acc.read();
    alert("Новая сумма: " + acc.value);
}

function demoTruncate() {
    const text = "Это очень длинная строка для проверки усечения";
    const result = truncate(text, 25);
    alert("Результат:\n" + result);
}

// === Подключаем обработчики ===
const btnAcc = document.getElementById("btn-accumulator");
const btnTrunc = document.getElementById("btn-truncate");

if (btnAcc) {
    btnAcc.addEventListener("click", demoAccumulator);
}
if (btnTrunc) {
    btnTrunc.addEventListener("click", demoTruncate);
}