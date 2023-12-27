import WinterCollection from "../models/winterCollection.model.js";

export const createWinterCollection = async (req, res) => {
  try {
    const { title, description, originalPrice, discountedPrice } = req.body;

    const newWinterCollection = new WinterCollection({
      image: req.file ? req.file.filename : undefined,
      title,
      description,
      originalPrice,
      discountedPrice,
    });

    await newWinterCollection.save();
    res.status(200).json({ winterCollection: newWinterCollection });
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
};

// fetch data
export const getWinterCollection = async (req, res) => {
  try {
    const winterCollection = await WinterCollection.find();
    res.status(200).json({ winterCollection });
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
};