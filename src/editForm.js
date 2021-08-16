import axios from 'axios';
import { Component } from 'react';
import { params, withRouter } from "react-router-dom";
import Formcomp from './formComp';

class Editform extends Component {

    state = { user: null };

    componentDidMount() {
        console.log(this.props?.match?.params?.id)
        axios.get(`http://localhost:3002/api/stuff/${this.props.match.params.id}`)
            .then((res) => {
                this.setState({ user: res.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.user === null) {
            return <h1 style={{ textAlign: 'center'}}>Loading</h1>
        }

        return (
            <div>
                {/* {this.props.match.params.id} */}
                <Formcomp u={this.state.user}></Formcomp>
            </div>
        );
    }
   
}
export default withRouter(Editform);