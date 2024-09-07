var switchBtn = true;

function dropdown() {
  const dropConStyle = `
  transform: translateY(0px);
  opacity: 1;
  transition: opacity 230ms ease-in-out, transform 150ms ease-in-out, visibility 0ms;
  visibility: visible;
  `;

  const selectGrade = document.querySelector(".dropbtn");
  const dropContent = document.querySelector(".dropdown-content");
  const arrow = document.querySelector("#seta-baixo");
  const opacityBtn = document.querySelector("#btn-con");

  rotation = switchBtn ? 180 : 0;

  arrow.style.transform = `rotate(${rotation}deg)`;

  if (switchBtn) {
    opacityBtn.style.cssText = "opacity: 50%";
    dropContent.style.cssText = dropConStyle;
    document.styleSheets[5].insertRule(".dropbtn::before { height: calc(100% - 4px); }", 0);
  } else {
    opacityBtn.style.cssText = "opacity: 100%";
    dropContent.style.cssText = "visibility: hidden";
    document.styleSheets[5].removeRule(".drop-option::before { height: calc(100% - 4px); }", 0);
  };

  switchBtn = !switchBtn;
};