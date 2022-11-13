# Desafio Bsale

## Requisitos:

➔ Construir una tienda online.
➔ Utilizar la base de datos que se proporciona.
➔ Desplegar productos agrupados por la categoría a la que pertenecen.
➔ Generar por separado backend (API REST) y frontend (aplicación que la
consuma)
➔ Agregar un buscador, el cual tiene que estar implementado a nivel de servidor,
mediante una Api Rest cuyo lenguaje y framework puede ser de libre elección.
Es decir, los datos de productos deben llegar filtrados al cliente.
➔ Desarrollar la aplicación de cliente con vanilla javascript/Vanillajs.
➔ ¿Puedo usar react y similares? La respuesta es NO, sólo usar vanilla javascript/
Vanillajs. Si lo desarrollas con react o similares, quedará el ejercicio sin efecto.
➔ ¿Puedo usar librerías o componentes específicos?, Si, tales como; boopstrap,
material, Jquery, entre otros.
➔ Disponibilizar la aplicación en un hosting como a modo de ejemplo, puede ser;
Heroku, Netlity, Aws u otro.
➔ Disponibilizar el código en Github.

## Backend:
Para la construccion de la API se utilizo como base la arquitectura de 3 capas (CONTROLLERS - SERVICES - ACCESOBDD ):

Dentro del **controlador** manejaremos todo lo relacionado con HTTP. Eso significa que estamos tratando con solicitudes y respuestas para nuestros endpoints. Por encima de esa capa también hay un pequeño **enrutador** de Express que pasa las solicitudes al controlador correspondiente y siguiendo las buenas practicas se versiona este primer endpoint para mantener el soporte a dicha version (v1).

Toda la lógica comercial estará en la capa de **servicio** que exporta ciertos servicios (métodos) que utiliza el controlador.

La tercera capa es la capa de **acceso** a datos donde trabajaremos con nuestra base de datos (Sólo consultas).

Endpoint:
Para todos los productos:
https://test-bsale.onrender.com/api/v1/products"

Para buscar producto en especifico (requiere argumento por ejemplo api/v1/product/ron):
https://test-bsale.onrender.com/api/v1/product/

Para filtrar por categoria (requiere numero de la categoria por ejemplo /api/v1/category/1 ):
https://test-bsale.onrender.com/api/v1/category/

Categorias:
1 bebida energetica
6 Cerveza
2 Pisco
3 Ron
5 Snack
7 Vodka

## Frontend:
Link del repositorio:
https://github.com/Alfredocrd/desafio-bsaleFront
