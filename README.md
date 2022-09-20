# itemCollection (Firebase)
-  Se Conecta la colección de firestore con el listado de ítems y con el detalle de ítem.
- Se eliminan todos los mocks.
- Navegar a "/category/:id" consulta la colección products filtrada por categoria
- Navegar a "/item/:id" consulta por un solo producto.

# CartView
- El componente CartWidget es reactivo al contexto
- Cart contiene el desglose de la compra agrupada por categorías.
- Cart muestra el precio total
- Cart muestra un mensaje de que el carrito está vacío y muestra un boton que redirige a "/"
- CartWidget muestra la cantidad de items comprados y redirige a /cart
- Cada producto tiene un boton que lo elimina del carrito
- Hice el deploy en Vercel

# CartContext
- implementado React Context
- Está agregada la ruta /cart al BrowserRouter
- El botón de agregar al carrito, agrega el item y despliega un boton que redirige a /Cart.
- Cart contiene el conjunto de productos de la compra.
- En el carrito (/Cart) hay un botón que vacía el carro.

# Entrega intermedia del Proyecto Final
 link gif: https://drive.google.com/drive/folders/12ulLLkRqC2AJu1t0Nnuaek2DF9o1O6Cv?usp=sharing
- Dependencias:
    - Material UI https://mui.com/material-ui/getting-started/overview/
    - react-router-dom https://reactrouter.com/docs/en/v6/getting-started/overview

- Rúbrica de la entrega
    ###### Componentes
    - NavBar con CartWidget
    - Catálogo
    - Detalle del producto
    ###### Rutas a configurar
    - '/' navega a <ItemListContainer />
    - '/categoria/:id' <ItemListContainer />
    - '/detalle/:id' navega a <ItemDetailContainer />
    ###### Links a configurar
    - Clickear en el brand debe navegar a '/'
    - Clickear un Item.js debe navegar a '/item/:id'
    - Clickear en una categoría del navbar debe navegar a '/category/:categoryId'

# Entrega detalle del Producto
- Se agregan los componentes:
    - ItemDetailContainer
    - ItemDetail


# Entrega cd catálogo con Maps
- Se agregan los componentes
    - Item
    - ItemList
- Se agrega el componente ItemListLoader para simular la carga.
- Se implementa una promesa para emular la carga de artículos desde un api.

# Entrega del componente ItemCount

- Se crea el componente ItemCount de acuerdo a la consigna
- Recibe el stock disponible del item y se pueden agregar items hasta alcanzar el stock
- Si no hay item el boton agregar no tienen efecto
- Se ejecuta la función onAdd solo cuando hay una cantidad mayor que cero seleccionada.
- Se muestra la cantidad incializada con el parámetro initial.

# Tercer entrega - Crear 2 componentes

- Componente CartWidget con un ícono, ubicado en el NavBar.
- Componente ItemListContainer que recibe una prop 'greeting' y la muestra.

# Segunda entrega - Crear un menú simple

- Se crea una NavBar usando Material UI

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

