import './App.css'
import Button from "./components/button/Button.jsx";
import Product from "./components/product/Product.jsx";
import brand from './assets/brand.png'
import story from './assets/our_story.png'
import Tile from "./components/tile/Tile.jsx";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
function App() {
    return (<>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button name="to the collection"/>
                <Button name="shop all bags"/>
                <Button name="pre-orders" disabled={true}/>

            </nav>
            <main>
                <Product
                    title="The handy bag"
                    isBestSeller={true}
                    price="400"
                    image={bag1}
                isNewCollection={false}/>
                <Product
                    title="The stylish bag"
                    isBestSeller={true}
                    price="250"
                    image={bag2}
                isNewCollection={false}/>
                <Product
                    title="The simple bag"
                    isBestSeller={false}
                    price="300"
                    image={bag3}
                isNewCollection={true}/>
                <Product
                    title="The trendy bag"
                    isBestSeller={false}
                    price="150"
                    image={bag4}
                isNewCollection={true}/>
            </main>
        <footer>
                <Tile title="THE BRAND">
                    <p>This is a text tile.This is a text tile.This is a text tile.This is a text tile.</p>
                    <p>It can also have multiple paragraphs.It can also have multiple paragraphs.It can also have multiple paragraphs.</p>
                </Tile>
                <Tile imageSrc={brand} altText="Placeholder Image" />
                <Tile imageSrc={story} altText="Placeholder Image" />
                <Tile title="OUR STORY">
                    <p>This is a text tile.This is a text tile.This is a text tile.This is a text tile.</p>
                    <p>It can also have multiple paragraphs.It can also have multiple paragraphs.It can also have multiple paragraphs.It can also have multiple paragraphs.</p>
                </Tile>
        </footer>
    </>)
}


export default App
