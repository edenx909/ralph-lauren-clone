import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  // for footer portfolio link
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="m-3 flex flex-col justify-evenly border-t-[1px] p-3 text-sm md:flex-row">
        <div className="flex flex-col space-y-1 py-6">
          <p className="py-4 text-3xl uppercase">About</p>
          <a href="/about">About us</a>
          <a>Terms of Sale</a>
        </div>
        <div className="border-r-[1px] border-t-[1px]" />
        <div className="flex flex-col space-y-1 py-6">
          <p className="py-4 text-3xl uppercase">Customer Service</p>
          <a href="/account">My Account</a>
          <a>Shipping</a>
          <a>Store Services</a>
        </div>
        <div className="border-r-[1px] border-t-[1px]" />
        <div className="space-y-1 py-6">
          <p className="py-4 text-3xl uppercase">Contact Us</p>
          <p>Monday - Friday, 0930 - 1700 AEST </p>
          <a href="tel:1800 000 020" className="text-blue-900">
            1800 000 020
          </a>
          <p>
            For Enquires - <br />{" "}
            <a
              href="mailto:onlineassistance@ralphlauren.com.au"
              className="text-blue-900"
            >
              onlineassistance@ralphlauren.com.au
            </a>
          </p>
        </div>
      </div>
      <div className="border-t-[1px]" />
      <div className="flex items-center justify-center space-x-5 p-4">
        <a href="https://www.instagram.com/ralphlauren/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect
                width={256}
                height={256}
                fill="url(#skillIconsInstagram0)"
                rx={60}
              ></rect>
              <rect
                width={256}
                height={256}
                fill="url(#skillIconsInstagram1)"
                rx={60}
              ></rect>
              <path
                fill="#fff"
                d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
              ></path>
              <defs>
                <radialGradient
                  id="skillIconsInstagram0"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fd5"></stop>
                  <stop offset={0.1} stopColor="#fd5"></stop>
                  <stop offset={0.5} stopColor="#ff543e"></stop>
                  <stop offset={1} stopColor="#c837ab"></stop>
                </radialGradient>
                <radialGradient
                  id="skillIconsInstagram1"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3771c8"></stop>
                  <stop offset={0.128} stopColor="#3771c8"></stop>
                  <stop offset={1} stopColor="#60f" stopOpacity={0}></stop>
                </radialGradient>
              </defs>
            </g>
          </svg>
        </a>
        <a href="https://www.facebook.com/RalphLauren/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 256 256"
          >
            <path
              fill="#1877f2"
              d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
            ></path>
            <path
              fill="#fff"
              d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
            ></path>
          </svg>
        </a>
        <a href="https://x.com/ralphlauren">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.35em"
            height="1.35em"
            viewBox="0 0 128 128"
          >
            <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"></path>
          </svg>
        </a>
        <a href="https://au.pinterest.com/ralphlauren/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 256 256"
          >
            <path
              fill="#cb1f27"
              d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239c-.36-8.938-.064-19.668 2.228-29.393c2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136c11.643 0 17.268 8.745 17.268 19.217c0 11.704-7.465 29.211-11.304 45.426c-3.207 13.578 6.808 24.653 20.203 24.653c24.252 0 40.586-31.149 40.586-68.055c0-28.054-18.895-49.052-53.262-49.052c-38.828 0-63.017 28.956-63.017 61.3c0 11.152 3.288 19.016 8.438 25.106c2.368 2.797 2.697 3.922 1.84 7.134c-.614 2.355-2.024 8.025-2.608 10.272c-.852 3.242-3.479 4.401-6.409 3.204c-17.884-7.301-26.213-26.886-26.213-48.902c0-36.361 30.666-79.961 91.482-79.961c48.87 0 81.035 35.364 81.035 73.325c0 50.213-27.916 87.726-69.066 87.726c-13.819 0-26.818-7.47-31.271-15.955c0 0-7.431 29.492-9.005 35.187c-2.714 9.869-8.026 19.733-12.883 27.421a127.9 127.9 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0C57.314 0 0 57.309 0 128.002"
            ></path>
          </svg>
        </a>
      </div>
      <div className="p2 flex items-center justify-center">
        <p className="m-2">
          <a
            href="https://edenxrana.vercel.app/"
            className="text-blue-950 underline"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: hover ? 360 : 0 }}
              transition={{ duration: 0.2 }}
              className="mr-1 inline-block text-blue-950"
            >
              ©
            </motion.span>
            Made by Eden
          </a>
        </p>
        <p>w/ React & Framer Motion</p>
      </div>
    </>
  );
}
