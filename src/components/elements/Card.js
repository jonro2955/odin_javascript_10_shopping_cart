export default function Card(props) {
  const myStyle = { backgroundColor: props.name };

  return (
    <div className='card'>
      <h3>Card</h3>
      <span>Name: {props.name}</span>
      <div className='colorBox' style={myStyle}></div>
      <span>Added: {Number(props.quantity)}</span>
      <button onClick={props.clickHandler}>Add</button>
    </div>
  );
}
