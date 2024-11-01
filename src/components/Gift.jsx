import { useState } from "react";
import { useCart } from "../contexts/Cart";
import { useWishlist } from "../contexts/Wishlist";
import gift from "../assets/images/gift.jpeg";

export default function Gift() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [amount, setAmount] = useState("");
  const predefinedAmount = [50, 100, 250, 500, 1000];
  return (
    <div className="flex flex-col lg:flex-row">
      <div
        className="h-[50vh] w-full bg-black bg-cover p-12 text-white lg:h-auto lg:w-1/2"
        style={{
          backgroundImage: `url(${gift})`,
        }}
      ></div>
      <div className="w-full p-12 lg:w-1/2">
        <p className="py-4 text-3xl">Virtual Gift Card</p>
        <p>Arrives within 24 hours via email.</p>
        <p className="py-4 text-lg uppercase">Select Gift Card Amount</p>
        <div className="my-3">
          {predefinedAmount.map((amount) => (
            <button
              key={amount}
              className="mx-2 my-2 rounded-lg border px-4 py-3"
              onClick={() => setAmount(amount)}
            >
              A$ {amount}
            </button>
          ))}
        </div>
        <div className="flex flex-col">
          <input
            type="number"
            className="border px-6 py-4"
            placeholder="*Enter Custom Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <p className="py-4 text-lg uppercase">Send Your Virtual Gift Card</p>
          <input
            type="text"
            className="my-2 border px-6 py-4"
            placeholder="*Recipient's Name"
          />
          <input
            type="text"
            className="my-2 border px-6 py-4"
            placeholder="*Sender's Name"
          />
          <input
            type="email"
            className="my-2 border px-6 py-4"
            placeholder="*Recipient's Email Address"
          />
          <input
            type="email"
            className="my-2 border px-6 py-4"
            placeholder="*Corfirm Email Name"
          />
        </div>
        <p className="py-4 text-lg uppercase">When Would You like this send?</p>
        <input type="date" className="my-2 w-full border px-6 py-4" />
        <button
          className="my-4 w-full border bg-[#041E3A] p-2 px-6 py-4 uppercase text-white"
          onClick={() =>
            addToCart({
              id: amount,
              name: `Gift Card A$${amount}`,
              price: amount,
              quantity: 1,
              img: gift,
            })
          }
        >
          Add to Cart
        </button>
        <button
          className="my-4 w-full border bg-[#041E3A] p-2 px-6 py-4 uppercase text-white"
          onClick={() =>
            addToWishlist({
              id: amount,
              name: `Gift Card A$${amount}`,
              price: amount,
              quantity: 1,
              img: gift,
            })
          }
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
