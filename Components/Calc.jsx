function Calc({buttonValue}) {
  const buttonNames=['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','c']

  return ( 
    
    <div >
      {buttonNames.map((item,index)=><button key={index} onClick={()=>buttonValue(item)} className=" btn btn-secondary bg-secondary rounded-circle mb-2">{item}</button>)}
    </div>
    
   );
}

export default Calc;