'use strict';

// 화면 요소와 참여 중인 답변
const $ = (id) => document.getElementById(id);
let current = 0;
let answers = [];

// 선택한 답변을 채점합니다.
function scoreQuiz(questions, selected) {
  return questions.reduce((score, question, index) => {
    return score + (selected[index] === question.answer ? 1 : 0);
  }, 0);
}

// 현재 문항과 보기를 화면에 표시합니다.
function render() {
  const question = QUESTIONS[current];
  const number = String(current + 1).padStart(2, '0');

  $('counter').textContent = `QUESTION ${number} / ${QUESTIONS.length}`;
  $('question').textContent = question.question;
  $('bar').style.width = `${((current + 1) / QUESTIONS.length) * 100}%`;

  const progress = document.querySelector('[role=progressbar]');
  progress.setAttribute('aria-valuemax', QUESTIONS.length);
  progress.setAttribute('aria-valuenow', current + 1);

  $('options').replaceChildren();

  question.options.forEach((text, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.type = 'button';
    button.setAttribute('aria-pressed', String(answers[current] === index));

    const letter = document.createElement('span');
    letter.className = 'letter';
    letter.textContent = String(index + 1);

    const label = document.createElement('span');
    label.textContent = text;
    button.append(letter, label);

    button.onclick = () => {
      answers[current] = index;

      [...$('options').children].forEach((element, optionIndex) => {
        element.setAttribute('aria-pressed', String(index === optionIndex));
      });

      $('next').disabled = false;
    };

    $('options').append(button);
  });

  $('back').hidden = current === 0;
  $('next').textContent = current === QUESTIONS.length - 1
    ? '결과 확인하기'
    : '다음 문항';
  $('next').disabled = answers[current] === undefined;
}

// 메인 화면으로 돌아갑니다.
function showHome() {
  $('quiz').hidden = true;
  $('landing').hidden = false;
  $('start').focus();
}

// 답변을 초기화하고 퀴즈를 시작합니다.
function start() {
  current = 0;
  answers = [];
  $('landing').hidden = true;
  $('quiz').hidden = false;
  render();
  $('quiz').focus();
}

// 모든 문항을 채점하고 결과 팝업을 표시합니다.
function finish() {
  const hasUnansweredQuestion = QUESTIONS.some((_, index) => {
    return answers[index] === undefined;
  });

  if (answers.length !== QUESTIONS.length || hasUnansweredQuestion) {
    return;
  }

  const score = scoreQuiz(QUESTIONS, answers);
  $('score').textContent = score;
  document.querySelector('.score small').textContent = ` / ${QUESTIONS.length}문항 정답`;
  $('message').textContent = score === QUESTIONS.length
    ? '모두 맞혔어요! 건강한 식생활을 함께 실천해요.'
    : '참여해 주셔서 감사합니다! 정답을 함께 알아봐요.';
  $('review').replaceChildren();

  QUESTIONS.forEach((question, index) => {
    const article = document.createElement('article');
    const title = document.createElement('b');
    const isCorrect = answers[index] === question.answer;
    title.textContent = `${index + 1}번 · ${isCorrect ? '정답' : '오답'}`;

    const answer = document.createElement('p');
    answer.textContent = `정답: ${question.options[question.answer]}`;

    const explanation = document.createElement('p');
    explanation.textContent = question.explanation;

    article.append(title, answer, explanation);
    $('review').append(article);
  });

  $('result').showModal();
}

// 버튼 동작
$('start').onclick = start;
$('home').onclick = showHome;

$('next').onclick = () => {
  if (answers[current] === undefined) {
    return;
  }

  if (current === QUESTIONS.length - 1) {
    finish();
  } else {
    current++;
    render();
    $('quiz').focus();
  }
};

$('back').onclick = () => {
  if (current > 0) {
    current--;
    render();
    $('quiz').focus();
  }
};

$('retry').onclick = () => {
  $('result').close();
  start();
};

$('close').onclick = () => {
  $('result').close();
  showHome();
};

// Esc 키로 팝업을 닫으면 메인으로 돌아갑니다.
$('result').addEventListener('cancel', (event) => {
  event.preventDefault();
  $('result').close();
  showHome();
});

// 로고 경로가 지정된 경우에만 이미지를 표시합니다.
if (ORG_LOGO) {
  const image = $('orgLogo');

  image.onload = () => {
    image.hidden = false;
    $('orgName').hidden = true;
  };

  image.onerror = () => {
    image.hidden = true;
    $('orgName').hidden = false;
  };

  image.src = ORG_LOGO;
}
