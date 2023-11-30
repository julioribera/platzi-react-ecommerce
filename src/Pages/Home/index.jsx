import { useState, useEffect } from "react";
import Card from "../../Components/Card";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="grid grid-cols-auto-fit gap-4">
      {items.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Home;
