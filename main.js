const adPopup = "https://www.profitableratecpm.com/kf3qprjcu?key=f4646d0b196b3e6ba057b2f620d35491";

const redirectChain = [
  "https://www.profitableratecpm.com/khfhbjjr?key=8f6a2c9025532f3798bca037c9f902d3",
  "https://www.profitableratecpm.com/bgwi6i4ipy?key=d9ac19dc36a6ee0f9c892b2854ee9d2f",
  "https://www.profitableratecpm.com/ygpu3cers0?key=561221d80e20a7d4231f2513fbbee06e",
  "https://www.profitableratecpm.com/b2j8nb4j?key=8374a2158233b97a853f2c367b65767e",
  "https://www.profitableratecpm.com/xrhw12j3?key=62453a33ba4cf1e11ffd2e9876189fd7",
  "https://www.profitableratecpm.com/kixcddqy?key=58dffefd81444669a11b2e92dc2343b7",
  "https://www.profitableratecpm.com/wespy8absx?key=084b70eb5e1c03a2e5a571bb1ec60f4e",
  "https://www.profitableratecpm.com/u4i1yq64?key=42d086a08caedd4e6874ebd095d6d930",
  "https://www.profitableratecpm.com/hxvc24wcr2?key=cafac74a2cc1288ccef07cd14b67485e"
];

function launchAds() {
  // Attempt to open 1 ad popup
  const newTab = window.open(adPopup, '_blank', 'noopener,noreferrer');
  if (!newTab) {
    alert("Please allow popups for this site to continue.");
    return;
  }

  // Hide button and display loading text
  const btn = document.getElementById('startBtn');
  if (btn) btn.style.display = 'none';

  const loadingText = document.createElement('p');
  loadingText.innerText = "Loading... please wait";
  loadingText.style.fontSize = "18px";
  document.body.appendChild(loadingText);

  // Begin redirect loop after 5 seconds
  setTimeout(() => {
    redirectChain.forEach((url, index) => {
      setTimeout(() => {
        window.location.href = url;
      }, index * 3000); // 3s delay between redirects
    });
  }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.id = 'startBtn';
  btn.innerText = "Continue";
  btn.style = "padding: 15px 25px; font-size: 18px; background: #00f; color: white; border: none; border-radius: 10px;";
  btn.onclick = launchAds;
  document.body.appendChild(btn);
});
