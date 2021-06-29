import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AuthService from '../../service/AuthService';
import SpinerPage from '../../component/SpinnerPage';


class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
            loading: false,
        }
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        localStorage.clear();
    }

    login = (e) => {
        console.log(this.state.username);
        e.preventDefault();
        this.setState({ loading: true });

        //  setTimeout(()=>{
        //  this.setState({loading: false});
        //},2000)

        const credentials = { username: this.state.username, password: this.state.password };

        AuthService.login(credentials).then(res => {
            if (res.data.status === 200) {
                localStorage.setItem("userInfo", JSON.stringify(res.data.result));
                this.props.history.push('/home');
            } else {
                console.log("!!!!"+res.data.message);
               this.setState({ message: res.data.message });
            }
        });
    };

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Адміністрування довідників ACCORD
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Container maxWidth="sm">
                    <Typography variant="h4" style={styles.center}>Вхід в систему </Typography>
                    {this.state.loading ? <SpinerPage /> : <br />}
                    <form>
                        <Typography variant="h4" style={styles.notification}>{this.state.message}</Typography>
                        <TextField type="text" label="USERNAME" fullWidth margin="normal" name="username" value={this.state.username} onChange={this.onChange} />
                        <TextField type="password" label="PASSWORD" fullWidth margin="normal" name="password" value={this.state.password} onChange={this.onChange} />
                        <Button variant="contained" color="secondary" onClick={this.login}>Увійти
                        <i className="fa fa-refresh fa-spin"></i>
                        </Button>


                    </form>
                </Container>
            </React.Fragment>
        )
    }

}

const styles = {
    center: {
        display: 'flex',
        justifyContent: 'center'

    },
    notification: {
        display: 'flex',
        justifyContent: 'center',
        color: '#dc3545'
    }
}

export default LoginComponent;