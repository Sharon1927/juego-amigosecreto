# Juego del Amigo Secreto
En este proyecto se desarrolló una aplicación para sortear un nombre de una lista de amigos. Este puede ser utilizado en diversas actividades para elegir al azar un nombre, por ejemplo si se desea elgir a una persona dentro de un grupo de amigos para realizar cierta actividad puede utilizarse esta aplicación para ello.

## Acerca de sus elementos 

La idea de la aplicación consiste básicamente en tres acciones principales :

__1. Campo de texto:__ En este lugar el usuario deberá ingresar los nombres correspondientes a la lista que desea sortear.

__2. Boton de Añadir:__ Al dar click sobre él se agregará a la lista el nombre ingreasado en el campo de texto. En caso de dar click sobre el boton y la caja de texto no tener ningún texto añadido, aparecerá una alerta de que debe ingresar primero un nombre.

__3. Boton de Sortear Amigo:__ Al dar click sobre él, el programa sorteará entre la lista y elegirá un nombre. Aparecerá el texto con el nombre de la persona elegida.

## Acerca de su programación

Es importante que en primer lugar se declaró una variable del tipo __array__ que en ella se almacena la lista de los nombres ingresados. Luego se ingresaron 4 funciones para el correcto funcionamento de la aplicación.

### Función agregarAmigo()

Esta permite al usuario ingresar los nombres y añadirlos a la lista creada en la variable tipo array. Así que en primer lugar se captura el texto ingresado por el usuario. Luego con el uso de condicionales, se ingresa que en caso de que el usuario no ingrese texto muestre una alerta de ingresar texto. 
En caso de ser válido almacenar ese nombre a los amigos.

### Función limpiarCaja()

 Después de añadir el nombre, esta función sirve para restablecer el campo de texto a una cadena vacía.

 ### Función actualizaListaDeAmigos()

Esta función es utilizada para actualizar la lista de amigos en la interfaz HTML. Entre las tareas que cumple esta función estan: obtener el elemento de la lista para seleccionar la lista donde se mostrarán los amigos. Limpiar la lista existente para que al actualizar se asegure que no hayan duplicados.Luego iterar sobre el arreglo y para cada amigo crear un nuevo elemento de lista.

### Función sortearAmigo()

Y esta ultima función permite seleccionar de manera aleatoria uno de los nombres de la lista. Dentro de sus tareas esta en primer lugar identificar para validar que no este vacía la lista. Luego se genera un índice aleatorio. Despues se utiliza el índice aleatorio para acceder al nombre correspondiente en el arreglo. Por ultimo, se muestra el resultado en este proceso en la página.




 
