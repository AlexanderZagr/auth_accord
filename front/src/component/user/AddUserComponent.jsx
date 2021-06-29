import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import NavBar from "../Navbar";

class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            lastName: '',
            password: '',
            email: '',
            active: 1,
            message: null

        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        console.log("active:"+ this.state.active);
        let user = {name: this.state.name, password: this.state.password, lastName: this.state.lastName, active: this.state.active, email: this.state.email};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/list-user');
            });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
          console.log(e.target.value+" = "+e.target.name);
        }
    render() {
        return(
            <div>
                <NavBar/>
                <h2 className="text-center">Add User</h2>
                <form>
                <div className="form-group">
                    <label>User Name:</label>
                    <input type="text" placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>

               
               <div className="form-group">
                    <label>Last Name:</label>
                    <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

               
                 <div className="form-group">
                        <label> Статус :
                            <select class="form-control" name="active" value={this.state.active} onChange={this.onChange}>
                                <option selected value="1">Активний</option>
                                <option value="2">Не показувати у довіднику</option>
                            </select>
                        </label>
                    </div>

                <div className="form-group">
                    <label>email:</label>
                    <input placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddUserComponent;

