import './circleShapes.css'

function CircleShape({ shape, size, back }) {


  const style = {
    width: `${size}rem`,
    height: `${size}rem`,
    border: ".3rem solid #000",
    borderRadius: `${shape}%`,
    background: `${back}`
  };

  console.log('Size: ' + size + ' rem')


  return (
      <div id="shape" style={style} />  
  )

}

export default CircleShape;
