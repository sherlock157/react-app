import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Modal, ModalBody, ModalFooter} from "reactstrap";
import {toast} from "react-toastify";

const StoreApi = () => {
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        getProducts();
    }, [])

    const addProduct = (e) => {
        e.preventDefault();

        let newProduct = {
            name: e.target.productName.value,
            price: e.target.productPrice.value,
            count: e.target.productCount.value,
            color: e.target.productColor.value
        }

        if(newProduct.name.length > 0 && newProduct.price.length > 0 && newProduct.count.length > 0){
            // e.target.productName.value = ""
            // e.target.productPrice.value = ""
            // e.target.productCount.value = ""
            // e.target.productColor.value = ""
            e.target.reset();

            if (editItem){
                axios.put("https://639da3b61ec9c6657baed075.mockapi.io/api/product/" + editItem.id, newProduct)
                    .then((res) => {
                        console.log(res);
                        getProducts()
                        setEditItem(null);
                        toast.success("Mahsulot o'zgartirildi");
                    })
            } else {
                axios.post("https://639da3b61ec9c6657baed075.mockapi.io/api/product", newProduct)
                    .then((res) => {
                        if (res.status == 201){
                            toast.success("Mahsulot qo'shildi!");
                            getProducts();
                        }
                    })
                    .catch((err) => {

                    })
            }
        } else {
            toast.error("Ma'lumotlarni to'ldiring");
        }
    }

    const getProducts = () => {
        axios.get("https://639da3b61ec9c6657baed075.mockapi.io/api/product")
            .then((res) => {
                setProducts(res.data);
            })
    }

    const deleteProduct = () => {
        axios.delete("https://639da3b61ec9c6657baed075.mockapi.io/api/product/" + deleteId)
            .then((res) => {
                console.log(res);
                if (res.status == 200){
                    getProducts();
                    setIsOpen(false);
                    toast.success("Mahsulot o'chirildi");
                }
            })
            .catch(err => {
                toast.error("Xatolik");
            })
    }

    return (
        <div className="container">
            <h3 className="my-5 text-center">Store</h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={addProduct}>
                                <input type="text" className="form-control mb-3" placeholder="Product Name" name="productName" defaultValue={editItem ? editItem.name : ""}/>
                                <input type="number" className="form-control mb-3" placeholder="Product Price" name="productPrice" defaultValue={editItem ? editItem.price : ""}/>
                                <input type="number" className="form-control mb-3" placeholder="Product Count" name="productCount" defaultValue={editItem ? editItem.count : ""}/>
                                <input type="color" className="form-control mb-3" name="productColor" defaultValue={editItem ? editItem.color : ""}/>
                                <button type="submit" className={`btn btn-${editItem ? "primary" : "success"} d-block ms-auto`}>{editItem ? "Edit" : "Add"}</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {products.map((item, index) => (
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-header">
                                        {item.name}
                                    </div>
                                    <div className="card-body">
                                        <p>Price: <b>{item.price}$</b></p>
                                        <p>Count: <b>{item.count}</b></p>
                                        <p>Color: <b style={{color: item.color}}>{item.color}</b></p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button type="button" className="btn btn-primary" onClick={() => setEditItem(item)}>Edit</button>
                                        <button type="button" className="btn btn-danger" onClick={() => {setIsOpen(true); setDeleteId(item.id)}}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal isOpen={isOpen} toggle={() => setIsOpen(false)}>
                <ModalBody>
                    <h5>Are you sure to delete this product?</h5>
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-danger" onClick={deleteProduct}>Yes</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsOpen(false)}>No</button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default StoreApi;