import "./styles.css";

export default function Box({filled, toggle}) {
  let cellStatus = "box";
  
  if (filled === true){
    cellStatus = "box boxFilled";
  }

  return (
    <div className={cellStatus} onClick={toggle}></div>
  );
}
