# Ecommerce Libreria - with React - Firebase - Typescript

##### `Dev - Francisco Salcedo`

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png" width="50" height="50" >
<img src="https://images.seeklogo.com/logo-png/28/1/firebase-logo-png_seeklogo-285376.png?v=1957907072511277888" width="50" height="50" >
<img src="https://images.seeklogo.com/logo-png/29/1/typescript-logo-png_seeklogo-298572.png?v=1957907471105087288" width="50" height="50" >

## 1. Descripción

Ecommerce hecho en react typescript con base de datos en Firebase.

### 1.1. Paginas

- **Home**: Todos Los libros, Hero
- **Book-Detail**: Detalles del libro seleccionado
- **Categories**: Se cargan las Categorias de la BD
- **Categories-Products**: Se cargan solo los libros de la Categoria seleccionado
- **Not-Found**: Pagina por defecto si no esta enrutada en el router
- **CRUD**: (_Insertar un libro_)
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

- **book**: Los libros que se usaran en el ecommerce
- **categories**: La categoria de los libros
- **contacts**: en la pestaña Contacto al llenar el formulario se crea 1 fila
- **orders**: Al cumplir con los requisitos de la pagina checkout y que la compra sea aceptada del carrito
