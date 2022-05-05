# V2 proyecto Movies react

Durante estas dos semanas hemos estado diseñando el sistema de login de los usuarios en la aplicación:

# Para poder ejecutar esta idea de forma correcta hemos tenido que utilizar las siguientes herramientas:

- RestAPI: Hemos construido una rest api mediante typescript y node.js con el fin de realizar la gestión de usuarios en la plataforma, por ahora
unicamente estoy manejando una ruta la cual tiene el fin de realizar verificaciones a la hora de hacer login.
- Creación de un nuevo componente dedicado al login, desde este componente atrapamos lo que el usuario introduce en las "cajas" username y password para de esta manera mandarlo a la restApi y hacer una consulta en nuestra base de datos
- Base de datos: Como base de datos estamos utilizando mongo Atlas
- Paquete de la librería NPM para crear y gestionar Cookies (universaL-COOKIE): Hemos decidido que toda la gestión referente a los usuarios la vamos a realizar mediante cookies ya que de esta manera todos los componentes de la aplicación tendrán acceso a la información del usuario (nombre de usuario, id, nombre completo...) además de
           conocer si un usuario está logeado o no.

# Objetivos alcanzados:

-Conseguir un sistema de logeo requerido, es decir, no se puede acceder a la aplicación si no se está logueado.
-Inicio de la gestión de usuarios.
-Creación de cookies para administras al usuario.
         
# Pendiente en cuanto al Login:

-Habilitar boton de log-out(Borrar la cookie)
-Crear componente de registro.
-Crear componente de edición de cuenta.
         
 # USUARIOS DISPONIBLES EN LA APLICACIÓN
 Se deben usar los siguientes usuarios si se quiere acceder a la aplicación (hasta que se habilite el registro)
 
 # Username -> Password:
 # santi - santi
 # adolfo - adolfo
