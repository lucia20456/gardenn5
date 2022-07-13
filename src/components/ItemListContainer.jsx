import {useState} from "react";

const ItemListContainer = (props) => {
    const[count,setCount] = useState(0);
    const stock = 5;
    
    if(count<0){
        setCount(0);
    } else if (count>stock){
        setCount(stock)
    }

    return (
        <>
        <p style={{color:"gray"}}>{props.greeting}</p>
        <div>
        <button className="boton" onClick = {()=> setCount(count-1)}>-</button>
        {count}
        <button className="boton" onClick = {()=> setCount(count+1)}>+</button>
        </div>
        <button className="botonCarrito">Agregar al carrito</button>
        </>
    );
}


export default ItemListContainer;