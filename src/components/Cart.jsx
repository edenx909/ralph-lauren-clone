import { useCart } from "../contexts/Cart";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  console.log(cart);

  return (
    <div className="flex flex-col md:flex-row">
      {cart.length === 0 ? (
        <div className="relative flex w-full items-center justify-start border-b p-4">
          Your Cart is Empty!
        </div>
      ) : (
        <>
          <div className="flex w-full flex-col md:w-3/4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="relative flex w-full items-center justify-start border-b p-4"
              >
                <img src={item.img} className="m-4 h-80" alt={item.name} />
                <div>
                  <p className="text-lg md:text-2xl">{item.name}</p>
                  <br /> x{item.quantity}
                  <br /> A${item.price}
                </div>
                <button
                  className="absolute right-8 top-8"
                  onClick={() => removeFromCart(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="none"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m13.5.5l-13 13m0-13l13 13"
                    ></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="m-4 flex w-full flex-col items-center p-4 md:w-1/4 md:items-end md:justify-start">
            <p className="py-6 text-2xl">Total Price</p>
            <p className="py-3 pr-2 text-blue-950">
              A$
              {cart.reduce(
                (total, item) => total + item.price * (item.quantity || 1),
                0,
              )}
            </p>
            <button className="my-4 rounded-lg border bg-[#041E3A] p-2 px-4 py-2 uppercase text-white">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
