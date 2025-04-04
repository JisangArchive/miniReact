import g from "./globalState.js";

function render(component) {
  g.currentIndex = 0;
  const root = document.getElementById("app");
  root.innerHTML = "";
  root.appendChild(component());

  console.log("렌더 완료");
}

export default render;
