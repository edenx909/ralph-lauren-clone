import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Products() {
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomanProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const location = useLocation();

  useEffect(() => {
    setFilter(
      location.pathname === "/shop/men"
        ? "men"
        : location.pathname === "/shop/women"
          ? "women"
          : "",
    );
  }, [location.pathname]);

  const handleSort = () => {
    sort === ""
      ? setSort("asc")
      : sort === "asc"
        ? setSort("desc")
        : setSort("");
  };

  const filteredProducts =
    filter === "men"
      ? menProducts
      : filter === "women"
        ? womenProducts
        : [...womenProducts, ...menProducts];

  const sortedProducts = filteredProducts.sort((a, b) =>
    sort === "asc"
      ? a.price - b.price
      : sort === "desc"
        ? b.price - a.price
        : 0,
  );

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
      <div className="m-5 flex flex-col p-5">
        <div className="flex justify-evenly">
          <button
            className="h-12 rounded-full border px-6"
            onClick={() => setFilter("")}
          >
            All
          </button>
          <button
            className="h-12 rounded-full border px-6"
            onClick={() => setFilter("men")}
          >
            Men
          </button>
          <button
            className="h-12 rounded-full border px-6"
            onClick={() => setFilter("women")}
          >
            Women
          </button>
          <button
            className="h-12 rounded-full border px-6"
            onClick={handleSort}
          >
            Sort {sort === "asc" ? "▲" : sort === "desc" ? "▼" : ""}
          </button>
        </div>
      </div>
      <div className="mobile:flex-row flex flex-col flex-wrap items-center justify-center p-5">
        {render(sortedProducts)}
      </div>
    </>
  );
}

function render(sortedProducts) {
  return sortedProducts.map((item) => (
    <div key={item.id} className="font-bodoni mobile:w-96 m-5 border">
      <img src={item.img} className="w-full object-cover" alt={item.name} />
      <div className="p-2">
        <p className="text-xl">{item.name}</p>
        <p>A${item.price}</p>
      </div>
    </div>
  ));
}
