import AppSvgIcon from "@/components/AppSvgIcon";
import { useDispatch, useSelector } from "react-redux";
import { removeBooking } from "@/redux/booking/actions";

const BookingList = () => {
  const bookings = useSelector((state) => state.booking.bookings);
  const dispatch = useDispatch();
  console.log(bookings);

  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
          {bookings.map((b) => (
            <tr key={b.id} className="lws-bookedTable text-black">
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <p className="lws-bookedFrom">{b.from}</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <p className="lws-bookedTo">{b.to}</p>
              </td>
              <td className="px-6 py-4 text-center">
                <p className="lws-bookedDate">{b.date}</p>
              </td>
              <td className="px-6 py-4 text-center">
                <p className="lws-bookedGustes">{b.guests}</p>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="lws-bookedClass"> {b.ticketClass} </span>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => dispatch(removeBooking(b.id))}
                    className="lws-remove"
                  >
                    <AppSvgIcon name="delete" color="transparent" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {bookings.length === 0 && (
            <tr>
              <td colSpan="6" className="text-gray-500 px-6 py-4 text-center">
                No bookings yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
