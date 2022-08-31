import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";

/** snapshot test */
it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

test("renders filter by label", () => {
  render(<App />);
  const filterbyLabel = screen.getByText("Filter by");
  expect(filterbyLabel).toBeInTheDocument();
});

jest.mock("./components/Card/Card", () => () => (
  <div id="card-mock">Card Mock</div>
));
jest.mock("./components/ProductsContainer/ProductsContainer", () => () => (
  <div id="products-container-mock">Products Container Mock</div>
));

describe("mock component tests", () => {
  test("renders search bar", () => {
    // arrange
    const { container } = render(<App />);
    console.log(container.outerHTML);

    // act
    const searchBar = container.querySelector("#search-bar");
    const card = container.querySelector("#search-bar");
    const productContainer = container.querySelector("#search-bar");

    // assert
    expect(searchBar).toBeInTheDocument();
    expect(card).toBeInTheDocument();
    expect(productContainer).toBeInTheDocument();
  });
});
