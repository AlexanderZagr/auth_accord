import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import SpinerPage from '../../component/SpinnerPage';
import NavBar from "../Navbar";


class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null,
            loading : false
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        this.setState({loading: true});
        
        // setTimeout(()=>{
         //  this.setState({loading: false});
        //},2000)
        
        
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result,loading: false})
            });
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.userId !== userId)});
           })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {
        return (
            <div>
                <NavBar/>
                {this.state.loading&&<SpinerPage/>}
                <br/>
                <button className="btn btn-danger" onClick={() => this.addUser()}>Додати користувача</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Active</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.userId}>
                                        <td>{user.name}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.active}</td>
                              
                                        <td>  
                                            <button className="btn btn-success" onClick={() => this.editUser(user.userId)}>Редагувати</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteUser(user.userId)}>Видалити</button>
                                        </td>
                                       
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default ListUserComponent;
