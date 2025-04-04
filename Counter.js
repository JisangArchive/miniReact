import useState from "./useState.js";

function Counter() {
  const [count, setCount] = useState(0);

  const container = document.createElement("div");
  const value = document.createElement("p");
  value.innerText = `Count: ${count}`;

  const button = document.createElement("button");
  button.innerText = "+1";
  button.onclick = () => setCount(count + 1);

  container.appendChild(value);
  container.appendChild(button);
  return container;
}

export default Counter;
