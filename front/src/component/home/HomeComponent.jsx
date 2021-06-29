import React, { Component } from 'react'
//import ApiService from "../../service/ApiService";
import AuthService from '../../service/AuthService';
import SpinerPage from '../../component/SpinnerPage';
import NavBar from "../Navbar";


class HomeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: null,
            loading : false
        }
        this.reloadHomePage = this.reloadHomePage.bind(this);
    }

    componentDidMount() {
        this.reloadHomePage();
    }

    reloadHomePage() {
        this.setState({loading: false});
        
      //   setTimeout(()=>{
        //   this.setState({loading: false});
        //},2000)
        
     //   ApiService.fetchUsers()
      //      .then((res) => {
       //         this.setState({users: res.data.result,loading: false})
        //    });
    }

   
    render() {
        return (
            <div>
                <NavBar/>
                 {this.state.loading&&<SpinerPage/>}
                 <br/>
                 <div>
                 <span>Головна сторінка</span>
                 <br/>
                 <span>Користувач : {AuthService.getUserInfo().username}</span>
                 </div>
            </div>
        );
    }

}

export default HomeComponent;
