const LicnencesDepartment = require('../model/LisenceDepartment')
const CarModel = require('../model/Car')




exports.createLicenceDepartment = async (req, res) => {
  const {
    license_section,
    vehicle_number,
    usable_for,
    examiners_name,
    examination_date,
  
    //car details
  
    boardNumber, 
    chassisNumber, 
    vehicleId, 
    typeOfCar, 
    carClass, 
    carColour, 
    yearMade, 
    countryOfManufacture, 
    carStatus, 
    horsePower, 
    carLoad, 
    fuelType, 
    typeOfJob, 
    numberOfPassengers, 
    placeOfRegistration
  } = req.body

  
 




    await CarModel.create(
      {

      
        //car details
      
        boardNumber, 
        chassisNumber, 
        vehicleId, 
        typeOfCar, 
        carClass, 
        carColour, 
        yearMade, 
        countryOfManufacture, 
        carStatus, 
        horsePower, 
        carLoad, 
        fuelType, 
        typeOfJob, 
        numberOfPassengers, 
        placeOfRegistration

      } 
    ).then( async (resulte) => {
          await LicnencesDepartment.create({
         license_section,
        vehicle_number,
        usable_for,
        examiners_name,
        examination_date,
        CarCarId : resulte.carId


          }).then(() => {
            res.status(201).json({ success: true, message : 'تمت تأمين السيارة' });

          }).catch( error => {
            console.error(error);
            res.status(500).json({ success: false, error: 'فشلت عملية الاضافة' });
          })
    }).catch(error => {
      console.error(error);
      res.status(500).json({ success: false, error: 'فشلت عملية الاضافة' });
    })


}
  




  exports.getLicenceDepartments = async (req, res) => {
    try {
      const licences = await LicnencesDepartment.findAll({
        include : [
          {model : CarModel}
        ]
      });
      res.status(200).json(licences);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching the records' });
    }
  };

  

  exports.getLicenceDepartmentById = async (req, res) => {
    const { id } = req.params;
    try {
      const licence = await LicnencesDepartment.findByPk(id);
      if (!licence) {
        return res.status(404).json({ error: 'Licence department not found' });
      }
      res.status(200).json(licence);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching the record' });
    }
  };

  


  exports.updateLicenceDepartment = async (req, res) => {
    const { id } = req.params;
    try {
      const licence = await LicnencesDepartment.findByPk(id);
      if (!licence) {
        return res.status(404).json({ error: 'Licence department not found' });
      }
      const { bord_number, counrty, year_made, body_number, engine_power, passngers_number, wighet, type_of_licence, place_linked, type, car_color, engine_number } = req.body;
      await licence.update({
        bord_number,
        counrty,
        year_made,
        body_number,
        engine_power,
        passngers_number,
        wighet,
        type_of_licence,
        place_linked,
        type,
        car_color,
        engine_number
      });
      res.status(200).json(licence);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating the record' });
    }
  };

  

  exports.deleteLicenceDepartment = async (req, res) => {
    const { id } = req.params;
    try {
      const licence = await LicnencesDepartment.findByPk(id);
      if (!licence) {
        return res.status(404).json({ error: 'Licence department not found' });
      }
      await licence.destroy();
      res.status(200).json({ message: 'Licence department deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting the record' });
    }
  };
  