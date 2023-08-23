import { GiCrestedHelmet } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 h-[8rem] sticky top-0 py-6 px-6">
      <div className="flex flex-row gap-2 items-center">
        <GiCrestedHelmet className="text-white h-[4rem] w-[4rem]" />
        <span className="text-white font-bold tracking-widest text-xl">
          INVERATOR
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
