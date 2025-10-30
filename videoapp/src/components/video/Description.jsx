import { Pencil, Trash } from "lucide-react";
import Heading from "@/components/ui/Heading";
import NavLink from "@/components/ui/NavLink";
import Button from "@/components/ui/Button";

const Description = ({ video }) => {
  const { id, title, description, date, link } = video || {};

  return (
    <div>
      <Heading level={5} text={title} className="tracking-tight" />
      <div className="pb-4 flex items-center space-between border-b">
        <Heading
          level={6}
          fontWeight="normal"
          text={`Uploaded on ${date}`}
          className="w-full text-slate-600 leading-6"
        />

        <div className="flex gap-6 w-full justify-end">
          <NavLink to={`/videos/edit/${id}`} icon={Pencil} label="Edit" />
          <Button
            size="auto"
            iconSize={16}
            variant="custom"
            text="Delete"
            icon={Trash}
            className="bg-transparent text-foreground hover:text-danger-600 text-[14px]"
          />
        </div>
      </div>

      <div className="mt-4 text-sm text-secondary-400">{description}</div>
    </div>
  );
};

export default Description;
