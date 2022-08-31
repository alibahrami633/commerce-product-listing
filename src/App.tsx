import { useEffect, useState } from "react";

import products from "./assets/db/app-data.json";
import "./styles/App.css";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import { Product } from "./common/interfaces";

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [productType, setProductType] = useState<string>("");
  const [productsResponse, setProductsResponse] = useState<Array<Product>>();

  useEffect(() => {
    setProductsResponse(products.products); // to be replaced with API calls from services -> api
    setIsLoading(false); // should be added to API call after the call receives the response
  }, []);

  return (
    <div className="App">
      <div className="filterbar-container">
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            id="search-bar"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="filterby-container">
          <label htmlFor="product-type" className="filterbar-title">
            Filter by
          </label>
          <select
            name="product-type"
            id="product-type"
            className="drop-down"
            defaultValue=""
            onChange={(event) => {
              setProductType(event.target.value);
            }}
          >
            <option value="">All</option>
            {products.products
              .filter(
                (product, index, self) =>
                  index === self.findIndex((t) => t.type === product.type)
              )
              .map((product) => (
                <option
                  key={`product-type-${product.index}`}
                  value={product.type}
                >
                  {product.type}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div>
        {productsResponse && !isLoading ? (
          <ProductsContainer
            products={productsResponse
              .filter((product) => {
                if (productType === "") return product;
                else if (
                  product.type
                    .toLocaleLowerCase()
                    .includes(productType.toLocaleLowerCase())
                )
                  return product;
                else return;
              })
              .filter((product) => {
                if (searchTerm === "") return product;
                else if (
                  product.productName
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                )
                  return product;
                  else if (
                    product.type
                      .toLocaleLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  )
                    return product;
                else return;
              })}
          />
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </div>
  );
}

export default App;
