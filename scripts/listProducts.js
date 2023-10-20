// Lo primero es importar el inventario, po ruqe no esta todo en el mismo JS.
import { inventory } from "./product.js";

//Hay que exportarlo al main
export const listProductos =  () => {
    const table = document.getElementById("inventory-table-events")

    //da igual el nomnbre que pongas
    inventory.forEach(item => {

        const row = table.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        //nombre= atributo del objeto
        cell1.innerHTML = item.nombre;

        cell2.innerHTML = item.cantidad;

        cell3.innerHTML = item.precio;

        const editButton = document.createElement("button");
        editButton.innerText = "EDITAR";
        editButton.id  = editButton;
        editButton.addEventListener("click", () => {
            //logica para editar el producto puedes abrir un modal o realizar alguna accion
            // Puedes acceder a los datos del producto utilizando item.nombre, item.cantidad, item.precio
        });
        cell4.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "BORRAR";
        deleteButton.id = deleteButton;
        deleteButton.addEventListener("click", () => {
            // Logica para borrar el producto (puedes mostrar un mensaje de confirmacion antes de borrar 
            // Puedes acceder a los datos del producto utilizando item.nombre, item.cantidad e item.precio)
        });
        cell4.appendChild(deleteButton);// Estamos insertando el boton con "appendChild"


    })
}