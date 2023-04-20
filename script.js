const nameInput = document.getElementById('name');
const addBtn = document.getElementById('add-btn');
const nameList = document.getElementById('list');
const orderBtn = document.getElementById('order-btn');
const result = document.getElementById('result');

const names = [];

// 이름 추가 버튼 클릭 시
addBtn.addEventListener('click', () => {
  const name = nameInput.value;
  if (name) {
    names.push(name);
    nameInput.value = '';
    renderNames();
  }
});

// 순서 정하기 버튼 클릭 시
orderBtn.addEventListener('click', () => {
  if (names.length < 2) {
    alert('2명 이상의 참여자가 필요합니다.');
  } else {
    const shuffledNames = shuffleArray(names);
    result.textContent = '순서가 정해졌습니다: ' + shuffledNames.join(', ');
    result.style.display = 'block';
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

// 배열 무작위 섞기
function shuffleArray(array) {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
