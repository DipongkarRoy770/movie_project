
import { Product } from './product.interface';
import { ProductModel } from './product.schema';

const createProductDb = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getProductDb = async () => {
  const result = await ProductModel.find();
  return result;
};

const idProductDb = async (id: Product) => {
  const result = await ProductModel.findById(id);
  return result;
};
const deleteProductDb = async (id: Product) => {
  const result = await ProductModel.deleteOne(id);
  return result;
};
const updateProduct = async (
  id: Product,
  options = { new: true },
) => {
  const result = await ProductModel.findByIdAndUpdate(id,  options);
  return result;
};


export const allProductServices = {
  createProductDb,
  getProductDb,
  idProductDb,
  deleteProductDb,
  updateProduct,
};
