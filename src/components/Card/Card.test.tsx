import Card from './Card'
import { products } from "../../assets/db/app-data.json"
import renderer from 'react-test-renderer';

/** snapshot test */
it('renders correctly', () => {
 const tree = renderer
   .create(<Card product={products[0]} />)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});
