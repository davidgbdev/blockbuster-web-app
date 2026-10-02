# Blockbuster Web App

Este repositorio contiene el código fuente de la aplicación web desarrollada para Blockbuster, destinada a la venta y alquiler de películas.

## Características

- Visualización de listado de películas.
- Agregación de películas a un carrito de compra.
- Página de detalle del carrito de compra con opción de finalizar la compra.

## Tecnologías Utilizadas

- Create React App
- Styled Components
- React Router (Última versión)
- Axios
- TypeScript

## Instalación y Uso

1. Clona el repositorio:
``` 
git clone https://github.com/TU_USUARIO/blockbuster-web-app.git
```

2. Navega al directorio del proyecto:
```
cd blockbuster-web-app
```

3. Instala las dependencias:
```
npm install
```

4. Configura la clave de OMDb (ver la sección siguiente).

5. Ejecuta la aplicación:
```
npm start
```

La aplicación ahora debería estar corriendo en `http://localhost:3000/`.


## Url de la App

Puedes probar la aplicación en la siguiente URL: : [https://blockbuster-web-app.vercel.app/](https://blockbuster-web-app.vercel.app/)


## Clave de la API de OMDb

La aplicación lee la clave desde la variable de entorno `REACT_APP_OMDB_API_KEY` (Create React App la inyecta en el build a partir de un archivo `.env` local).

1. Solicita una clave gratuita en [OMDb API](https://www.omdbapi.com/apikey.aspx). La documentación está en [http://www.omdbapi.com/](http://www.omdbapi.com/).
2. Copia la plantilla y edítala en la raíz del proyecto:
```
cp .env.example .env
```
3. En `.env`, sustituye el marcador por tu clave:
```
REACT_APP_OMDB_API_KEY=tu_clave_de_omdb
```

`.env` y `.env.local` están en `.gitignore` y no deben subirse al repositorio. Si cambias la variable, vuelve a ejecutar `npm start` o `npm run build` para que Create React App la vuelva a leer.

Una clave usada en el código del front-end queda visible para quien use el sitio desplegado: aparece en el JavaScript que descarga el navegador. No la trates como un secreto de servidor.
