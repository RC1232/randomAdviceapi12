const randomAdvice = document.getElementById('advice');

async function generateAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  randomAdvice.innerHTML = `<p>${data.slip.advice}</p>`;
}
generateAdvice();

setInterval(generateAdvice, 5000);
