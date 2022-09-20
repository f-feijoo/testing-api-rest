import "dotenv/config";
let productosDao;

switch (process.env.PERS) {
  default:
    const { default: ProductosDaoMongoDb } = await import(
      "./daos/ProductosDaoMongo.js"
    );
    productosDao = ProductosDaoMongoDb.getInstance();
    break;
}

export { productosDao };
