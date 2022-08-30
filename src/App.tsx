import { useEffect, useState } from "react";

import products from "./assets/db/app-data.json";
import "./styles/App.css";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import { Product } from "./common/interfaces";

function App(): JSX.Element {
  const [productsResponse, setProductsResponse] = useState<Array<Product>>();

  useEffect(() => {
    setProductsResponse(products.products); // to be replaced with API calls from services -> api
  }, []);

  return (
    <div className="App">
      {productsResponse ? (
        <ProductsContainer products={productsResponse} />
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
}

export default App;
