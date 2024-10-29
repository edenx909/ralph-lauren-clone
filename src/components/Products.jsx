import { useEffect, useState } from "react";

export default function Products() {
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomanProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseMen = await fetch("../../data/men.json");
        const men = await responseMen.json();
        setMenProducts(men);
        const responseWomen = await fetch("../../data/women.json");
        const women = await responseWomen.json();
        setWomanProducts(women);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div>
        {menProducts.length === 0 ? <p> MenLoading</p> : <p>Men Loaded</p>}
      </div>
      <div>
        {womenProducts.length === 0 ? (
          <p> Women Loading</p>
        ) : (
          <p>Women Loaded</p>
        )}
      </div>
    </>
  );
}
