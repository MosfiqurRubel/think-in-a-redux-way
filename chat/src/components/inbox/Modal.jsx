import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

const Modal = ({ open, control }) => {
  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <Heading
            level="2"
            className="text-foreground text-center mt-6"
            text="Send message"
          />
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <Input name="to" placeholder="Send to" required />

              <Textarea
                label="Message"
                name="message"
                placeholder="Message..."
                required
              />
            </div>

            <Button
              type="submit"
              size="md"
              variant="primary"
              text="Send Message"
              className="w-full justify-center font-medium"
            />

            {/* <Error message="There was an error" /> */}
          </form>
        </div>
      </>
    )
  );
};

export default Modal;
