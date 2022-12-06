import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";

const Store = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(-1);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const saveProduct = (event) => {
        event.preventDefault();

        // console.log(event.target.productPrice.value)

        let newProduct = {
            name: event.target.productName.value,
            count: event.target.productCount.value,
            price: event.target.productPrice.value,
            color: event.target.productColor.value
        }

        if (newProduct.name.length > 0 && newProduct.count.length > 0 && newProduct.price.length > 0){
            event.target.reset();

            // setData(data.concat());
            //  console.log(data.concat(newProduct))
            if (selectedIndex >= 0){
                setData(data.map((item, index) => {
                    if (index === selectedIndex){
                        return newProduct
                    } else return item
                }));
                setSelectedIndex(-1)
            } else {
                setData(data.concat(newProduct));
            }
        } else {

        }
    }
    // CRUD

    const deleteModalOpen = (index) => {
        setIsModalOpen(true);
        setDeleteIndex(index);
    }

    const deleteProduct = () => {
        setData(data.filter((item, index) => index !== deleteIndex));
        setIsModalOpen(false)
    }

    const editProduct = (index) => {
        setSelectedIndex(index)
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header"><h4>Store</h4></div>
                        <div className="card-body">
                            <form onSubmit={saveProduct}>
                                <input type="text" className="form-control" placeholder="Product name" name="productName" defaultValue={data[selectedIndex] ? data[selectedIndex].name : ""}/>
                                <input type="number" className="form-control mt-3" placeholder="Product count" name="productCount" defaultValue={data[selectedIndex] ? data[selectedIndex].count : ""}/>
                                <input type="number" className="form-control mt-3" placeholder="Product price" name="productPrice" defaultValue={data[selectedIndex] ? data[selectedIndex].price : ""}/>
                                <input type="color" className="form-control mt-3" name="productColor" defaultValue={data[selectedIndex] ? data[selectedIndex].color :""}/>
                                <button type="submit" className="btn btn-success ms-auto mt-3 d-block">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {data.map((item, index) => (
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.name}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Count: <b>{item.count}</b></p>
                                        <p>Price: <b>{item.price}</b></p>
                                        <p>Color: <b style={{color: item.color}}>{item.color}</b></p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button type="button" className="btn btn-primary" onClick={() => editProduct(index)}>Edit</button>
                                        <button type="button" className="btn btn-danger" onClick={() => deleteModalOpen(index)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen}>
                <ModalBody>
                    <h3>Are you sure to delete this product?</h3>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={deleteProduct}>YES</Button>
                    <Button color="secondary" onClick={() => setIsModalOpen(false)}>NO</Button>
                </ModalFooter>
            </Modal>


        </div>
    );
};

export default Store;