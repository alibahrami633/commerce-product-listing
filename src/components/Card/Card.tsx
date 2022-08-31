import { Product } from "../../common/interfaces";
import "./Card.css";

type CardProps = {
  product: Product;
};

export default function Card({ product }: CardProps) {
  const discount: number = 0.1;
  return (
    <div className="card-container">
      <div className="fixed-element">
        {product.isSale && (
          <img
            src={require("../../assets/images/on-sale.png")}
            alt="on-sale"
            className="sale-image"
          />
        )}
      </div>
      <div className="card-row product-background"><img
            src={require(`../../assets/images/${product.productImage}`)}
            alt={`Product ${product.productName}`}
            className="product-image"
          /></div>
      <div className="card-row text-center product-name">{product.productName}</div>
      <div className={`card-row text-center ${product.isSale ? 'red-text' : ''}`}>
        {product.isSale && 
          <span className="overlined-price">{product.price}</span>} {product.isSale ? `Reduced to $${((parseFloat(product.price.substring(1)))-(parseFloat(product.price.substring(1)))*discount).toFixed(2)}` : product.price }
      </div>      
    </div>
  );
}
