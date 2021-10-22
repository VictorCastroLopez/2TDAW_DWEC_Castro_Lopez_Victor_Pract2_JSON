"use strict"

//titulo página
document.title=("Trabajo 2");

//Booleano
let confirmacion=confirm("Esta página tiene merch de la NBA.¿Quiere acceder a la tienda?")
if(confirmacion){
    //Header
    document.write(`<center><h1 style="color:#ffffff;">NBA Shop</h1></center>`);  

    const mostrarproductos=(productos)=>{
        document.write(`<div class="item">
                            <div id="tabla_productos">
                                <h1>Camiseta ${productos["nombre"]}</h1>
                                <h2>Fecha de nacimiento: ${productos["fecha_nacimiento"]}</h2>
                                <h2>Dorsal: ${productos["dorsal"]}</h2>
                                <img src="${productos["imagen"]}">
                                <p>Precio: ${productos["precio"]}€</p>
                                <h3>Talla: ${productos["tallas"]}</h3>
                                <h3>Categoría: ${productos["categoria"]}</h3>
                                <h3>${productos["descripcion"]}</h3>
                                <h4><a href="${productos["enlace_relacionado"]}">Enlace relacionado</a></h4>
                            </div>
                                        
                            <div id="formulario_item">
                                <fieldset style="border-color: #F43446; border-radius: 5%">
                                    <legend style="color: #F43446">Actualizar datos de la camiseta de ${productos["nombre"]}</legend>
                                    <br>
                                    <form>
                                        <label for="camisetas" class="posicionar_label">
                                            Camiseta: <input style="width: 45%;" type="text" name="camisetas" value="${productos["nombre"]}">
                                        </label>
                                        <br><br>
                                        <label for="fecha_nac" class="posicionar_label">
                                            Fecha de nacimiento: <input style="width: 29%;" type="date" name="fecha_nac" value="${productos["fecha_nacimiento"]}">
                                        </label>                            
                                        <br><br>
                                        <label for="dorsal" class="posicionar_label">
                                            Dorsal: <input style="width: 49%;" type="number" name="dorsal" value="${productos["dorsal"]}">
                                        </label>
                                        <br><br>
                                        <label for="img" class="posicionar_label">
                                            Imagen: <input style="width: 47.5%;" type="text" name="img" value="${productos["imagen"]}">
                                        </label>
                                        <br><br>
                                        <label for="precio" class="posicionar_label">
                                            Precio: <input style="width: 49.3%;" type="number" name="precio" value="${productos["precio"]}">
                                        </label>
                                        <br><br>
                                        <label for="size" class="posicionar_label">
                                            Talla: <input style="width: 51.5%;" type="text" name="size" value="${productos["tallas"]}">
                                        </label>
                                        <br><br>
                                        <label for="size" class="posicionar_label">
                                            Categoría: <input style="width: 44.5%;" type="text" name="size" value="${productos["categoria"]}">
                                        </label>
                                        <br><br>
                                        <label for="descrip" class="posicionar_label">
                                            Descripción:<textarea style="width: 42.5%;" name="descrip">${productos["descripcion"]}</textarea>
                                        </label>
                                        <br><br>
                                        <label for="enlace" class="posicionar_label">
                                            Enlace: <input style="width: 48.5%;" type="text" name="enlace" value="${productos["enlace_relacionado"]}">
                                        </label>
                                        <br><br>
                                        <label for="enviar">
                                            <center><input style="width: 85%;" type="submit" name="enviar" value="Modificar"></center>
                                        </label>
                                    </form>
                                </fieldset>
                            </div>
                        </div>`);
    }
    let orden_categoria=prompt("Elige categoria: Shooter | Dunker");

    let filtrado=camisetas.filter(
        (productos)=>{
            return productos["categoria"].toUpperCase().includes(orden_categoria.toUpperCase());
        }
    )

    let orden=prompt("Como quieres ordenarlo: ascendente o descendente");

    if(orden.toLocaleLowerCase()=="ascendente"){
        filtrado.sort(
            (a,b)=>{
                return a["nombre"].localeCompare(b["nombre"]);
            }
        )
        filtrado.forEach(mostrarproductos);
    }else if(orden.toLocaleLowerCase()=="descendente"){
        filtrado.sort(
            (a,b)=>{
                return b["nombre"].localeCompare(a["nombre"]);
            }
        )
        filtrado.forEach(mostrarproductos);
    }else{
        camisetas.forEach(mostrarproductos);
    }
    
}else{
    document.write(`<center><h1 style="color:#ffffff;">Visite nuestra página siempre que quiera</h1></center>`); 
}