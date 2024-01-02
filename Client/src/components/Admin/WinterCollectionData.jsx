import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const WinterCollectionData = () => {
   const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a FormData object to handle file uploads
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('originalPrice', originalPrice);
      formData.append('discountedPrice', discountedPrice);
      formData.append('image', image);

      // Make an HTTP request to your backend API to save the data
      const response = await axios.post('https://healthy-gold-kilt.cyclic.app/winter-collection', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle the response as needed
      console.log(response.data);

    setTitle('');
    setDescription('');
    setOriginalPrice('');
    setDiscountedPrice('');
    setImage(null);

      // You can redirect the user or perform other actions based on the response
    } catch (error) {
      // Handle error
      console.error(error.response.data);
    }
  };

  return (
    <div className="container mt-5 " style={{ maxHeight: '500px', overflowY: 'auto' }}>
      <h2>Winter Collection Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="originalPrice" className="form-label">
            Original Price
          </label>
          <input
            type="number"
            className="form-control"
            id="originalPrice"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="discountedPrice" className="form-label">
            Discounted Price
          </label>
          <input
            type="number"
            className="form-control"
            id="discountedPrice"
            value={discountedPrice}
            onChange={(e) => setDiscountedPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        
      </form>
    </div>
  );
};

export default WinterCollectionData