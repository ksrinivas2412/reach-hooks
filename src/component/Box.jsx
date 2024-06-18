import '../App.css';
export default function Box({value, nam, fun}) {
    const userData = (event) => {
        const newText = event.target.value;
        fun(newText);
      }
    
    return(
        <div>
            <p>The count value : {value}</p>
           { value > 1 ? <button>Hye Hi {nam}</button> : undefined}
           <div className="name">
            <p>Enter the value for two way binding</p>
           <input type="text" required onChange={userData}></input>
           </div>
        </div>

    )
    
}