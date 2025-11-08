import { useState } from "react";
import ChatItems from "./ChatIItems";
import Modal from "./Modal";
import SvgIcon from "@/components/ui/SvgIcon";
import Button from "@/components/ui/Button";
// import Blank from "./Blank";

const Sidebar = () => {
  const [opened, setOpened] = useState(false);

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };
  return (
    <div className="w-[100px] border-r border-t-0 border-secondary-200 lg:col-span-1 md:w-full">
      <div className="h-[65px] text-center text-grey-500 p-4 border-b border-secondary-200 flex md:justify-end justify-center">
        <Button
          size="auto"
          variant="iconFlat"
          rounded="full"
          onClick={controlModal}
        >
          <SvgIcon
            name="pencil"
            className="w-5 h-5 text-foreground hover:text-primary-500"
          />
        </Button>
      </div>
      <div className="overflow-auto h-[calc(100vh-129px)]">
        <ChatItems />
      </div>
      {/* <Blank /> */}
      <Modal open={opened} control={controlModal} />
    </div>
  );
};

export default Sidebar;
