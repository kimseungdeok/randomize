const nameInput = document.getElementById('name');
const addBtn = document.getElementById('add-btn');
const nameList = document.getElementById('list');
const orderBtn = document.getElementById('order-btn');
const result = document.getElementById('result');

const names = [];

// 이름 추가 버튼 클릭 시
addBtn.addEventListener('click', () => {
  addName();
});

// 엔터 키 입력 시
nameInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addName();
  }
});

// 순서 정하기 버튼 클릭 시
orderBtn.addEventListener('click', () => {
  if (names.length < 2) {
    alert('2명 이상의 참여자가 필요합니다.');
  } else {
    const shuffledNames = shuffleArray(names);
    result.textContent = '순서가 정해졌습니다:';
    result.style.display = 'block';
    renderChips(shuffledNames);
  }
});

// 참여자 목록 렌더링
function renderNames() {
  nameList.innerHTML = '';
  names.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    nameList.appendChild(li);
  });
}

// 이름 추가 함수
function addName() {
  const name = nameInput.value.trim(); // 이름 양쪽 공백 제거
  if (name) {
    names.push(name);
    nameInput.value = '';
    renderNames();
  }
}

// 배열 무작위 섞기
function shuffleArray(array) {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Chips로 보여주기
function renderChips(names) {
  result.innerHTML = '';
  names.forEach(name => {
    const chip = document.createElement('div');
    chip.classList.add('chip');
    chip.textContent = name;
    result.appendChild(chip);
  });
}
