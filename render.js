import g from "./globalState.js";

function render(component) {
  // 현재 렌더링할 컴포넌트 참조 저장
  g.currentComponent = component;

  g.currentIndex = 0;
  const root = document.getElementById("app");
  root.innerHTML = "";
  root.appendChild(component());

  console.log("렌더 완료");
}

export default render;
