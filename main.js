//Ingreso de usuario al sistema

let usuarioAutorizado = "usuario";
let passwordAutorizado = "1234";

for(let i = 0; i < 3; i++){
    let usuarioIngresado = prompt("Ingrese su usuario:");
    let passwordIngresado = prompt("Ingrese su contraseña:");
    
    if(usuarioIngresado == usuarioAutorizado && passwordIngresado === passwordAutorizado){
        alert("Bienvenido, vas a poder calcular de una manera sencilla y rápida los precios de publicación, inversión y ganancias de tu emprendimiento para vender a través de Mercado Libre.");
        
        let cantidadProductos = parseInt(prompt("¿Cuántos productos vas a calcular?"));
        const comisionMercadoLibre = 0.85;
        const costoFijoPorVenta = 150;
        const costoEnvioGratis = 950;
        const descuentoCompra = 0.70;
        
        for( let i = 1; i <= cantidadProductos; i++){
            //Cálculo del precio para publicar en Mercado Libre de los productos que se ingresen.
            let nombreProducto = prompt("Ingrese el nombre del producto:");
            let precioCompraGondola = parseInt(prompt("Ingrese el precio de compra (Góndola):"));
            let stockProducto = parseInt(prompt("Ingrese las unidades de " + nombreProducto + " estimadas"));
            let precioPublicar = calcularPrecio(precioCompraGondola, comisionMercadoLibre,costoFijoPorVenta);
        
            let sumarEnvio = sumarCostoEnvio(precioPublicar);
        
            if(sumarEnvio){
                alert("El precio de venta para publicar "+nombreProducto+" es "+ (precioPublicar+costoEnvioGratis).toFixed(2) + " pesos");
            }else{
                alert ("El precio de venta para publicar "+nombreProducto+" es "+ precioPublicar.toFixed(2) + " pesos");
            }
            
            //Cálculo del dinero necesario para comprar las unidades que la persona quiere vender.
            let dineroInvertir = calcularInversion(stockProducto, descuentoCompra, precioCompraGondola);
            alert("El dinero a invertir para " + stockProducto + " unidades de "+nombreProducto+ " es "+ dineroInvertir + " pesos");
        
            //Cálculo de las ganancias a obtener por la venta de las unidades que la persona ingresó.
            let dineroGanancia = calcularGanancia(stockProducto, precioCompraGondola, dineroInvertir);
            alert("Las ganancias a obtener por la venta de " + stockProducto + " unidades de "+ nombreProducto+ " es de " + dineroGanancia + " pesos");
        }
        break;
    }else{
        alert("Usuario o contraseña incorrectos, intente nuevamente.");
    }
}

//Funciones

function calcularPrecio(precioCompraGondola, comisionMercadoLibre, costoFijoPorVenta){
    let precioPublicar = (precioCompraGondola/comisionMercadoLibre)+costoFijoPorVenta;
    return precioPublicar
}

function sumarCostoEnvio(precioPublicar){
    if(precioPublicar>=8000){
        return true;
    }else{
        return false;
    }
} 

function calcularInversion (stockProducto, descuentoCompra, precioCompraGondola){
    let dineroInvertir = precioCompraGondola*descuentoCompra*stockProducto;
    return dineroInvertir;
}

function calcularGanancia (stockProducto, precioCompraGondola, dineroInvertir){
    let dineroGanancia = (stockProducto*precioCompraGondola)-dineroInvertir;
    return dineroGanancia;
}