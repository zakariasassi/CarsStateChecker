import React, { useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { url } from "../../constent/url";
function AddNewJomrocCard() {
  const [releasePermitNumber, setReleasePermitNumber] = useState("");
  const [releasedGoods, setReleasedGoods] = useState("");
  const [shipName, setShipName] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [importerName, setImporterName] = useState("");
  const [customsDeclarationNumber, setCustomsDeclarationNumber] = useState("");
  const [customsReceiptNumber, setCustomsReceiptNumber] = useState("");
  const [goodsStorageLocation, setGoodsStorageLocation] = useState("");
  const [warehouseNumber, setWarehouseNumber] = useState("");
  const [parcelsCount, setParcelsCount] = useState(0);
  const [parcelsDetails, setParcelsDetails] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingPolicy, setShippingPolicy] = useState("");
  const [agentName, setAgentName] = useState("");
  const [date, setDate] = useState("");
  const [goodsDescription, setGoodsDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object with the field values
    const data = {
      release_permit_number: releasePermitNumber,
      released_goods: releasedGoods,
      ship_name: shipName,
      arrival_date: arrivalDate,
      importer_name: importerName,
      customs_declaration_number: customsDeclarationNumber,
      customs_receipt_number: customsReceiptNumber,
      goods_storage_location: goodsStorageLocation,
      warehouse_number: warehouseNumber,
      parcels_count: parcelsCount,
      parcels_details: parcelsDetails,
      total_amount: totalAmount,
      shipping_policy: shippingPolicy,
      agent_name: agentName,
      date: date,
      goods_description: goodsDescription,
    };

    // Make a POST request to your server
    axios
      .post(url + '/createJomrok', data)
      .then((response) => {
        // Handle the response
        console.log(response.data);
        // Reset the form or perform any other actions
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
        // Display an error message or perform any other error handling
      });
  };
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          width: "100%",
        }}
      >
        <div className="w-100" style={{ height: "100vh" }}>
          <div className="p-lg-5" style={{ float: "right", width: "100%" }}>
            <div className="max-w-100 mx-auto" dir="rtl">
              <h2 className="text-2xl font-bold mb-4">بيانات الجمارك </h2>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-lg mb-2">
                    رقم إذن الإفراج الجمركي:
                  </label>
                  <input onChange={e => setReleasePermitNumber(e.target.value)} className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    يفرج عن البضاعة الموضحة أدناه من الحيازة الجمركية:
                  </label>
                  <input onChange={e => setReleasedGoods(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">اسم السفينة:</label>
                  <input onChange={e => setShipName(e.target.value)}  className="form-control" type="text" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg mb-2">تاريخ وصولها:</label>
                  <input onChange={e => setArrivalDate(e.target.value)}   className="form-control" type="date" />
                </div>

                <div>
                  <label className="block text-lg mb-2">اسم المستورد:</label>
                  <input onChange={e => setAgentName(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    رقم الإقرار الجمركي:
                  </label>
                  <input onChange={e => setCustomsDeclarationNumber(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    رقم الإيصال الجمركي:
                  </label>
                  <input onChange={e => setCustomsReceiptNumber(e.target.value)}   className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    مكان تخزين البضاعة:
                  </label>
                  <input onChange={e => setGoodsStorageLocation(e.target.value)}   className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">رقم المخزن:</label>
                  <input onChange={e => setWarehouseNumber(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">عدد الطرود:</label>
                  <input onChange={e => setParcelsCount(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    أرقام ووصف الطرود:
                  </label>
                  <input onChange={e => setParcelsDetails(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">المبلغ الإجمالي:</label>
                  <input onChange={e => setTotalAmount(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">بوليصة الشحن:</label>
                  <input onChange={e => setShippingPolicy(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">اسم الوكيل:</label>
                  <input onChange={e => setAgentName(e.target.value)}  className="form-control" type="text" />
                </div>

                <div>
                  <label className="block text-lg mb-2">تاريخه:</label>
                  <input  onChange={e => setDate(e.target.value)}  className="form-control" type="date" />
                </div>

                <div>
                  <label className="block text-lg mb-2">وصف البضائع:</label>
                  <input onChange={e => setGoodsDescription(e.target.value)}  className="form-control" type="text" />
                </div>
              </div>
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="bg-green-600 w-64  text-white p-2"
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default AddNewJomrocCard;
