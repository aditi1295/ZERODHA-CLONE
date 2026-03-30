import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://zerodha-h7g7.onrender.com";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/allOrders`).then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders text-center mt-5">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn btn-primary">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. Price</th>
                  <th>Mode</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order, index) => {
                  return (
                    <tr key={index}>
                      <td>CNC</td>
                      <td>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>{order.price.toFixed(2)}</td>
                      <td className={order.mode === "BUY" ? "profit" : "loss"}>
                        {order.mode}
                      </td>
                      <td>COMPLETED</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;