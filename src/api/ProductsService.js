import axiosClient from './httpClient'
class ProductService {
  static getProducts = () => axiosClient().get('/api/v1/products')
}

export default ProductService
