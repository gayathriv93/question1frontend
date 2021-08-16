// import logo from './formlogo.png';
import { Component } from 'react';
import axios from 'axios';

class Formcomp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: this.props.u?.firstName,
            secondName: this.props.u?.secondName,
            mobile: this.props.u?.mobile,
            email: this.props.u?.email,
            age: this.props.u?.age,
            address: this.props.u?.address,
            pincode: this.props.u?.pincode,
            purchaseDate: this.props.u?.purchaseDate,
            bill: this.props.u?.bill
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }



    async handleSubmit(event) {
        event.preventDefault();
        try {
            const data = this.state;
            console.log(data)
            console.log(this.props.u)

            if (this.props.u !== undefined) {
                await axios.put(`http://localhost:3002/api/stuff/${this.props.u}`, data);
                return;
            }

            await axios.post('http://localhost:3002/api/stuff', data);
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div className="container mt-4 ">
                <div className="row w-50 mx-auto shadow-lg p-3 bg-body rounded">
                    <h3 className="my-3 text-center"> Customer Details </h3>
                    <div className="mx-auto ">
                        <form className="mx-5 p-5 bg-light rounded" onSubmit={this.handleSubmit}>
                            <div className="row">

                                <div className="my-1">
                                    <input type="text" className="form-control m-2" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First name" required />
                                </div>

                            </div>
                            <div className="row">
                                <div className="my-1">
                                    <input type="text" className="form-control m-2" name="secondName" value={this.state.secondName} onChange={this.handleChange} placeholder="Last name" />
                                </div>
                            </div>
                            <div className="row  ">
                                <div className="my-1">
                                    <input type="tel" className="form-control m-2" name="mobile" value={this.state.mobile} onChange={this.handleChange} placeholder=" Mobile Number" required />
                                </div>

                            </div>
                            <div className="row ">
                                <div className="my-1">
                                    <input type="email" className="form-control m-2" name="email" value={this.state.email} onChange={this.handleChange} placeholder=" Email ID" />
                                </div>
                            </div>
                           
                            <div className="row">
                                <div className="my-1">
                                    <input type="datetime-local" className="form-control m-2" name="purchaseDate" value={this.state.purchaseDate} onChange={this.handleChange} placeholder=" Purchase Date" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="my-1">
                                    <input type="number" className="form-control m-2" name="bill" value={this.state.bill} onChange={this.handleChange} placeholder=" Bill Amount" required />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-2 m-4 ">
                                    <button className="btn btn-dark p-2 fw-bold" >Submit</button>
                                </div>
                                <div className="col-6 col-md-2 m-4">
                                    <button type="reset" className="btn btn-danger p-2 fw-bold">Reset</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div >




        );


    }
}


export default Formcomp;



