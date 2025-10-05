import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "@/redux/booking/actions";
import frame from "@/assets/img/icons/Frame.svg";
import guest from "@/assets/img/icons/guest.svg";
import classIcon from "@/assets/img/icons/classIcon.svg";
import AppSvgIcon from "@/components/AppSvgIcon";

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookings.length >= 3) return;
    const newBooking = {
      // id: Date.now(),
      id: crypto.randomUUID(),
      ...formData,
    };
    dispatch(addBooking(newBooking)); // Redux store e action পাঠালাম
    console.log(formData);
    setFormData({ from: "", to: "", date: "", guests: "", ticketClass: "" });
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form onSubmit={handleSubmit} className="first-hero lws-inputform">
          {/* From  */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                value={formData.from}
                onChange={handleChange}
                id="lws-from"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* To  */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                value={formData.to}
                onChange={handleChange}
                id="lws-to"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* Date  */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              id="lws-date"
              required
            />
          </div>

          {/* Guests  */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={guest} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                id="lws-guests"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* className  */}
          <div className="des-from !border-r-0">
            <p>className</p>
            <div className="flex flex-row">
              <img src={classIcon} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                value={formData.ticketClass}
                onChange={handleChange}
                id="lws-ticketClass"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={bookings.length >= 3}
            className={`${
              bookings.length >= 3
                ? "!bg-purple-300/50 !cursor-not-allowed hover:!shadow-none"
                : ""
            } addCity`}
            id="lws-addCity"
          >
            <AppSvgIcon name="add" color="transparent" size={15} />
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
