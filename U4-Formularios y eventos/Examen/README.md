### U4 - Examen A

Crea una única página web para que un comercial de Samsung introduzca los datos de una serie de electrodomésticos con un formulario que contenga:

    - Nombre del modelo

    - Seleccionable (option) para elegir el tipo de modelo. (ver más abajo para los diferentes valores)

    - Fecha de fabricación (no puede ser de tipo date)

    - Consumo energético

    - Referencia de modelo

    - Password del comercial (con información oculta)

    - Un botón de reset que se llame "Limpiar".

    - Un botón de enviar que se llame "Enviar".

Adicionalmente, el HTML tendrá que tener un elemento DIV para indicar los errores de cada una de las validaciones y otro para la referencia (ver más abajo)

Reglas de elaboración y validación:

* Todos los campos son obligatorios para rellenar y no podrá hacerse mediante "required" de HTML5.
* El seleccionable (option) para el Modelo deberá tener una de las opciones posibles: Televisor, Frigorífico, Lavadora, Microondas o Lavavajillas. No debe estar seleccionado ninguno al comienzo.
* La fecha de fabricación deberá ser en formato dd/mm/yyyy o bien en formato dd-mm-yyyy. No es necesario comprobar que sea una fecha válida.
* El consumo energético deberá uno de los siguientes valores: A+++ A++ A+ A B C D
* La referencia de modelo será del tipo "UE55F8000AFXZ" siendo UE dos letras mayúsculas, 55 un número de dos cifras entre 00 y 99, F la letra F mayúscula, 8000 un número entre 300 y 8000, y AF las letras mayúsculas AF concretamente, X una de las letras X, Y Z y Z cualquier letra, sea mayúscula o minúscula.
* El password debe cumplir las siguientes reglas
       - El símbolo almohadilla (#) al inicio
       - Dos letras minúsculas
       - Una palabra de mínimo 8 caracteres de largo y 16 de máximo
       - Un carácter que no sea alfanumérico ni el carácter ampersan ( & )
       - Tres números entre los siguientes posibles: 3, 7, 9
* Cuando se pulse enviar, se deberán validar todos los campos. Si está correcto, se pondrá en reborde verde, si está incorrecto, se pondrá en reborde rojo y se pondrá el foco en él. Adicionalmente, se deberá generar un número aleatorio de referencia entre 1000 y 2000 que se guardará en una cookie con el nombre "referencia". Además, en ningún caso (esté bien o mal el formulario) se deberá ejecutar la acción por defecto del botón (enviar el formulario) pero se debe limpiar el formulario cuando esté todo correcto y se pulse enviar. También, siempre que esté el formulario correcto y se pulse enviar, en el campo "referencia" deberá aparecer el valor de la última referencia obtenida del valor de la cookie almacenada.

