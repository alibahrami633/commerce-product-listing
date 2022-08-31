import ProductsContainer from './ProductsContainer'
import { products } from "../../assets/db/app-data.json"
import renderer from 'react-test-renderer';

/** snapshot test */
it('renders correctly', () => {
 const tree = renderer
   .create(<ProductsContainer products={products} />)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});