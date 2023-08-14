import React from "react";
import ps4 from "../product_img/ps4.webp";

function Producto (props) {
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
            </div>
        </article>
    );
}

export default Producto;