import axios from 'axios';
import { Component } from 'react';
import { Link } from "react-router-dom";

class CustomerDB extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        axios.get('http://localhost:3002/api/stuff')
            .then((res) => {
                this.setState({ users: res.data })
            })
    }


    handleRowdelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:3002/api/stuff/${id}`)
            .then(res => {

                console.log(res.data);
                const users = this.state.users.filter(x => x._id !== id)
                this.setState({ users })

            })
            .catch(error => console.error(error))
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center text-primary "> CUSTOMER DATABASE</h2>
                <table className="table table-bordered table-info">
                    <thead >
                        <tr>
                            <th className="col">#</th>
                            <th className="col">FirstName</th>
                            <th className="col">LastName</th>
                            <th className="col">Contact No</th>
                            <th className="col">Email ID</th>
                            <th className="col"> Purchased Date</th>
                            <th className="col ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((x, i) => {
                                return (
                                    <tr key={x._id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{x.firstName}</td>
                                        <td>{x.secondName}</td>
                                        <td>{x.mobile}</td>
                                        <td>{x.email}</td>
                                        <td>{x.purchaseDate}</td>
                                        <td>
                                            <Link className="btn m-1 btn-info" to={`CustomerDB/${x._id}`}>Edit </Link>
                                            {/* <button onClick={this.handleRowchange} className="btn m-1 btn-info"> Edit </button> */}
                                            <button onClick={() => {
                                                this.handleRowdelete(x._id)
                                            }} className="btn m-1 btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default CustomerDB;