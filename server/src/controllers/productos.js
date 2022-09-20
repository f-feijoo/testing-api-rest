import {
  mostrarProductos,
  mostrarProductoId,
  crearProducto,
  actualizarProducto,
  borrarProducto,
} from "../repository/productosRepo.js";

export const getProductos = async (req, res) => {
  res.status(200).send({ data: await mostrarProductos() });
};

export const getProducto = async (req, res) => {
  let oid = { _id: req.params.id };
  res.status(200).send({ producto: await mostrarProductoId(oid) });
};

export const postProductos = async (req, res) => {
  let objNew = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  };
  let doc = await crearProducto(objNew);
  if (doc) {
    res.status(201).send({ message: "Registro ok!" });
  } else {
    res.status(500).send({ message: "error" });
  }
};

export const putProductos = async (req, res) => {
  let objUpdated = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
    id: req.params.id,
  };
  let doc = await actualizarProducto(objUpdated);
  if (doc) {
    res.send({ message: "Product updated" });
  } else {
    res.send({ message: "error" });
  }
};

export const deleteProductos = async (req, res) => {
  let id = req.params.id;
  await borrarProducto(id);
  res.send({ message: "Product deleted" });
};
