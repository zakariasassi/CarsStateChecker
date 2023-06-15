import React, { useState } from "react";
import axios from "axios";
import { url } from "../../constent/url";

function SinedReports() {
  const [selectedData, setSelectedData] = useState({});
  const [reportData, setReportData] = useState([]);

  const handleInputChange = (e) => {
    setSelectedData({
      ...selectedData,
      [e.target.name]: e.target.value,
    });
  };

  const generateReport = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url + "/SingedgenerateReport", {
        selectedData,
      }); // Replace with your API endpoint
      const data = response.data;
      if (data.state === 1) {
        setReportData(data.reportData);
      } else {
        // Handle error scenario
      }
    } catch (error) {
      // Handle server error
    }
  };

  return (
    <div className="p-5  w-full" dir="rtl">
      <h1 className="text-3xl font-bold mb-4 text-right " dir="rtl">
        توليد تقرير
      </h1>

      {/* Input fields for selecting data */}
      <div className="flex flex-row space-y-4" dir="rtl">
        <div className="flex flex-col">
          <label htmlFor="bord_number" className="font-bold mt-3">
            رقم اللوحة:
          </label>
          <input
            type="text"
            id="bord_number"
            name="bord_number"
            className="border rounded-lg p-2"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col mr-4">
          <label htmlFor="country" className="font-bold mr-4">
            علي حسب البلد:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="border rounded-lg p-2"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col mr-4">
          <label htmlFor="createdAt" className="font-bold mr-4">
            علي حسب التارخ:
          </label>
          <input
            type="date"
            id="createdAt"
            name="createdAt"
            className="border rounded-lg p-2"
            onChange={handleInputChange}
          />
        </div>

        {/* Add more input fields for other filtering criteria */}

        <div className="flex justify-center mr-5">
          <button
            onClick={e =>  generateReport(e)}
            className="bg-green-500 text-white rounded-lg  px-4 hover:bg-green-700 transition-colors"
          >
            توليد التقرير
          </button>
        </div>
      </div>

      {/* Render the report data */}
      {reportData.map((item) => (
        <div key={item.id} className="border rounded-lg p-4 my-4">
          <p>رقم اللوحة: {item.bord_number}</p>
          <p>البلد: {item.country}</p>
          {/* Render other report fields */}
        </div>
      ))}
    </div>
  );
}

export default SinedReports;
