export interface ProductModel {
  id: number;
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
}
