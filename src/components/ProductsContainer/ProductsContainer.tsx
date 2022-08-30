import { Products } from "../../common/interfaces";
import "./ProductsContainer.css";

type ProductContainerProps = {
  products: Products;
};

export default function ProductsContainer({ products }: ProductContainerProps) {
  console.log(products);
  return (
    <>
      <div>Products Container</div>
      {products.list.map((product) => (
        <div>{product.productName}</div>
      ))}
    </>
  );
}
