import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Nav from "./navigation/Nav";
import Product from "./products/Product";
import data from './db/data';
import { useState } from "react";
import Card from "./components/Card";


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // Radio button filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  // Recommended buttons filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query){
    let filteredProducts = products;

    // Filtering input items
    if(query){
      filteredProducts = filteredItems;
    }

    //Selected filter
    if(selected){
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice,
      title}) => category === selected || color === selected || newPrice === selected ||
      company === selected || title === selected );
      }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice}) => (
          <Card 
            key={Math.random()}
            img = {img}
            title = {title}
            star = {star}
            reviews = {reviews}
            prevPrice = {prevPrice}
            newPrice = {newPrice}
             />
    ));
    }

  const result = filteredData(data, selectedCategory, query)
  return (
    <div className="App">
        <Sidebar handleChange={handleChange} />
        <Nav query={query} handleInputChange={handleInputChange}/>
        <Recommended handleClick={handleClick}/>
        <Product result={result}/>
    </div>
  );
}

export default App;
