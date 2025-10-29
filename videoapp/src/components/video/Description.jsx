import { Pencil, Trash } from "lucide-react";
import Heading from "@/components/ui/Heading";
import NavLink from "../ui/NavLink";

const Description = () => {
  return (
    <div>
      <Heading level={5} text="Some video title" className="tracking-tight" />
      <div className="pb-4 flex items-center space-between border-b">
        <Heading
          level={6}
          fontWeight="normal"
          text="Uploaded on 23 Nov 2022"
          className="w-full text-slate-600 leading-6"
        />

        <div className="flex gap-6 w-full justify-end">
          <NavLink to="/videos/edit/1" icon={Pencil} label="Edit" />
          <NavLink
            to="#"
            icon={Trash}
            label="Delete"
            className="hover:text-danger-500!"
          />
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ex.
        Facilis excepturi ratione magnam quia maiores architecto eaque fugiat
        sit quos ex quod quam praesentium optio eligendi, laborum cupiditate.
        Quidem.
      </div>
    </div>
  );
};

export default Description;
