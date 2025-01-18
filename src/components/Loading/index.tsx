import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-screen">
      <div className="flex items-center justify-center h-screen">
        <PulseLoader color="#1D4ED8" />
      </div>
    </div>
  );
};

export default Loading;
