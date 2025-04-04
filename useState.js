import render from "./render.js";
import g from "./globalState.js";

function useState(initialValue) {
  const index = g.currentIndex;
  g.state[index] = g.state[index] ?? initialValue;

  const setState = (newValue) => {
    g.state[index] = newValue;
    render(g.currentComponent);
  };

  g.currentIndex++;
  return [g.state[index], setState];
}

export default useState;
