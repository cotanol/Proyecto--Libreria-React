<div align="center">
<h1> Ecommerce Libreria - with React - Firebase - Typescript </h1>
<h5> Dev - Francisco Salcedo </h5>
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png" width="50" height="50" >
<img src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png?hl=es-419" width="50" height="50" >
<img src="https://tse2.mm.bing.net/th?id=OIP.maKe3jXsLd8flovNsX2_3QHaHa&w=474&h=474&c=7" width="50" height="50" >
</div>

## 1. Descripción
Ver Proyecto (https://proyecto-libreria-react-firebase.vercel.app/)
Este proyecto es un Ecommerce de libros creado con React, TypeScript y Firebase. Incluye funcionalidades como navegación por categorías, gestión de productos basico (agregar libro), carrito de compras, y una experiencia intuitiva para los usuarios.

### 1.1. Paginas

- **Home**: Todos Los libros, Hero
- **Book-Detail**: Detalles del libro seleccionado
- **Categories**: Se cargan las Categorias de la BD
- **Categories-Products**: Se cargan solo los libros de la Categoria seleccionado
- **Not-Found**: Pagina por defecto si no esta enrutada en el router
- **CRUD**: (_Insertar un libro_) _/CRUD_
- **Contact**: Contactarse
- **Checkout**: ver el carrito y formulario para comprar
- **Order-Page**: Una vez hecha la compra te manda a una pagina para ver tu numero de seguimiento

## 2. Dependencias

`firebase` `react-router-dom` `react-spinner` `react-icons`

### 2.1. Uso Dependencias

- **firebase**: Como Base de Datos y para llamar y guardar los datos
- **react-router-dom**: Para el enrutamiento.
- **react-spinner**: Para el loading cuando se carga elementos en la pagina
- **react-icons**: Algunos iconos que se usaran en la pagina

## 3. Datos

### 3.1. Credenciales para la conexion a la BD:

`VITE_FIREBASE_API_KEY=AIzaSyBFQD4cM2zXVHZD_KOlun4tVT_wwlwCLSg
VITE_FIREBASE_AUTH_DOMAIN=libreria-proyecto-20.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=libreria-proyecto-20
VITE_FIREBASE_STORAGE_BUCKET=libreria-proyecto-20.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=95680855599
VITE_FIREBASE_APP_ID=1:95680855599:web:5fbefebe0803dea0f9d0da`

### 3.2. Tablas en Firebase:

| Tabla        | Descripción                                         |
| ------------ | --------------------------------------------------- |
| `books`      | Lista de libros con sus datos principales.          |
| `categories` | Categorías de los libros.                           |
| `contacts`   | Datos enviados desde el formulario de contacto.     |
| `orders`     | Pedidos realizados por los usuarios en el checkout. |

## 4. Inicializar Proyecto

### Instalación:

```bash
# Instalar dependencias
npm install

# Iniciar el proyecto
npm run dev
```
