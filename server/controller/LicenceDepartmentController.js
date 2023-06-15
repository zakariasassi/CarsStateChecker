const LicnencesDepartment = require('../model/LisenceDepartment')





exports.createLicenceDepartment = async (req, res) => {
    try {
      const { bord_number, country, year_made, body_number, engine_power, passngers_number, wighet, type_of_licence, place_linked, type, car_color, engine_number } = req.body;
      const licence = await LicnencesDepartment.create({
        bord_number,
        country,
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
      res.status(201).json(licence);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the record' });
    }
  };
  




  exports.getLicenceDepartments = async (req, res) => {
    try {
      const licences = await LicnencesDepartment.findAll();
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
  