import React from 'react';
import { Link } from 'react-router-dom';

const Addcart = () => {


  return (
<div>
    <section>
        <div className="banner bg3">
            <h1>Add To Cart</h1>
        </div>
    </section>

    <section>
        <div className="inner-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 formsPage">
                        <table id="cart" className="table table-hover table-condensed">
                            <thead>
                                <tr>
                                    <th style={{ width: "50%" }}>Product</th>
                                    <th style={{ width: "10%" }}>Price</th>
                                    <th style={{ width: "8%" }}>Quantity</th>
                                    <th style={{ width: "22%" }} className="text-center">Subtotal</th>
                                    <th style={{ width: "10%" }}></th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <td data-th="Product">
                                            <div className="row">
                                                <div className="col-sm-3 hidden-xs lef">
                                                <img src="assets/images/brands/1.png" width="127" /> </div>
                                                <div className="col-sm-9">
                                                    <h4 className="nomargin">Product 1</h4>
                                                    <p className="card2">Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-th="Price">$1.99</td>
                                        <td data-th="Quantity">
                                            <input type="number" className="form-control text-center" value="1" />
                                        </td>
                                        <td data-th="Subtotal" className="text-center">1.99</td>
                                        <td className="actions" data-th="">
                                            <button className="btn btn-info btn-sm">
                                                <i className="fa fa-edit"></i>
                                            </button>
                                            <button className="btn btn-danger btn-sm">
                                                <i className="fa fa-trash"></i>
                                            </button>								
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-th="Product">
                                            <div className="row">
                                                <div className="col-sm-3 hidden-xs lef">
                                                <img src="assets/images/brands/2.png" width="127" /> </div>
                                                <div className="col-sm-9">
                                                    <h4 className="nomargin">Product 2</h4>
                                                    <p className="card2">Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-th="Price">$1.75</td>
                                        <td data-th="Quantity">
                                            <input type="number" className="form-control text-center" value="1" />
                                        </td>
                                        <td data-th="Subtotal" className="text-center">1.75</td>
                                        <td className="actions" data-th="">
                                            <button className="btn btn-info btn-sm">
                                                <i className="fa fa-edit"></i>
                                            </button>
                                            <button className="btn btn-danger btn-sm">
                                                <i className="fa fa-trash"></i>
                                            </button>								
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="visible-xs">
                                        <td className="text-center"><strong>Total 1.99</strong></td>
                                    </tr>
                                    <tr>
                                        <td><Link to="index.html" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                                        <td colspan="2" className="hidden-xs"></td>
                                        <td className="hidden-xs text-center"><strong>Total $1.99</strong></td>
                                        <td><Link to="checkout.html" className="btn btn-brograd btn-block">Checkout</Link></td>
                                    </tr>
                                </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    )
}

export default Addcart;