import { useState, useContext, useEffect } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const { shoppingCart } = useContext(ShoppingCartContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const handleCardClick = (item) => setSelectedItem(item);
  const handleCloseDetail = () => setSelectedItem(null);

  return (
    <>
      {selectedItem && (
        <ProductDetail product={selectedItem} onClose={handleCloseDetail} />
      )}
      <div className="grid grid-cols-auto-fit gap-4">
        {items.map((item) => (
          <Card
            key={item.id}
            data={item}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
