export default function Newsletter() {
  return (
    <div className="m-3 flex items-center justify-between border-b-[1px] border-t-[1px] p-4">
      <p>SIGN UP TO RECEIVE EMAIL UPDATES ON PROMOS, ANNOUNCEMENTS AND MORE</p>
      <div className="border">
        <input type="email" placeholder="ENTER EMAIL ADDRESS" className="p-2" />
        <button className="border bg-[#041E3A] p-2 text-white">Submit</button>
      </div>
    </div>
  );
}
