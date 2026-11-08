        function animarResultado(resultDiv, contenido) {
            resultDiv.classList.add('hidden');
            setTimeout(() => {
                resultDiv.innerHTML = contenido;
                resultDiv.classList.remove('hidden');
            }, 300); // 300ms de transición, ajustado con CSS
        }

        function calcularFibonacci() {
            const n = parseInt(document.getElementById('fiboInput').value);
            const resultDiv = document.getElementById('activity-result');
            if (isNaN(n) || n < 0) {
                animarResultado(resultDiv, "<span class='error-message'>Por favor, introduce un número válido (0 o mayor).</span>");
                return;
            }
            let a = 0, b = 1, temp;
            for (let i = 2; i <= n; i++) { temp = a + b; a = b; b = temp; }
            animarResultado(resultDiv, `El número de Fibonacci en la posición <strong>${n}</strong> es:<br><span class='golden-ratio' style='text-shadow: 1px 1px 2px #000;'>${n === 0 ? 0 : (n === 1 ? 1 : b)}</span>`);
        }

        function esCuadradoPerfecto(x) {
            let s = parseInt(Math.sqrt(x));
            return (s * s === x);
        }

        function comprobarFibonacci() {
            const num = parseInt(document.getElementById('checkFiboInput').value);
            const resultDiv = document.getElementById('check-fibo-result');
            if (isNaN(num) || num < 0) {
                animarResultado(resultDiv, "<span class='error-message'>Por favor, introduce un número válido (0 o mayor).</span>");
                return;
            }

            // Un número pertenece a Fibonacci si y solo si 5*N^2 + 4 o 5*N^2 - 4 es un cuadrado perfecto
            const isFib = esCuadradoPerfecto(5 * num * num + 4) || esCuadradoPerfecto(5 * num * num - 4);

            if (isFib) {
                animarResultado(resultDiv, `¡Sí! <span style='font-weight:bold; color: #4CAF50;'>${num}</span> ES un número de Fibonacci.`);
            } else {
                animarResultado(resultDiv, `No, <span style='font-weight:bold; color: #f44336;'>${num}</span> NO es un número de Fibonacci.`);
            }
        }

        function aproximarNumeroAureo() {
            const n = parseInt(document.getElementById('goldenRatioInput').value);
            const resultDiv = document.getElementById('golden-ratio-result');

            if (isNaN(n) || n < 2) {
                animarResultado(resultDiv, "<span class='error-message'>Se necesitan al menos 2 términos para calcular una aproximación.</span>");
                return;
            }

            let a = 0, b = 1, temp;
            for (let i = 2; i <= n; i++) {
                temp = a + b;
                a = b;
                b = temp;
            }

            const prev = a;
            const current = b;

            if (prev === 0) return;

            const approx = current / prev;

            const phiApprox = 1.6180339887;
            animarResultado(resultDiv, `
                Secuencia generada hasta: <strong>${current}</strong><br>
                Dividiendo: ${current} / ${prev}<br>
                Aproximación calculada: <span style='font-weight:bold; color: #fcdb00;'>${approx.toFixed(10)}</span><br>
                Valor real de Phi: <span style='font-weight:bold;'>${phiApprox}...</span>
            `);
        }

        function evaluarQuiz() {
            let score = 0;
            let resultHTML = "";

            // Evaluación de la Pregunta 1 (Respuestas correctas: a, c, d)
            const q1a = document.querySelector('input.q1[value="a"]').checked;
            const q1b = document.querySelector('input.q1[value="b"]').checked;
            const q1c = document.querySelector('input.q1[value="c"]').checked;
            const q1d = document.querySelector('input.q1[value="d"]').checked;

            if (q1a && !q1b && q1c && q1d) {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 1:</strong> ¡Correcto! Cristianos, árabes y judíos convivieron en la Península Ibérica.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 1:</strong> Incorrecto. Las respuestas correctas eran a) Los Cristianos, c) Los Árabes y d) Los Judíos.</p>";
            }

            // Evaluación de la Pregunta 2 (Respuesta correcta: b)
            const q2 = document.querySelector('input[name="q2"]:checked');
            if (q2 && q2.value === "b") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 2:</strong> ¡Correcto! Toledo fue el gran punto de encuentro de sabios.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 2:</strong> Incorrecto. La respuesta correcta es b) Toledo.</p>";
            }

            // Evaluación de la Pregunta 3 (Respuesta correcta: v - Verdadero)
            const q3 = document.querySelector('input[name="q3"]:checked');
            if (q3 && q3.value === "v") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 3:</strong> ¡Correcto! Leonardo aprendió este sistema en el norte de África.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 3:</strong> Incorrecto. La respuesta correcta es Verdadero.</p>";
            }

            // Evaluación de la Pregunta 4 (Respuesta correcta: f - Falso)
            const q4 = document.querySelector('input[name="q4"]:checked');
            if (q4 && q4.value === "f") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 4:</strong> ¡Correcto! Viajó intensamente por todo el Mediterráneo para conocer a otros sabios, no se quedó en Pisa.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 4:</strong> Incorrecto. La respuesta correcta es Falso.</p>";
            }

            // Evaluación de la Pregunta 5 (Respuesta correcta: f - Falso)
            const q5 = document.querySelector('input[name="q5"]:checked');
            if (q5 && q5.value === "f") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 5:</strong> ¡Correcto! Su gran inspiración y modelo fue el sistema numérico hindú-árabe, no Pitágoras.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 5:</strong> Incorrecto. La respuesta correcta es Falso.</p>";
            }

            // Evaluación de la Pregunta 6 (Respuesta correcta: b)
            const q6 = document.querySelector('input[name="q6"]:checked');
            if (q6 && q6.value === "b") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 6:</strong> ¡Correcto! Aparecieron en occidente por primera vez en su famoso 'Liber abaci'.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 6:</strong> Incorrecto. La respuesta correcta es b) En el Liber abaci.</p>";
            }

            // Evaluación de la Pregunta 7 (Respuesta correcta: b)
            const q7 = document.querySelector('input[name="q7"]:checked');
            if (q7 && q7.value === "b") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 7:</strong> ¡Correcto! Los hindúes lo crearon, pero fueron los estudiosos árabes quienes lo introdujeron en Europa.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 7:</strong> Incorrecto. La respuesta correcta es b) Porque lo difundieron los Árabes y lo inventaron los Hindues.</p>";
            }

            // Evaluación de la Pregunta 8 (Respuesta correcta: b)
            const q8 = document.querySelector('input[name="q8"]:checked');
            if (q8 && q8.value === "b") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 8:</strong> ¡Correcto! Al ser hijo de un comerciante, vio que calcular con el sistema hindú-árabe (incluyendo el cero) era infinitamente superior para la contabilidad que usar los torpes números romanos.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 8:</strong> Incorrecto. La respuesta correcta es b) Porque era mucho más práctico y eficiente para el comercio que los números romanos.</p>";
            }

            // Evaluación de la Pregunta 9 (Respuesta correcta: b)
            const q9 = document.querySelector('input[name="q9"]:checked');
            if (q9 && q9.value === "b") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 9:</strong> ¡Correcto! Los comerciantes usaban tableros de cálculo (ábacos), pero gracias a los números introducidos por Fibonacci y la mayor disponibilidad de papel, los cálculos algorítmicos escritos fueron ganando terreno rápidamente.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 9:</strong> Incorrecto. La respuesta correcta es b) Principalmente en ábacos o tableros de cálculo con fichas, aunque el uso del papel para el cálculo escrito empezaba a popularizarse.</p>";
            }

            // Evaluación de la Pregunta 10 (Respuesta correcta: a)
            const q10 = document.querySelector('input[name="q10"]:checked');
            if (q10 && q10.value === "a") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 10:</strong> ¡Correcto! Los números que faltan se obtienen sumando siempre los dos anteriores (1+2=3; 5+8=13; 55+89=144; 377+610=987; 1597+2584=4181).</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 10:</strong> Incorrecto. La respuesta correcta es a) 3, 13, 144, 987, 4181.</p>";
            }

            // Evaluación de la Pregunta 11 (Respuesta correcta: v)
            const q11 = document.querySelector('input[name="q11"]:checked');
            if (q11 && q11.value === "v") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 11:</strong> ¡Correcto! Es la regla fundamental matemática con la que se construye toda la sucesión.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 11:</strong> Incorrecto. La respuesta correcta es Verdadero.</p>";
            }

            // Evaluación de la Pregunta 12 (Respuesta correcta: f)
            const q12 = document.querySelector('input[name="q12"]:checked');
            if (q12 && q12.value === "f") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 12:</strong> ¡Correcto! Según la Identidad de Cassini, para posiciones impares se obtiene el término intermedio al cuadrado <strong>MÁS</strong> uno (ej: el 3º y 5º término son 2 y 5. 2x5 = 10, que es igual a 3² + 1).</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 12:</strong> Incorrecto. La respuesta correcta es Falso.</p>";
            }

            // Evaluación de la Pregunta 13 (Respuesta correcta: v)
            const q13 = document.querySelector('input[name="q13"]:checked');
            if (q13 && q13.value === "v") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 13:</strong> ¡Correcto! Es una de las propiedades de la Identidad de Cassini (ej: el 4º y 6º término son 3 y 8. 3x8 = 24, que es igual a 5² - 1).</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 13:</strong> Incorrecto. La respuesta correcta es Verdadero.</p>";
            }

            // Evaluación de la Pregunta 14 (Respuesta correcta: b)
            const q14 = document.querySelector('input[name="q14"]:checked');
            if (q14 && q14.value === "b") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 14:</strong> ¡Correcto! Fibonacci planteó el famoso problema de cuántas parejas de conejos se producirían en un año a partir de una pareja inicial, bajo condiciones ideales de reproducción.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 14:</strong> Incorrecto. La respuesta correcta es b) El crecimiento de una población idealizada de conejos.</p>";
            }

            // Evaluación de la Pregunta 15 (Respuesta correcta: f)
            const q15 = document.querySelector('input[name="q15"]:checked');
            if (q15 && q15.value === "f") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 15:</strong> ¡Correcto! La construcción se inicia con un cuadrado de 1x1.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 15:</strong> Incorrecto. La respuesta correcta es Falso, se parte de un cuadrado 1x1.</p>";
            }

            // Evaluación de la Pregunta 16 (Respuesta correcta: f)
            const q16 = document.querySelector('input[name="q16"]:checked');
            if (q16 && q16.value === "f") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 16:</strong> ¡Correcto! En el segundo paso se añade otro cuadrado de 1x1.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 16:</strong> Incorrecto. La respuesta correcta es Falso.</p>";
            }

            // Evaluación de la Pregunta 17 (Respuesta correcta: f)
            const q17 = document.querySelector('input[name="q17"]:checked');
            if (q17 && q17.value === "f") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 17:</strong> ¡Correcto! En el tercer paso se añade un cuadrado de 2x2.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 17:</strong> Incorrecto. La respuesta correcta es Falso.</p>";
            }

            // Evaluación de la Pregunta 18 (Respuesta correcta: f)
            const q18 = document.querySelector('input[name="q18"]:checked');
            if (q18 && q18.value === "f") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 18:</strong> ¡Correcto! La espiral se obtiene trazando arcos de un cuarto de círculo dentro de cada cuadrado.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 18:</strong> Incorrecto. La respuesta correcta es Falso.</p>";
            }

            // Evaluación de la Pregunta 19 (Respuesta correcta: v)
            const q19 = document.querySelector('input[name="q19"]:checked');
            if (q19 && q19.value === "v") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 19:</strong> ¡Correcto! Es uno de los patrones más comunes en la naturaleza, visible en conchas, girasoles, galaxias, etc.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 19:</strong> Incorrecto. La respuesta correcta es Verdadero.</p>";
            }

            // Evaluación de la Pregunta 20 (Campo de texto libre)
            const q20Input = document.getElementById('q20');
            const q20Val = q20Input ? q20Input.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
            if (q20Val === "numero aureo" || q20Val === "el numero aureo" || q20Val === "proporcion divina" || q20Val === "la proporcion divina" || q20Val === "proporcion aurea" || q20Val === "phi" || q20Val === "numero phi") {
                score++;
                resultHTML += "<p class='correct-answer'><strong>Pregunta 20:</strong> ¡Correcto! A este valor se le conoce como Número Áureo o Proporción Divina.</p>";
            } else {
                resultHTML += "<p class='incorrect-answer'><strong>Pregunta 20:</strong> Incorrecto. La respuesta correcta es el Número Áureo (o Proporción Divina).</p>";
            }

            const resultDiv = document.getElementById('quiz-result');
            resultDiv.innerHTML = `<h4 style="color: #111; margin-top: 15px;">Tu puntuación: ${score} / 20</h4>` + resultHTML;
        }

        function dibujarEspiral() {
            const input = document.getElementById('spiralInput');
            let iter = parseInt(input.value);
            const canvas = document.getElementById('spiralCanvas');
            const ctx = canvas.getContext('2d');
            const width = canvas.width;
            const height = canvas.height;

            ctx.clearRect(0, 0, width, height);

            if (isNaN(iter) || iter < 1) return;

            // Limitamos a 15 iteraciones para que no se desborde visualmente
            iter = Math.min(iter, 15);
            input.value = iter;

            let fibs = [1, 1];
            for (let i = 2; i < iter; i++) {
                fibs.push(fibs[i-1] + fibs[i-2]);
            }

            ctx.save();

            // Escala dinámica para asegurar que la espiral quepa en el canvas
            let maxFib = fibs[iter - 1];
            let scale = Math.min(width, height) / (maxFib * 2.5);
            if (iter <= 3) scale = 40;

            ctx.translate(width / 2, height / 2);
            ctx.rotate(-Math.PI / 2); // Orientación inicial para que crezca hacia afuera adecuadamente

            for (let i = 0; i < iter; i++) {
                let f = fibs[i] * scale;

                // Dibujar el cuadrado
                ctx.beginPath();
                ctx.strokeStyle = '#ccc';
                ctx.lineWidth = 1;
                ctx.rect(0, 0, f, f);
                ctx.stroke();

                // Dibujar el arco de la espiral
                ctx.beginPath();
                ctx.strokeStyle = '#fcdb00';
                ctx.lineWidth = 3;
                ctx.arc(0, f, f, 1.5 * Math.PI, 0, false);
                ctx.stroke();

                // Trasladar al siguiente vértice y rotar 90 grados en cada paso
                ctx.translate(f, f);
                ctx.rotate(Math.PI / 2);
            }

            ctx.restore();
        }

        // Dibujar la espiral por defecto al cargar la página
        window.addEventListener('DOMContentLoaded', function() {
            if(document.getElementById('spiralCanvas')) {
                dibujarEspiral();
            }
        });
