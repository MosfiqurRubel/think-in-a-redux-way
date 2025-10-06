import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SvgIcon from "@/components/ui/SvgIcon";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import frame from "@/assets/images/icons/Frame.svg";
import guest from "@/assets/images/icons/guest.svg";
import classIcon from "@/assets/images/icons/classIcon.svg";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import { addBooking } from "../redux/booking/actions";

const BookingForm = () => {
  const bookings = useSelector((state) => state.booking.bookings);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketClass: "",
  });

  const destinationFrom = [
    { label: "Dhaka", value: "dhaka" },
    { label: "Sylhet", value: "sylhet" },
    { label: "Saidpur", value: "saidpur" },
    { label: "Cox's Bazar", value: "coxsbazar" },
  ];
  const guestNumbers = [
    { label: "1 Person", value: "one" },
    { label: "2 Person", value: "two" },
    { label: "3 Person", value: "three" },
    { label: "4 Person", value: "four" },
  ];
  const ticketClassType = [
    { label: "Business", value: "business" },
    { label: "Economy", value: "economy" },
  ];

  const handleChange = (e) => {
    // console.log(e.target.name);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      id: crypto.randomUUID(),
      ...formData,
    };

    dispatch(addBooking(newBooking));
    // console.log(formData);
    // console.log(bookings);
    setFormData({
      from: "",
      to: "",
      date: "",
      guests: "",
      ticketClass: "",
    });
  };

  return (
    <section className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form
          onSubmit={handleSubmit}
          className="first-hero lws-inputform items-center"
        >
          <div className="des-from">
            <Label text="Destination From" required="true" />
            <div className="flex flex-row">
              <img src={frame} alt="" />

              <Select
                name="from"
                options={destinationFrom}
                value={formData.from}
                onChange={handleChange}
                placeholder="Please Select"
                required
                id="lws-from"
              />
            </div>
          </div>

          <div className="des-from">
            <Label text="Destination to" required="true" />
            <div className="flex flex-row">
              <img src={frame} alt="" />

              <Select
                name="to"
                options={destinationFrom}
                value={formData.to}
                onChange={handleChange}
                placeholder="Please Select"
                required
                id="lws-to"
              />
            </div>
          </div>

          <div className="des-from">
            <Label text="Journey date" required="true" />
            <div className="flex flex-row">
              {/* <img src={frame} alt="" /> */}

              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                id="lws-date"
              />
            </div>
          </div>

          <div className="des-from">
            <Label text="Guests" required="true" />
            <div className="flex flex-row">
              <img src={guest} alt="" />

              <Select
                name="guests"
                options={guestNumbers}
                value={formData.guests}
                onChange={handleChange}
                placeholder="Please Select"
                required
                id="lws-guests"
              />
            </div>
          </div>

          <div className="des-from !border-r-0">
            <Label text="Class" required="true" />
            <div className="flex flex-row">
              <img src={classIcon} alt="" />

              <Select
                name="ticketClass"
                options={ticketClassType}
                value={formData.ticketClass}
                onChange={handleChange}
                placeholder="Please Select"
                required
                id="lws-ticketClass"
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="outline"
            size="md"
            buttonClass="inline-flex items-center gap-2"
            id="lws-addCity"
            disabled={bookings.length >= 3}
          >
            <SvgIcon
              name="add"
              color="transparent"
              size={15}
              className="shrink-0"
            />
            <span className="text-sm">Book</span>
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
