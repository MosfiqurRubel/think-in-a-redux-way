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

  // const handleSubmit = (e) => [e.preventDefault()];
  // console.log(search);

  return (
    <form
      // onSubmit={handleSubmit}
      className="flex items-center"
    >
      <div className="group relative rounded-md bg-white">
        <SvgIcon
          name="search"
          className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
        />
        <Input
          // value={search}
          // onChange={handleSearch}
          placeholder="Search"
          id="lws-searchBook"
          className="ps-10 max-w-56 rounded-md"
        />
      </div>
    </form>
  );
};

export default SearchBar;

{
  /* <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
  <form>
    <input
      className="outline-none border-none mr-2"
      type="search"
      name="search"
      placeholder="Search"
    />
  </form>
  <img
    className="inline h-4 cursor-pointer"
    src="./assets/search.svg"
    alt="Search"
  />
</div>; */
}
