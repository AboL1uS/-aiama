"use strict";

        // === Функция: проверка пустого объекта (из задания) ===
        function isEmpty(obj) {
            for (let key in obj) return false;
            return true;
        }

        // === Генерация строковой капчи ===
        function generateStringCaptcha(len = 5) {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let str = "";
            for (let i = 0; i < len; i++) {
                str += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return str;
        }

        // === Генерация числовой капчи ===
        function generateMathCaptcha() {
            const a = Math.floor(Math.random() * 10) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            return { a, b, answer: a + b };
        }

        // === Основной вход с капчей ===
        document.getElementById("start-login").addEventListener("click", function () {
            // === Этап 1: Строковая капча ===
            const captcha1 = generateStringCaptcha();
            const user1 = prompt(`Введите код (регистр важен):\n${captcha1}`);

            if (user1 !== captcha1) {
                alert("❌ Неверный код. Переключаемся на числовую капчу.");

                // === Этап 2: Числовая капча ===
                const math = generateMathCaptcha();
                const user2 = prompt(`Сколько будет ${math.a} + ${math.b}?`);
                const numAnswer = parseInt(user2);

                if (isNaN(numAnswer) || numAnswer !== math.answer) {
                    alert("❌ Неверный ответ. Доступ запрещён.");
                    return;
                }
            }

            // === Успешная капча → теперь логин/пароль ===
            const login = prompt("Введите логин:");

            if (login === null || login.trim() === "") {
                alert("Отменено");
                return;
            }

            if (login === "Ali") {
                const password = prompt("Введите пароль:");
                if (password === null || password.trim() === "") {
                    alert("Отменено");
                } else if (password === "crow777") {
                    alert("✅ Здравствуйте!");
                    window.location.href = "index.html";
                } else {
                    alert("Неверный пароль");
                }
            } else {
                alert("Я вас не знаю");
            }
        });