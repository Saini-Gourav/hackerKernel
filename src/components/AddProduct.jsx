import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddProduct = ({ show, onHide, onAddProduct }) => {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
    const newProduct = {
      name: formData.productName,
      price: parseFloat(formData.productPrice),
    };
    onAddProduct(newProduct);
    setFormData({
      productName: "",
      productPrice: "",
    });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="productPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product price"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleAddProduct}>
          Add Product
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProduct;
