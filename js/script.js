/**
 * Código refatorado
 */

const previewer = document.querySelector(".radiusPreviewer");
const inputStats = document.querySelectorAll(".inputStat");
const cssCode = document.querySelector(".cssCode");
const controls = document.querySelector('.controls')

controls.addEventListener('input', handleStyle)

const handleBorder = {
  element:previewer,
  borderRadius(value){
    this.element.style.borderRadius = value + 'px';
    inputStats[0].innerText = value + 'px';
  },
  borderTopLeftRadius(value){
    this.element.style.borderTopLeftRadius = value + 'px'
    inputStats[1].innerText = value + 'px';
  },
  borderTopRightRadius(value){
    this.element.style.borderTopRightRadius = value + 'px'
    inputStats[2].innerText = value + 'px';
  },
  borderBottomLeftRadius(value){
    this.element.style.borderBottomLeftRadius = value + 'px'
    inputStats[3].innerText = value + 'px';
  },
  borderBottomRightRadius(value){
    this.element.style.borderBottomRightRadius = value + 'px'
    inputStats[4].innerText = value + 'px';
  },
}

function showCss(){
  cssCode.innerHTML =
    "<div>" + previewer.style.cssText.split("; ").join(";</div><div>");
}

function handleStyle ({target}){
  const name = target.name
  const value = target.value
  handleBorder[name](value);
  showCss();
}

