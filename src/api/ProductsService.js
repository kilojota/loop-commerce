import axiosClient from './httpClient';
class ProductService {
  static getProducts = (pageNumber) => axiosClient().get(`/api/v1/products?page=${pageNumber}`);

  static getProductByName = (name) => axiosClient().get(`/api/v1/products?filter=${name}`);
}

export default ProductService;
