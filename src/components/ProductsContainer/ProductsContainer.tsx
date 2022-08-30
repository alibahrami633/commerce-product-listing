import { Product } from "../../common/interfaces";
import Card from "../Card/Card";
import "./ProductsContainer.css";

type ProductContainerProps = {
  products: Product[];
};

export default function ProductsContainer({ products }: ProductContainerProps) {
  return (
    <div className="product-container">      
      {products.map((product) => (
        <Card key={product.index} product={product} />
      ))}
    </div>
  );
}
