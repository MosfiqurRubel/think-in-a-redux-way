import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "@/features/filter/filterSlice";
import Input from "@/components/ui/Input";
import SvgIcon from "@/components/ui/SvgIcon";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    // if user in not in home page, redirect to home page
    if (!match) {
      navigate("/");
    }
  };

  return (
    <form onClick={handleSubmit} className="flex items-center">
      <div className="group relative rounded-md bg-background">
        <SvgIcon
          name="search"
          className="absolute left-3 top-1/2 -mt-2.5 text-foreground pointer-events-none group-focus-within:text-primary-500"
        />
        <Input
          name="search"
          type="search"
          value={input}
          onChange={handleSearch}
          placeholder="Search"
          id="lws-searchBook"
          className="ps-10 max-w-56 rounded-md"
        />
      </div>
    </form>
  );
};

export default SearchBar;
