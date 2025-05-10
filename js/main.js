// カウントダウン機能
function updateCountdown() {
  const eventDate = new Date('2099-01-01T00:00:00').getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countdown').innerHTML = 'イベントは終了しました';
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ヘッダーのスクロール効果
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(22, 22, 26, 0.95)';
  } else {
    header.style.backgroundColor = 'rgba(22, 22, 26, 0.9)';
  }
});

// タブ切り替え機能
function showTab(tabId) {
  // すべてのタブコンテンツを非表示
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(tab => {
    tab.classList.remove('active');
  });
  
  // すべてのタブボタンの active クラスを削除
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });
  
  // 選択されたタブを表示
  document.getElementById(tabId).classList.add('active');
  
  // クリックされたボタンに active クラスを追加
  event.currentTarget.classList.add('active');
} 