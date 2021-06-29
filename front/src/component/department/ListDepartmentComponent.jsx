import React, { Component } from 'react'
import DepartmentService from "../../service/DepartmentService";
import SpinerPage from '../../component/SpinnerPage';
import NavBar from "../Navbar";


class ListDepartmentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            departments: [],
            message: null,
            loading : false
        }
        this.deleteDepartment = this.deleteDepartment.bind(this);
        this.editDepartment = this.editDepartment.bind(this);
        this.addDepartment = this.addDepartment.bind(this);
        this.reloadDepartmentList = this.reloadDepartmentList.bind(this);
    }

    componentDidMount() {
        this.reloadDepartmentList();
    }

    reloadDepartmentList() {
        this.setState({loading: true});
        DepartmentService.fetchDepartments()
            .then((res) => {
                this.setState({ departments: res.data.result ,loading: false});
       });
    }

    deleteDepartment(id) {
        DepartmentService.deleteDepartment(id)
            .then(res => {
                this.setState({ message: 'User deleted successfully.' });
                this.setState({ depatments: this.state.departments.filter(department => department.id !== id) });
            
            })

    }

    editDepartment(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/edit-department');
    }

    addDepartment() {
        window.localStorage.removeItem("id");
        this.props.history.push('/add-Department');
    }

    render() {
        return (
            <div>
                <NavBar />
                {this.state.loading&&<SpinerPage/>}
                <br />
                <button className="btn btn-danger" onClick={() => this.addDepartment()}>Додати відділення</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Відділення</th>
                            <th scope="col">Код ISPRO</th>
                            <th scope="col">Порядок</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.departments.map(department =>
                                <tr key={department.id}>
                                <td>{department.nameDepartment}</td>
                                <td>{department.codeIspro}</td>
                                <td>{department.orderCode}</td>
                               
                                <td>
                                    <button className="btn btn-success" onClick={() => this.editDepartment(department.id)}>Редагувати</button>
                                </td>
                                <td>
                                    <button className="btn btn-success" onClick={() => this.deleteDepartment(department.id)}>Видалити</button>
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

export default ListDepartmentComponent;
