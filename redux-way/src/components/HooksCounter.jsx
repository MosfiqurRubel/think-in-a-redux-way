import { useSelector } from "react-redux";
// import { decrement, increment } from "./../redux/counter/actions";

function HooksCounter({ id }) {
  const count = useSelector((state) => state.value);

  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div id="counter" className="text-2xl font-semibold">
          {count} - {id}
        </div>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (value) => dispatch(increment(value)),
//     decrement: (value) => dispatch(decrement(value)),
//   };
// };

export default HooksCounter;
