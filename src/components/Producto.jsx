import React from "react";
import ps4 from "../product_img/ps4.webp";
import { useState, useEffect } from "react";

function Producto (props) {
    const [botonTxt, setBotonTxt] = useState("Comprar");

    return (
        <article>
            <div className="producto_img">
                <img src={ps4}/>
            </div>
            <div className="contenido">
                <header>
                    <h1>{props.nombre}</h1>
                </header>
                <div className="descripcion">
                    <p>{props.desc}</p>
                </div>
                <div className="precio">
                    {props.precio}
                </div>
                <div className="sku">
                    {props.sku}
                </div>
                <div className="stock">
                    Stock Disponible: <b>{props.stock}</b>
                </div>
                <button type="submit" onClick={() => botonTxt == "Comprar" ?
                 setBotonTxt("Gracias por Comprar") : setBotonTxt("Comprar")}>{botonTxt}</button>
            </div>
        </article>
    );
}

export default Producto;