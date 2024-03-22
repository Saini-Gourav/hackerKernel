import React from 'react'
import DataTable from 'react-data-table-component'
import { useState , useEffect } from 'react';
import AddProduct from './AddProduct';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const ProductList = () => {

  const navigate = useNavigate()


    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState("");
    
    
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);


    
    const handleAddProduct = (newProduct) => {
      setData([...data, newProduct]);
      setFilter([...data, newProduct]);
      setShowModal(false);
  };
  useEffect(() => {
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(filteredData);
}, [data, search]);

const logout = () => {
  localStorage.clear();
  navigate("/");
};
 
    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
        },
        {
            name: 'Price',
            selector: (row) => row.price,
        }
    ]

    const customStyles = {
      rows: {
        style: {
          fontSize: "16px",
        },
      },
      headCells: {
        style: {
          fontSize: "18px",
          backgroundColor: "#d3d3d3",
        },
      },
      cells: {
        style: {
          paddingLeft: "8px",
          paddingRight: "8px",
        },
      },
    };

  return (
    <div>
      <div style={{float:"right", padding:"10px"}}>
      <Button variant='primary' onClick={handleShowModal}>Add Product</Button>
      <Button variant='success' style={{marginLeft:"15px"}} onClick={logout}>Logout</Button>
      </div>
      <DataTable
      title="Products List"
      columns={columns}
      data={filter}
      customStyles={customStyles}
      subHeader
      subHeaderComponent={
        <input
          type="text"
          className="w-25 form-control"
          placeholder="Search...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      }
      />

      <AddProduct
      show = {showModal}
      onHide = {handleCloseModal}
      onAddProduct={handleAddProduct}
      />
    </div>
  )
}

export default ProductList;
