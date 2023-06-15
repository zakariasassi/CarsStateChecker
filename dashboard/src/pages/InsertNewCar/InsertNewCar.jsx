import React , {useState} from "react";
import { Box } from "@mui/material";
import { url } from "../../constent/url";
import axios from 'axios'
function InsertNewCar() {


  const [bordNumber, setBordNumber] = useState('');
  const [country, setCountry] = useState('');
  const [yearMade, setYearMade] = useState('');
  const [bodyNumber, setBodyNumber] = useState('');
  const [enginePower, setEnginePower] = useState('');
  const [passengersNumber, setPassengersNumber] = useState('');
  const [weight, setWeight] = useState('');
  const [typeOfLicence, setTypeOfLicence] = useState('');
  const [placeLinked, setPlaceLinked] = useState('');
  const [type, setType] = useState('');
  const [carColor, setCarColor] = useState('');
  const [engineNumber, setEngineNumber] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post( url +  '/createLicenceDepartment', {
        bord_number: bordNumber,
        country : country,
        year_made: yearMade,
        body_number: bodyNumber,
        engine_power: enginePower,
        passngers_number: passengersNumber,
        wighet: weight,
        type_of_licence: typeOfLicence,
        place_linked: placeLinked,
        type,
        car_color: carColor,
        engine_number: engineNumber
      });

      console.log(response)
      
      // Handle response or perform additional actions
    } catch (error) {
      // Handle error
    }
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
          <div className="p-lg-5" style={{float:'right' , width:'100%'}}>

       
            <div className="max-w-100 mx-auto" dir='rtl'>
  <h2 className="text-2xl font-bold mb-4">بيانات السيارة</h2>

  <div className="grid grid-cols-2 gap-4">
    <div className="mb-4">
      <label className="block text-lg mb-2">رقم اللوحة المعدنية:</label>
      <input onChange={e => setBordNumber(e.target.value)}  className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">بلد الصنع:</label>
      <input onChange={e => setCountry(e.target.value)}   className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">سنة الصنع:</label>
      <input  onChange={e => setYearMade(e.target.value)}  className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">رقم الهيكل:</label>
      <input onChange={e => setBodyNumber(e.target.value)}  className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">قوة المحرك بالحصان:</label>
      <input onChange={e => setEnginePower(e.target.value)}  className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">عدد الركاب المصرح بهم بخلاف السائق:</label>
      <input onChange={e => setPassengersNumber(e.target.value)}  className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">الحمولة بالطن:</label>
      <input onChange={e => setWeight(e.target.value)}  className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">الغرض من ترخيص السيارة:</label>
      <input onChange={e => setType(e.target.value)}  className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">الجهة المقيد بها:</label>
      <input  onChange={e => setPlaceLinked(e.target.value)}  className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">النوع:</label>
      <input  onChange={e => setTypeOfLicence(e.target.value)}  className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">اللون:</label>
      <input  onChange={e => setCarColor(e.target.value)}  className="form-control" type="text" />
    </div>

    <div className="mb-4">
      <label className="block text-lg mb-2">رقم المحرك:</label>
      <input onChange={e => setEngineNumber(e.target.value)}   className="form-control" type="text" />
    </div>

    <button
      onClick={ (e) => {handleSubmit(e)}}
      className='bg-green-600 w-64  text-white p-2'
    >
      حفظ
    </button>
  </div>
</div>





          </div>
        </div>
      </Box>
    </>
  );
}

export default InsertNewCar;
