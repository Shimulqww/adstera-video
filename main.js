const adLinks = [
  "https://www.profitableratecpm.com/kf3qprjcu?key=f4646d0b196b3e6ba057b2f620d35491",
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
  const randomIndex = Math.floor(Math.random() * adLinks.length);
  const selectedLink = adLinks[randomIndex];
  sessionStorage.setItem("backRedirect", "yes");
  window.location.href = selectedLink;
}

window.addEventListener("pageshow", function () {
  if (sessionStorage.getItem("backRedirect") === "yes") {
    sessionStorage.removeItem("backRedirect");
    window.location.href = "https://adstera-7v8.pages.dev/";
  }
});
