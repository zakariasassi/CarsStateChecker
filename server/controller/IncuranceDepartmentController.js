const InsuranceDocument = require('../model/Incurances');

// Create a new insurance document
exports.createInsuranceDocument = async (req, res) => {
  try {
    const insuranceDocument = await InsuranceDocument.create(req.body);
    res.status(201).json({ success: true, data: insuranceDocument });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to create insurance document' });
  }
};

// Get all insurance documents
exports.getAllInsuranceDocuments = async (req, res) => {
  try {
    const insuranceDocuments = await InsuranceDocument.findAll();
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
