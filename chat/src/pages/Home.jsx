import SvgIcon from "../components/ui/SvgIcon";

const Home = () => {
  return (
    <div className="min-w-full border border-secondary-200 rounded-none flex lg:grid lg:grid-cols-3">
      <div className="w-[100px] border-r border-t-0 border-secondary-200 lg:col-span-1 md:w-full">
        <div className="h-[65px] text-center text-secondary-500 p-4 border-b border-secondary-200 flex md:justify-end justify-center">
          <SvgIcon name="pencil" className="w-5 h-5 text-foreground" />
        </div>
        <ul className="overflow-auto">
          <li>
            <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-secondary-200 cursor-pointer hover:bg-secondary-100 focus:outline-none">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                alt="username"
              />
              <div className="w-full pb-2 hidden md:block">
                <div className="flex justify-between">
                  <span className="block ml-2 font-semibold text-foreground">
                    Jhon Don
                  </span>
                  <span className="block ml-2 text-sm text-foreground">
                    25 minutes
                  </span>
                </div>
                <span className="block ml-2 text-sm text-foreground">bye</span>
              </div>
            </a>
            <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-secondary-100 border-b border-secondary-200 cursor-pointer focus:outline-none">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
                alt="username"
              />
              <div className="w-full pb-2 hidden md:block">
                <div className="flex justify-between">
                  <span className="block ml-2 font-semibold text-foreground">
                    Same
                  </span>
                  <span className="block ml-2 text-sm text-foreground">
                    50 minutes
                  </span>
                </div>
                <span className="block ml-2 text-sm text-foreground">
                  Good night
                </span>
              </div>
            </a>
            <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-secondary-200 cursor-pointer hover:bg-secondary-100 focus:outline-none">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                alt="username"
              />
              <div className="w-full pb-2 hidden md:block">
                <div className="flex justify-between">
                  <span className="block ml-2 font-semibold text-foreground">
                    Emma
                  </span>
                  <span className="block ml-2 text-sm text-foreground">
                    6 hour
                  </span>
                </div>
                <span className="block ml-2 text-sm text-foreground">
                  Good Morning
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:col-span-2 lg:block">
        <div className="w-full grid conversation-row-grid">
          <div className="relative flex items-center p-3 border-b border-secondary-200">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
              alt="username"
            />
            <span className="block ml-2 font-bold text-foreground">Emma</span>
            <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
          </div>
          <div className="relative w-full p-6 overflow-y-auto">
            <ul className="space-y-2">
              <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-secondary-700 rounded shadow">
                  <span className="block">Hi</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-secondary-700 bg-secondary-100 rounded shadow">
                  <span className="block">Hiiii</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-secondary-700 bg-secondary-100 rounded shadow">
                  <span className="block">how are you?</span>
                </div>
              </li>
              <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-secondary-700 rounded shadow">
                  <span className="block">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between w-full p-3 border-t border-secondary-200">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-secondary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>

            <input
              type="text"
              placeholder="Message"
              className="block w-full py-2 pl-4 mx-3 bg-secondary-100 focus:ring focus:ring-violet-500 rounded-full outline-none focus:text-secondary-700"
              name="message"
              required
            />
            <button type="submit">
              <svg
                className="w-5 h-5 text-secondary-500 origin-center transform rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
