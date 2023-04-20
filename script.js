// 발표자 배열 초기화
var presenters = ['발표자1', '발표자2', '발표자3'];

// 발표자 추가 버튼 클릭 시 발표자 배열에 추가하는 함수
document.getElementById('btn-add-presenter').addEventListener('click', function() {
    var newPresenter = document.getElementById('input-presenter').value;
    if (newPresenter !== '') {
        presenters.push(newPresenter);
        document.getElementById('input-presenter').value = '';
        updateResult();
    }
});

// 발표자 제거 버튼 클릭 시 발표자 배열에서 마지막 발표자를 제거하는 함수
document.getElementById('btn-remove-presenter').addEventListener('click', function() {
    presenters.pop();
    updateResult();
});

// 발표 순서를 정하는 함수
function determinePresentationOrder() {
    // 발표 순서를 랜덤으로 섞기
    presenters.sort(function(a, b){return 0.5 - Math.random()});
    updateResult();
}

// 결과를 표시하는 함수
function updateResult() {
    // 결과를 표시할 div 요소 가져오기
    var resultDiv = document.getElementById('result');

    // 발표 순서를 결과 div에 표시
    resultDiv.innerHTML = '발표 순서: ' + presenters.join(', ');
}
