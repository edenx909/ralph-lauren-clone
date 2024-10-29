import men from "../assets/images/men.jpeg";
import women from "../assets/images/women.jpeg";
import gift from "../assets/images/gift.jpeg";

export default function Intro() {
  return (
    <div className="m-3 flex items-center justify-center p-4">
      <div className="px-3 pr-16">
        <p className="py-2 text-5xl">The World of Luxury</p>
        <p className="px-1 text-xl">Explore collections</p>
      </div>
      <button className="relative mx-1">
        <img src={men} alt="Men Collection" className="" />
        <p className="absolute bottom-10 right-10 text-xl text-white">Men</p>
      </button>
      <button className="relative mx-1">
        <img src={women} alt="Women Collection" className="" />
        <p className="absolute bottom-10 right-10 text-xl text-white">Women</p>
      </button>
      <button className="relative mx-1">
        <img src={gift} alt="Gift Cards" className="" />
        <p className="absolute bottom-10 right-10 text-xl text-white">
          Gift Cards
        </p>
      </button>
    </div>
  );
}
