const adviceNum = document.querySelector('.adviceNum');
const advice = document.querySelector('.apiAdvice');
const btn = document.querySelector('.circleBtn');

const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const adData = await response.json();
    return adData;
}

const updateUI = (data) => {
    adviceNum.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
}

btn.addEventListener('click', e => {
    getAdvice()
    .then((data => {updateUI(data)}))
    .catch(err => console.log(err))
});