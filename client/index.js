const axios = require("axios");

// -------------------------------------------------------

const getProductos = async () => {
  const productos = await axios.get("http://localhost:8080/api/productos");
  console.log(productos.data);
};

// getProductos()

// -------------------------------------------------------

const getProducto = async () => {
  const producto = await axios.get(
    "http://localhost:8080/api/productos/62a2101d91edaa01a74664bd"
  );
  console.log(producto.data);
};

// getProducto()

// -------------------------------------------------------

const producto = {
  title: "Microscopio2",
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/microscope-lab-science-school-128.png",
  price: 15000,
};

const postProd = async (obj) => {
  const productoAgregado = await axios.post(
    "http://localhost:8080/api/productos",
    obj
  );
  console.log(productoAgregado.data);
};

// postProd(producto)

// -------------------------------------------------------

const putProd = async () => {
  const productoActualizado = await axios.put(
    "http://localhost:8080/api/productos/632a05bdd79a45c00def0df5",
    {
      title: "Microscopio Actualizado",
      price: 4567,
      thumbnail:
        "https://cdn3.iconfinder.com/data/icons/education-209/64/microscope-lab-science-school-128.png",
    },
    {
      headers: {
        "x-access-token": "token-value",
      },
    }
  );
  console.log(productoActualizado.data);
};

// putProd();

// -------------------------------------------------------

const deleteProd = async () => {
    const productoEliminado = await axios.delete(
      "http://localhost:8080/api/productos/632a05bdd79a45c00def0df5",
      {
        headers: {
          "x-access-token": "token-value",
        },
      }
    );
    console.log(productoEliminado.data);
  };
  
//   deleteProd();

module.exports = postProd