
const Licence = require('../model/LisenceDepartment')



exports.SingedgenerateReport = async (req, res) => {

    try {
      const { selectedData } = req.body;
        console.log(selectedData)
      // Fetch data from the database based on selectedData
      const reportData = await Licence.findAll({
        where: selectedData, // Modify this to match the filtering conditions based on selectedData
      })

     
      console.log(reportData)
      res.status(200).json({
        reportData : reportData ,
        state: 1,
      });
      // Generate the report using the fetched data
      // ...
  
      // Send the generated report as a response
      // ...
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: 'An error occurred. Please try again later.',
        state: 0,
      });
    }
  };