import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditLogin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/adminsinup/")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);  

    const deletelogin = (tid) => {
        axios.delete(`http://localhost:4000/adminsinup/${tid}`)
            .then((res) => {
                alert("Login deleted successfully.");
                setData(data.filter(login => login._id !== tid));  
            })
            .catch((err) => {
                alert("Failed to delete the . Please try again.");
            });
    };

    return (
        <div>
            <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>Available Logins</h2>
                            <div className="table-responsive">
                                <table className="table table-hover table-striped shadow-lg">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">phone</th>
                                            <th scope="col">email</th>
                                        
                                            <th scope="col">address</th>
                                            <th scope="col" className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((login) => (
                                                <tr key={login._id}>
                                                    <td>{login.name}</td>
                                                    <td>{login.phone}</td>
                                                    <td>{login.email}</td>
                                                    <td>{login.address}</td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-primary"
                                                            style={{ borderRadius: '20px' }}
                                                            onClick={() => deletelogin(login._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center">No Login available</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default EditLogin