import { useState } from "react";
import Filter from "./components/Filter";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import { useDispatch, useSelector } from "react-redux";
import { getAllNetworkList } from "./redux/action";


function App() {
  const [url, setUrl] = useState(null);
  const dispatch = useDispatch();
  const { netoworkRequestDetails } = useSelector((store) => store);
  console.log(netoworkRequestDetails, "store");

  const handleRequest = async () => {
    if (!url) return;
    dispatch(getAllNetworkList(url));
  };

  return (
    <div className="bg-[#000000d8] text-[#ffffffcd] w-full h-screen">
      <div className="flex gap-4 ">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="rounded-md w-1/3 bg-slate-300 p-2"
          type="url"
          placeholder="Enter Your Url"
        />
        <button
          onClick={handleRequest}
          className="px-3 py-2 border-[1px] rounded-md bg-slate-500 hover:bg-slate-900 hover:text-white"
        >
          Request
        </button>
      </div>
      <Header1 />
      <Header2 />
      <Header3 />
      <Filter />
      <div className="overflow-x-auto">
      <table className="min-w-full bg-[#1a202c] text-white border-collapse text-[12px]">
          <thead>
            <tr className="bg-[#2d3748]">
              <th className="py-2 px-4 border border-[#4a5568]">Name</th>
              <th className="py-2 px-4 border border-[#4a5568]">Status</th>
              <th className="py-2 px-4 border border-[#4a5568]">Type</th>
              <th className="py-2 px-4 border border-[#4a5568]">Initiator</th>
              <th className="py-2 px-4 border border-[#4a5568]">Size</th>
              <th className="py-2 px-4 border border-[#4a5568]">Time</th>
            </tr>
          </thead>
          <tbody>
            {
              netoworkRequestDetails?.map((req, index) => (
                <tr key={index} className="bg-[#2d3748] hover:bg-[#4a5568]">
                  <td className="py-2 px-4 border border-[#4a5568]">
                    {req.resourceName}
                  </td>
                  <td className="py-2 px-4 border border-[#4a5568]">
                    {req.status}
                  </td>
                  <td className="py-2 px-4 border border-[#4a5568]">
                    {req.type}
                  </td>
                  <td className="py-2 px-4 border border-[#4a5568]">
                    {req.initiator || "Other"}
                  </td>
                  <td className="py-2 px-4 border border-[#4a5568]">
                    {req.size}
                  </td>
                  <td className="py-2 px-4 border border-[#4a5568]">
                    {req.timing} ms
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
