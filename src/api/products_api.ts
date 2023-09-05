import axios from "axios";

export class ProductsAPI{
  static url = "http://localhost:3000/data/products.json"

  static async getProducts() {
    const res = await axios.get<IProduct[]>(this.url)
    const products = res.data
    return products
  }
}