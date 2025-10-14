import Input from "@/components/ui/Input";
import SvgIcon from "@/components/ui/SvgIcon";

const SearchBar = () => {
  return (
    <form className="flex items-center">
      <div className="group relative rounded-md bg-white">
        <SvgIcon
          name="search"
          className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
        />
        <Input
          placeholder="Filter books..."
          id="lws-searchBook"
          className="ps-10 max-w-56 rounded-md"
        />
      </div>
    </form>
  );
};

export default SearchBar;
