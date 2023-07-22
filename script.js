const content = document.getElementById('content');
const sentenceJP = document.getElementById('sentence-jp');
const sentence = document.getElementById('sentence');
const sentenceEnglish = document.getElementById('sentenceEnglish');
const buttonJP = document.getElementById('JP');
const buttonEN = document.getElementById('EN');
const setTime = document.getElementById('set-time')
const miss = document.getElementById('miss');
const count = document.getElementById('counter');
const typed = document.getElementById('typed');
const scores = document.getElementById('scores');
const missScore = document.getElementById('miss-score');
const persent = document.getElementById('persent');
const correctSound = new Audio('./sound/correct.mp3');
const missSound = new Audio('./sound/miss.mp3');
const sentenceCorrect = new Audio('./sound/sentenceCorrect.mp3');
let Japanese; //key.jsに渡す用の日本語を入れる変数
let time;
let score = 0;
let mistake = 0;
let correct = 0;
let key;

function set_time() {
  time = setTime.value;
}

function startSetting() {
  setTime.disabled = true;
  setTime.hidden = true;
  buttonEN.disabled = true;
  buttonEN.hidden = true;
  buttonJP.disabled = true;
  buttonJP.hidden = true;
}

function JapaneseSentence() {
  let index = Math.floor(Math.random() * typeJapanese.length);
  sentenceJP.textContent = typeJapanese[index];
  Japanese = typeJapanese2[index];
  kanaToRoman(Japanese);
  
}

function EnglishSentence() {
  let index =  Math.floor(Math.random() * typeEnglish.length);
  English = typeEnglish[index];
  English.split('').forEach(char => {
    const span = document.createElement('span');
    span.innerText = char;
    sentenceEnglish.appendChild(span);
  });
}

buttonJP.addEventListener('click', () => {
  set_time();
  count.textContent = time;
  startSetting();
  JapaneseSentence();
  let i = 0;
  const timer = setInterval(() => {
    if(time == 0) {
      clearInterval(timer);
      content.textContent = '';
      scores.textContent = `点数:${score}点`;
      missScore.textContent = `ミス回数:${mistake}回`
      persent.textContent = `正答率:${((correct / (mistake + correct)) * 100).toPrecision(3)}%`
    }
    count.textContent = time;
    time--;
  }, 1000);
  document.onkeydown = (e) => {
    key = e.key;
    if(key == sentence.textContent[i]) {
      console.log(1);
      i++;
    }
  }
});

buttonEN.addEventListener('click',() => {
  set_time();
  count.textContent = time;
  startSetting();
  EnglishSentence();
  const timer = setInterval(() => {
    if(time == 0) {
      clearInterval(timer);
      content.textContent = '';
      scores.textContent = `点数:${score}点`;
      missScore.textContent = `ミス回数:${mistake}回`
      persent.textContent = `正答率:${((correct / (mistake + correct)) * 100).toPrecision(3)}%`
    }
    count.textContent = time;
    time--;
  }, 1000);
});