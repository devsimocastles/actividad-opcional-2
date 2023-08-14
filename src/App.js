import "./main.css";
import Producto from "./components/Producto";


function App() {
  return (
    <div className="App">
        <Producto
          nombre="PlayStation 4 Slim"
          imgSrc="/product_img/ps4.webp"
          desc="Consola Sony PlayStation 4 Slim de 500GB para almacenar tus juegos favoritos
          WiFi integrado para acceder a juegos y contenidos en línea fácilmente
          Incluye control inalámbrico DualShock 4 para mayor comodidad y precisión
          Gráficos impresionantes gracias a la GPU AMD Radeon y CPU AMD Jaguar de 8 núcleos
          Resolución máxima de 1920x1080 px para disfrutar de tus juegos en alta definición
          Conexión Bluetooth para dispositivos compatibles y experiencia inalámbrica"
          precio="200.000$ "
        />
    </div>
  );
}

export default App;
