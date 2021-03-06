# Desarrollo_Web_Entorno_Cliente
### U4 - Entregable

Realizar la validación del formulario facilitado en el enunciado, cumpliendo los siguientes requisitos:

* Programar el código de JavaScript en un fichero independiente. La única modificación que se permite realizar en el fichero .HTML es la de escribir la referencia al fichero de JavaScript.
* Almacenar en una cookie el número de intentos de envío del formulario que se van produciendo y mostrar un mensaje en el div "intentos" similar a: "Intento de Envíos del formulario: X". Es decir cada vez que le demos al botón de enviar tendrá que incrementar el valor de la cookie en 1 y mostrar su contenido en el div antes mencionado.
* Cada vez que los campos NOMBRE y APELLIDOS pierdan el foco, el contenido que se haya escrito en esos campos se convertirá a mayúsculas.
* Realizar una función que valide los campos de texto NOMBRE y APELLIDOS. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en los campos correspondientes.
* Validar la EDAD que contenga solamente valores numéricos y que esté en el rango de 0 a 105. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo EDAD.
* Validar el NIF. Utilizar una expresión regular que permita solamente 8 números un guión y una letra. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo NIF. No es necesario validar que la letra sea correcta. Explicar las partes de la expresión regular mediante comentarios.
* Validar el E-MAIL. Utilizar una expresión regular que nos permita comprobar que el email sigue un formato correcto. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo E-MAIL. Explicar las partes de la expresión regular mediante comentarios.
* Validar que se haya seleccionado alguna de las PROVINCIAS. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo PROVINCIA.
* Validar el campo FECHA utilizando una expresión regular. Debe cumplir alguno de los siguientes formatos: dd/mm/aaaa o dd-mm-aaaa. No se pide validar que sea una fecha de calendario correcta. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo FECHA. Explicar las partes de la expresión regular mediante comentarios.
* Validar el campo TELEFONO utilizando una expresión regular. Debe permitir 9 dígitos obligatorios. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo TELEFONO. Explicar las partes de la expresión regular mediante comentarios.
* Validar el campo HORA utilizando una expresión regular. Debe seguir el patrón de hh:mm. No es necesario validar que sea una hora correcta. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo HORA. Explicar las partes de la expresión regular mediante comentarios.
* Pedir confirmación de envío del formulario. Si se confirma el envío realizará el envío de los datos; en otro caso cancelará el envío.

