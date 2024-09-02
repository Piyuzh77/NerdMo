import { useState, useEffect } from "react";

const Cont = () => {
  const [val, setVal] = useState({
    url: "",
    hrs: "",
    min: "",
    sec: "",
  });

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
    if (
      e.target.name !== "hrs" &&
      e.target.name !== "url" &&
      e.target.value > 59 
    ) {
      setVal({ [e.target.name]: "" });
    }
  };

  const [textVal, setTextVal] = useState([]);
  const [countdowns, setCountdowns] = useState([]); 

  const handleStartTimer = () => {
    let hours = val.hrs ? String(val.hrs).padStart(2, '0') : '00';
    let minutes = val.min ? String(val.min).padStart(2, '0') : '00';
    let seconds = val.sec ? String(val.sec).padStart(2, '0') : '00';

    // let timeString = `${hours}:${minutes}:${seconds}`;

    const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

    if (totalSeconds > 0) {
      setTextVal((oldVal) => [...oldVal, val.url]);
      setCountdowns((oldCountdowns) => [...oldCountdowns, totalSeconds]); // Add the countdown time
    }
  };

  const handleRemove = (index) => {
    setTextVal((prevTextVal) => prevTextVal.filter((_, i) => i !== index));
    setCountdowns((prevCountdowns) => prevCountdowns.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdowns((prevCountdowns) =>
        prevCountdowns.map((seconds) => (seconds > 0 ? seconds - 1 : 0))
      );
    }, 1000);
    
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <div>
        <div className="flex justify-center m-3" name="Container">
          <input
            onChange={handleChange}
            value={val.url}
            name="url"
            className="border border-gray-500 rounded-md px-4 py-2 w-72 h-10 mr-1 place-content-center hover:ring-2 hover:ring-slate-500"
            placeholder="Enter Url to Block..."
            style={{ fontSize: "12px" }}
          />
        </div>
        <div className="flex justify-center">
          <input
            type="number"
            min={"0"}
            onChange={handleChange}
            value={val.hrs}
            name="hrs"
            className="border border-gray-500 rounded-md px-4 py-2 w-16 h-10 mr-1 place-content-center hover:ring-2 hover:ring-slate-500"
            placeholder="HH"
            style={{ fontSize: "9.1px" }}
          />
          <input
            type="number"
            min={"0"}
            max={"59"}
            onChange={handleChange}
            value={val.min}
            name="min"
            className="border border-gray-500 rounded-md px-4 py-2 w-16 h-10 mr-1 place-content-center hover:ring-2 hover:ring-slate-500"
            placeholder="MM"
            style={{ fontSize: "9.1px" }}
          />
          <input
            type="number"
            min={"0"}
            max={"59"}
            onChange={handleChange}
            value={val.sec}
            name="sec"
            className="border border-gray-500 rounded-md px-4 py-2 w-16 h-10 mr-1 place-content-center hover:ring-2 hover:ring-slate-500"
            placeholder="SS"
            style={{ fontSize: "9.1px" }}
          />
          <button
            className="border border-gray-500 rounded-md hover:ring-2 w-16 h-10 bg-white hover:bg-secondaryLightMode hover:text-white justify-center"
            onClick={handleStartTimer}
          >
            +
          </button>
        </div>
        <div className="flex justify-center">
          <ul>
            {textVal.map((item, index) => (
              <div className="flex items-center m-1" key={index}>
                <button
                  className="hover:text-red-400"
                  onClick={() => handleRemove(index)}
                >
                  {item} - {formatTime(countdowns[index])}
                </button>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <button
            className="border border-gray-500 rounded-md hover:ring-2 h-10 bg-white hover:bg-secondaryLightMode hover:text-white mt-4"
            style={{ width: 265 }}
          >
            ⚡︎Focus!
          </button>
        </div>
      </div>
    </>
  );
};

export default Cont;
