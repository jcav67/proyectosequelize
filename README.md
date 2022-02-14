
# Prueba tecnica Gently

## Author: Juan Camilo Arango Valle

## email: jmilo67@hotmail.com

## celular: +57 3006885478

## github: https://github.com/jcav67

# Consideraciones inciales

En primer lugar se debe reconstruir el modulo **node_modules** y realizar las instalaciones necesarias mediante el comando **npm i**, para esta prueba tecnica se utilizó **sequilize** para la creación de la tabla necesaria junto con sus campos respectivos, como base de datos se utilizó **MySql**, la conexión a la misma se encuentra en la carpeta **database** donde es necesario realizar los cambios de nombre de la base de datos, usuario y contraseña.

---

## Rutas de la aplicacion

Al correr en modo desarrollo se tiene como base la ruta 
http://localhost:8080/api/cancion/ seguido de los siguientes endpoints

### GET http://localhost:8080/api/cancion/consultar 

Permite consultar la base de datos, además cuenta con la opción de enviar parametros de **limite** el cual permite acortar la consulta y **desde** el cual informa desde cual registro se hará la consulta.

**ejemplo**

http://localhost:8080/api/cancion/consultar?limite=5&desde=2

**Respuesta de la petición**

{
    "rows": [
        {
            "id": 1,
            "artista": "juanes",
            "nombre_cancion": "a dios le pido",
            "duracion": "3:30",
            "album": "Un dia normal",
            "createdAt": "2022-02-13T01:52:56.000Z",
            "updatedAt": "2022-02-14T00:40:02.000Z"
        },
        {
            "id": 2,
            "artista": "shakira",
            "nombre_cancion": "ojos asi",
            "duracion": "3:30",
            "album": "¿dónde están los ladrones?",
            "createdAt": "2022-02-13T05:02:49.000Z",
            "updatedAt": "2022-02-13T05:49:16.000Z"
        },
        {
            "id": 6,
            "artista": "Fito Paez",
            "nombre_cancion": "Naturaleza sangre",
            "duracion": "3:30",
            "album": "Naturaleza sangre",
            "createdAt": "2022-02-14T01:07:24.000Z",
            "updatedAt": "2022-02-14T01:07:24.000Z"
        }
    ],
    "msg": "la base de datos cuenta con un total de 11 canciones"
}

---

### POST http://localhost:8080/api/cancion/insertar

Permite ingresar canciones a la base de datos, para esta peticion el body debe tener la siguiente forma:

**ejemplo**

{
    "artista":"Fito Paez",
    "nombre_cancion":"11 y 6",
    "duracion":"3:30",
    "album":"Giros"
}

**Todos los campos son requeridos**


**Respuesta de la petición**

{
    "msg": "Cancion agregada con exito",
    "song": {
        "id": 14,
        "artista": "Fito Paez",
        "nombre_cancion": "11 y 6",
        "duracion": "3:30",
        "album": "Naturaleza sangre",
        "updatedAt": "2022-02-14T01:11:32.849Z",
        "createdAt": "2022-02-14T01:11:32.849Z"
    }
}

---

### PUT http://localhost:8080/api/cancion/actualizar/:id

Permite modificar un registro de la base de datos, es necesario el id del registro el cual es enviado mediante la url

**ejemplo**

http://localhost:8080/api/cancion/actualizar/1

de igual forma se requiere un cuerpo parecido al de la peticion post, sin embargo, en este caso los atributos son opcionales}

**ejemplo 1**

{
    "artista":"Fito Paez",
    "nombre_cancion":"11 y 6",
    "duracion":"3:30",
    "album":"Giros"
}

**ejemplo 2**

{
    "nombre_cancion":"11 y 6",
    "duracion":"3:30",
    "album":"Giros"
}

**Respuesta de la petición**

{
    "msg": "cancion modificada con los datos suministrados",
    "artista": "juanes",
    "nombre_cancion": "a dios le pido",
    "duracion": "3:30",
    "album": "Un dia normal"
}

---

### DELETE http://localhost:8080/api/cancion/eliminar/:id

Al igual que put requiere el id de la canción para ser eliminada de la base de dato, este id es enviado por la url de la petición.


**Respuesta de la petición**

{
    "msg": "cancion eliminada con exito",
    "song": {
        "id": 15,
        "artista": "Fito Paez",
        "nombre_cancion": "11 y 6",
        "duracion": "3:30",
        "album": "Giros",
        "createdAt": "2022-02-14T02:56:49.000Z",
        "updatedAt": "2022-02-14T02:56:49.000Z"
    }
}