// import { useDispatch, useSelector } from "react-redux";
// import { searchBook } from "@/redux/filters/actions";
import Input from "@/components/ui/Input";
import SvgIcon from "@/components/ui/SvgIcon";

const SearchBar = () => {
  // const search = useSelector((state) => state.filter.search);
  // const dispatch = useDispatch();

  // const handleSearch = (e) => {
  //   dispatch(searchBook(e.target.value));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  // console.log(search);

  return (
    <form>
      <div className="group relative rounded-md">
        <Input
          name="search"
          type="search"
          // value={search}
          // onChange={handleSearch}
          placeholder="Search"
          inputClass="pe-10 max-w-56 rounded-md"
        />
        <SvgIcon
          name="search"
          className="absolute right-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary-500"
        />
      </div>
    </form>
  );
};

export default SearchBar;
