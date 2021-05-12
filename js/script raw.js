const borderRadiusAll = document.querySelector("#radiusAll");
const borderTopLeftRadius = document.querySelector("#radiusLeftTop");
const borderTopRightRadius = document.querySelector("#radiusRightTop");
const borderBottomLeftRadius = document.querySelector("#radiusLeftBottom");
const borderBottomRightRadius = document.querySelector("#radiusRightBottom");
const previewer = document.querySelector(".radiusPreviewer");
const inputStats = document.querySelectorAll(".inputStat");
const cssCode = document.querySelector(".cssCode");



borderRadiusAll.addEventListener("input", ({ target }) => {
  previewer.style.borderRadius = `${target.value}px`;
  inputStats[0].innerText = `${target.value}px`;
  cssCode.innerHTML =
    "<div>" + previewer.style.cssText.split("; ").join(";</div><div>");
});

borderTopLeftRadius.addEventListener("input", ({ target }) => {
  previewer.style.borderTopLeftRadius = `${target.value}px`;
  inputStats[1].innerText = `${target.value}px`;
  cssCode.innerHTML =
    "<div>" + previewer.style.cssText.split("; ").join(";</div><div>");
});

borderTopRightRadius.addEventListener("input", ({ target }) => {
  previewer.style.borderTopRightRadius = `${target.value}px`;
  inputStats[2].innerText = `${target.value}px`;
  cssCode.innerHTML =
    "<div>" + previewer.style.cssText.split("; ").join(";</div><div>");
});

borderBottomLeftRadius.addEventListener("input", ({ target }) => {
  previewer.style.borderBottomLeftRadius = `${target.value}px`;
  inputStats[3].innerText = `${target.value}px`;
  cssCode.innerHTML =
    "<div>" + previewer.style.cssText.split("; ").join(";</div><div>");
});

borderBottomRightRadius.addEventListener("input", ({ target }) => {
  previewer.style.borderBottomRightRadius = `${target.value}px`;
  inputStats[4].innerText = `${target.value}px`;
  cssCode.innerHTML =
    "<div>" + previewer.style.cssText.split("; ").join(";</div><div>");
});
