import { Product } from "../../types/Product";
import image1 from "../images/7xyxzj.jpg";
import image2 from "../images/7y8rby.jpg";
import image3 from "../images/7y8ux9.jpg";
import image4 from "../images/7y8yte.jpg";
import image5 from "../images/7y8zx6.jpg";
import image6 from "../images/7yag1b.jpg";

export const data : Array<Product> = [{
    id: "product-1",
    image : image1,
    name : "Some meme",
    price : 13000,
    stock : 1
}, {
    id: "product-2",
    image : image2,
    name: "Some meme 2",
    price: 15000,
    stock: 3
}, {
    id: "product-3",
    image : image3,
    name: "Some meme 3",
    price: 12300,
    stock: 2
}, {
    id: "product-4",
    image: image4,
    name: "Some meme 4",
    price: 5000,
    stock: 5
}, {
    id: "product-5",
    image: image5,
    name: "Some meme 5",
    price: 6000,
    stock: 50
}, {
    id: "product-6",
    image: image6,
    name: "Some meme 6",
    price: 75000,
    stock: 25
}]