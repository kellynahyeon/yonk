let timeLeft = 30;
const progress = document.getElementById('progress');
const timeTotal = document.getElementById('time-total');

function startTimer() {
    timeLeft = 30;
    updateProgress();
    const timerInterval = setInterval(() => {
        timeLeft--;
        updateProgress();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            startTimer(); // 30초 후 타이머가 다시 시작됩니다.
        }
    }, 1000);
}

function updateProgress() {
    timeTotal.textContent = `${timeLeft}초`;
    progress.style.width = `${(timeLeft / 30) * 100}%`;
}

// DOMContentLoaded 이벤트를 사용하여 페이지 로드 후 타이머 시작
document.addEventListener('DOMContentLoaded', function () {
    startTimer();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'PrintScreen' || (e.ctrlKey && (e.key === 'p' || e.key === 's' || e.key === 'Shift' || e.key === 'I'))) {
        e.preventDefault();
        alert('스크린샷이 비활성화되었습니다.');
    }
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('우클릭이 비활성화되었습니다.');
});

document.addEventListener('touchstart', function (e) {
    if (e.touches.length > 1) {
        e.preventDefault();
        alert('스크린샷이 비활성화되었습니다.');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const arrowIcon = document.getElementById('arrow-icon');
    // 추가적인 스크립트 작업이 있다면 여기에 작성하세요.
});

// 다른 페이지에서 사용하는 타이머 및 기능도 이곳에 포함할 수 있습니다.
function startTimer() {
    let timeLeft = 30;
    const progress = document.getElementById('progress');
    const timeTotal = document.getElementById('time-total');

    const timerInterval = setInterval(() => {
        timeLeft--;
        timeTotal.textContent = `${timeLeft}초`;
        progress.style.width = `${(timeLeft / 30) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            startTimer(); // 타이머가 다시 시작됩니다.
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    startTimer();
});
document.addEventListener("DOMContentLoaded", function () {
    function startTimer() {
        let timeLeft = 30;
        const progress = document.getElementById('progress');
        const timeTotal = document.getElementById('time-total');

        const timerInterval = setInterval(() => {
            timeLeft--;
            timeTotal.textContent = `${timeLeft}초`;
            progress.style.width = `${(timeLeft / 30) * 100}%`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                startTimer(); // 타이머가 다시 시작됩니다.
            }
        }, 1000);
    }

    startTimer();
});

