
const jomrok = require('../model/Jomrok'); // Adjust the path to your model file
const CarModel = require('../model/Car')
// Create a new "jomrok" entry
exports.createJomrok = async (req, res) => {


  const {
    eleasePermitNumber,
    releasedGoods,
    shipName, 
   arrivalDate, 
   importerName, 
   customsDeclarationNumber, 
   customsReceiptNumber, 
   goodsStorageLocation, 
   warehouseNumber, 
   parcelsCount, 
   parcelsDetails, 
   totalAmount, 
   shippingPolicy, 
   agentName, 
   date, 
   goodsDescription, 
  
  
  
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
          await jomrok.create({
            CarCarId : resulte.carId ,
            eleasePermitNumber,
            releasedGoods,
            shipName, 
           arrivalDate, 
           importerName, 
           customsDeclarationNumber, 
           customsReceiptNumber, 
           goodsStorageLocation, 
           warehouseNumber, 
           parcelsCount, 
           parcelsDetails, 
           totalAmount, 
           shippingPolicy, 
           agentName, 
           date, 
           goodsDescription, 
          
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

};

// Get all "jomrok" entries
exports.getAllJomrok = async (req, res) => {
  try {
    const allJomrok = await jomrok.findAll();
    res.status(200).json(allJomrok);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the "jomrok" entries' });
  }
};

// Get a single "jomrok" entry by ID
exports.getJomrokById = async (req, res) => {
  const { id } = req.params;

  try {
    const foundJomrok = await jomrok.findByPk(id);
    if (!foundJomrok) {
      return res.status(404).json({ error: 'No "jomrok" entry found with the provided ID' });
    }
    res.status(200).json(foundJomrok);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the "jomrok" entry' });
  }
};

// Update a "jomrok" entry by ID
exports.updateJomrok = async (req, res) => {
  const { id } = req.params;

  try {
    const [updatedRowsCount] = await jomrok.update(req.body, {
      where: { id }
    });

    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'No "jomrok" entry found with the provided ID' });
    }

    res.status(200).json({ message: 'Updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the "jomrok" entry' });
  }
};

// Delete a "jomrok" entry by ID
exports.deleteJomrok = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRowsCount = await jomrok.destroy({
      where: { id }
    });

    if (deletedRowsCount === 0) {
      return res.status(404).json({ error: 'No "jomrok" entry found with the provided ID' });
    }

    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the "jomrok" entry' });
  }
};
