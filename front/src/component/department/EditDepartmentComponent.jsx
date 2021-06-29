import React, { Component } from 'react'
import DepartmentService from "../../service/DepartmentService";
import SpinerPage from '../../component/SpinnerPage';
import NavBar from "../Navbar";

class EditDepartmentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nameDepartment: '',
            codeIspro: '',
            orderCode: '',
            branchId: '',
            loading : false

        }
        this.saveDepartment = this.saveDepartment.bind(this);
        this.loadDepartment = this.loadDepartment.bind(this);
    }

    componentDidMount() {
     this.loadDepartment();
    }

    loadDepartment() {
        this.setState({loading: true});
        DepartmentService.fetchDepartmentById(window.localStorage.getItem("id"))
            .then((res) => {
                let department = res.data.result;
                this.setState({
                    id: department.id,
                    nameDepartment: department.nameDepartment,
                    codeIspro: department.codeIspro,
                    orderCode: department.orderCode,
                    branchId: department.branchId,
                    loading: false
                })
            });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        
    }
    saveDepartment = (e) => {
        e.preventDefault();
        let department = {
            id: this.state.id,
            nameDepartment: this.state.nameDepartment,
            codeIspro: this.state.codeIspro,
            orderCode: this.state.orderCode,
            branchId: this.state.branchId
        };
        
        DepartmentService.editDepartment(department)
            .then(res => {
                this.setState({ message: 'department added successfully.' });
                this.props.history.push('/list-department');
            });
    }

    render() {
        return (
            <div>
                <NavBar />
                {this.state.loading&&<SpinerPage/>}
                <h2 className="text-center">Картка відділеня</h2>
                <form>
                   <div className="form-group">
                        <label>Відділення</label>
                        <input type="text" placeholder="name" name="nameDepartment" className="form-control" value={this.state.nameDepartment} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Код isPro</label>
                        <input type="text" placeholder="codeIsPro" name="codeIspro" className="form-control" value={this.state.codeIspro} onChange={this.onChange} />
                    </div>


                    <div className="form-group">
                        <label>Cортировка</label>
                        <input placeholder="orderCode" name="orderCode" className="form-control" value={this.state.orderCode} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Підрозділ </label>
                        <select class="form-control" name="branchId" value={this.state.branchId} onChange={this.onChange}>
                                <option value="1">ГО</option>
                                <option value="2">Відділення</option>
                        </select>
                    </div>
                    <button className="btn btn-success" onClick={this.saveDepartment}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditDepartmentComponent;
