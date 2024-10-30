import gift from "../assets/images/gift.jpeg";

export default function Gift() {
  return (
    <div
      className="h-96 bg-black bg-cover p-12 text-white"
      style={{
        backgroundImage: `url(${gift})`,
      }}
    ></div>
  );
}
