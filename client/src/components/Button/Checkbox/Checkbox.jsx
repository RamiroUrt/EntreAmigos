/* eslint-disable react/prop-types */
const Checkbox = ({ categoria, onChange, checked }) => {
  return (
    <div className="checkbox flex justify-between">
      <label className="group flex cursor-pointer">
        <input 
          className="hidden peer" 
          type="checkbox" 
          checked={checked} 
          onChange={onChange}
        />

        <span
          className="relative w-8 h-8 flex  bg-gray-100 border-2 border-[#1c5a36] rounded-md shadow-md transition-all duration-500 peer-checked:border-[#badf92] peer-checked:bg-[#1c5a36] peer-hover:scale-105"
        >
          <span
            className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"
          ></span>

          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className="hidden w-5 h-5 text-white peer-checked:block transition-transform duration-500 transform scale-50 peer-checked:scale-100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
            ></path>
          </svg>
        </span>
      </label>
      <h3
        className=" text-[#badf92] group-hover:text-[#1c5a36] transition-colors duration-300 flex"
      >
        {categoria}
      </h3>
    </div>
  );
};

export default Checkbox;
