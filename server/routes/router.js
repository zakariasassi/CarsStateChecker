const express = require('express');
const router = express.Router();


const Admins = require('../controller/AdminsController')
const licnencesdepartmentController = require('../controller/LicenceDepartmentController')
const jomrokController = require('../controller/JomrekDepartmentController')
const insuranceDocumentController = require('../controller/IncuranceDepartmentController')
const Reports = require('../controller/ReportsController')
const Employes = require('../controller/EmployesController')
const Car = require('../controller/CarController')




router.post('/addadmin' ,  Admins.createnewadmin)
router.post('/loginadmin' ,  Admins.loginadmin)

router.get('/getAllAdmins' , Admins.getalladmins)
router.delete('/deleteadmin/:id' , Admins.deleteadmin )
router.put('/restrictadmin/:id' , Admins.restrictadmin)
router.put('/activeadmin/:id' , Admins.activeadmin)



// Create a new record
router.post('/createLicenceDepartment', licnencesdepartmentController.createLicenceDepartment);

// Retrieve all records
router.get('/getLicenceDepartments', licnencesdepartmentController.getLicenceDepartments);

// Retrieve a specific record by ID
router.get('/getLicenceDepartmentById/:id', licnencesdepartmentController.getLicenceDepartmentById);

// Update a record
router.put('/updateLicenceDepartment/:id', licnencesdepartmentController.updateLicenceDepartment);

// Delete a record
router.delete('/deleteLicenceDepartment/:id', licnencesdepartmentController.deleteLicenceDepartment);






// Create a new record
router.post('/createnewemploy', Employes.createnewemploy);

// Retrieve all records
router.get('/getallemployes', Employes.getallemployes);

// Retrieve a specific record by ID
router.get('/getallemployesById/:id', Employes.getallemployesById);

// Update a record
router.put('/updateEmploy/:id', Employes.updateEmploy);

// Delete a record
router.delete('/deleteEmploy/:id', Employes.deleteEmploy);
router.put('/restrictEmploy/:id' , Employes.restrictEmploy)
router.put('/activeEmploy/:id' , Employes.activeEmploy)










// Create a new "jomrok" entry
router.post('/createJomrok', jomrokController.createJomrok);

// Get all "jomrok" entries
router.get('/getAllJomrok', jomrokController.getAllJomrok);

// Get a single "jomrok" entry by ID
router.get('/getJomrokById/:id', jomrokController.getJomrokById);

// Update a "jomrok" entry by ID
router.put('/updateJomrok/:id', jomrokController.updateJomrok);

// Delete a "jomrok" entry by ID
router.delete('/deleteJomrok/:id', jomrokController.deleteJomrok);








// Create a new insurance document
router.post('/createInsuranceDocument', insuranceDocumentController.createInsuranceDocument);

// Get all insurance documents
router.get('/getAllInsuranceDocuments', insuranceDocumentController.getAllInsuranceDocuments);

// Get a single insurance document by ID
router.get('/getInsuranceDocumentById/:id', insuranceDocumentController.getInsuranceDocumentById);

// Update an insurance document by ID
router.put('/updateInsuranceDocument/:id', insuranceDocumentController.updateInsuranceDocument);

// Delete an insurance document by ID
router.delete('/deleteInsuranceDocument/:id', insuranceDocumentController.deleteInsuranceDocument);






















router.post('/createnewemploy' , Employes.createnewemploy)
router.post('/loginemployee' ,Employes.loginemployee )



router.post('/SingedgenerateReport' , Reports.SingedgenerateReport)




module.exports = router