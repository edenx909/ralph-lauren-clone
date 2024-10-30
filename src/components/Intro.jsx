import men from "../assets/images/men.jpeg";
import women from "../assets/images/women.jpeg";
import gift from "../assets/images/gift.jpeg";

export default function Intro() {
  return (
    <div className="font-bodoni m-3 flex items-center justify-center p-4">
      <div className="px-3 pr-16">
        <p className="py-2 text-3xl">The World of Luxury</p>
        <p className="px-1">Explore collections</p>
      </div>
      <a className="relative mx-1" href="/shop/men">
        <img src={men} alt="Men Collection" className="" />
        <p className="absolute bottom-10 right-10 text-xl tracking-wider text-white">
          Men
        </p>
      </a>
      <a className="relative mx-1" href="/shop/women">
        <img src={women} alt="Women Collection" className="" />
        <p className="absolute bottom-10 right-10 text-xl text-white">Women</p>
      </a>
      <a className="relative mx-1">
        <img src={gift} alt="Gift Cards" className="" />
        <p className="absolute bottom-10 right-10 text-xl text-white">
          Gift Cards
        </p>
      </a>
    </div>
  );
}
