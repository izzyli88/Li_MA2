import "./styles.css";

export default function Box({filled, toggle}) {
  const cellStatus = filled ? "box boxFilled" : "box";

  return (
    <div className={cellStatus} onClick={toggle}></div>
  );
}
