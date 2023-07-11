const InsuranceDocument = require('../model/Incurances');
const CarModel = require('../model/Car')
const { Op } = require('sequelize');
// Create a new insurance document
exports.createInsuranceDocument = async (req, res) => {
  const {
    companyName , 
    insuranceType, 
    documentNumber, 
    issuingBranch, 
    insuranceStartDate, 
    insuranceEndDate, 
    customerNumber, 
    insuredName, 
    insuredAddress, 
    Value_of_installment, 
    Tax ,
    Entry_fee, 
    Stamp, 
    Issuance_exp, 
    Total, 
  
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
          await InsuranceDocument.create({
            companyName ,
            CarCarId : resulte.carId ,
            insuranceType, 
            documentNumber, 
            issuingBranch, 
            insuranceStartDate, 
            insuranceEndDate, 
            customerNumber, 
            insuredName, 
            insuredAddress, 
            Value_of_installment, 
            Tax ,
            Entry_fee, 
            Stamp, 
            Issuance_exp, 
            Total, 
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



// Get all insurance documents
exports.getAllInsuranceDocuments = async (req, res) => {
  try {
    const insuranceDocuments = await InsuranceDocument.findAll({
      include : [
        {model : CarModel}
      ]
    });
    res.status(200).json({ success: true, data: insuranceDocuments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to fetch insurance documents' });
  }
};

// Get a single insurance document by ID
exports.getInsuranceDocumentById = async (req, res) => {
  const { id } = req.params;
  try {
    const insuranceDocument = await InsuranceDocument.findByPk(id);
    if (!insuranceDocument) {
      return res.status(404).json({ success: false, error: 'Insurance document not found' });
    }
    res.status(200).json({ success: true, data: insuranceDocument });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to fetch insurance document' });
  }
};

// Update an insurance document by ID
exports.updateInsuranceDocument = async (req, res) => {
  const { id } = req.params;
  try {
    const insuranceDocument = await InsuranceDocument.findByPk(id);
    if (!insuranceDocument) {
      return res.status(404).json({ success: false, error: 'Insurance document not found' });
    }
    await insuranceDocument.update(req.body);
    res.status(200).json({ success: true, data: insuranceDocument });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to update insurance document' });
  }
};

// Delete an insurance document by ID
exports.deleteInsuranceDocument = async (req, res) => {
  const { id } = req.params;
  try {
    const insuranceDocument = await InsuranceDocument.findByPk(id);
    if (!insuranceDocument) {
      return res.status(404).json({ success: false, error: 'Insurance document not found' });
    }
    await insuranceDocument.destroy();
    res.status(200).json({ success: true, message: 'Insurance document deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to delete insurance document' });
  }
};








exports.fetchincurance = async (req , res ) => {
      const {boardnumber , bodynumber  } = req.params
      const searchCriteria = {};
      searchCriteria.bord_number = boardnumber ;
      searchCriteria.body_number = bodynumber ;


      await InsuranceDocument.findAll({
        where: {
          title: {
            [Op.like]: `%${req.params}%`, // This will match titles containing the 'query' string
          },
        },
      })
}
