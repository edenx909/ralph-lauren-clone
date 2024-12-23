export default function Newsletter() {
  return (
    <div className="m-3 flex flex-col items-center justify-center border-t-[1px] p-4 py-16 lg:flex-row">
      <p className="m-3 w-full text-center lg:w-3/4">
        SIGN UP TO RECEIVE EMAIL UPDATES ON PROMOS, ANNOUNCEMENTS AND MORE
      </p>
      <div className="flex w-full border">
        <input
          type="email"
          placeholder="ENTER EMAIL ADDRESS"
          className="w-9/12 pl-2"
        />
        <button className="w-3/12 border bg-[#041E3A] p-2 uppercase text-white">
          Submit
        </button>
      </div>
    </div>
  );
}
