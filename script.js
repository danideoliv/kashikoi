var switchBtn = true;

function dropdown() {
  const dropConStyle = `
  transform: translateY(0px);
  opacity: 1;
  transition: opacity 230ms ease-in-out, transform 150ms ease-in-out, visibility 0ms;
  visibility: visible;
  `;

  const selectGrade = document.querySelector(".drop-option");
  const selectBtn = document.querySelector(".dropbtn");
  const dropContent = document.querySelector(".dropdown-content");

  rotation = switchBtn ? 180 : 0;

  selectBtn.style.transform = `rotate(${rotation}deg)`;

  if (switchBtn) {
    selectGrade.style.color = "rgba(255, 255, 255, 0.4)";
    dropContent.style.cssText = dropConStyle;
    document.styleSheets[5].insertRule(".drop-option::before { height: calc(100% - 4px); }", 0);
  } else {
    selectGrade.style.color = "white";
    dropContent.style.cssText = "visibility: hidden";
    document.styleSheets[5].removeRule(".drop-option::before { height: calc(100% - 4px); }", 0);
  };

  switchBtn = !switchBtn;
};