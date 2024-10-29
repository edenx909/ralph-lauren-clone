export default function Footer() {
  return (
    <>
      <div className="m-3 flex justify-evenly p-3">
        <div className="flex flex-col">
          <p className="py-4 uppercase">About</p>
          <a>About us</a>
          <a>Terms of Sale</a>
        </div>
        <div className="border" />
        <div className="flex flex-col">
          <p className="py-4 uppercase">Customer Service</p>
          <a>My Account</a>
          <a>Shipping</a>
          <a>Store Services</a>
        </div>
        <div className="border" />
        <div>
          <p className="py-4 uppercase">Contact Us</p>
          <p>Monday - Friday, 0930 - 1700 AEST </p>
          <p>1800 000 020</p>
          <p>
            For Enquires - <br /> onlineassistance@ralphlauren.com.au
          </p>
        </div>
      </div>
      <div className="border" />
      <div className="mx-64 flex items-center justify-around p-4">
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Youtube</p>
        <p>X</p>
        <p>Pinterest</p>
      </div>
      <div className="flex items-center justify-center pb-7 pt-11">
        <p>Made by Eden using React & Framer Motion</p>
      </div>
    </>
  );
}
