import {useEffect} from "react";
import { CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Theme from './components/Theme';
import HomeView from './views/Home';
import LoginView from './views/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import * as authActions from './state/actions/auth';
import { connect } from "react-redux";

function App({ token, refreshToken }) {

    useEffect(() => {
        const storedRefreshToken = window.localStorage.getItem('refreshToken');
        if (!storedRefreshToken) return;
        console.log('executing refresh token');
        refreshToken(storedRefreshToken);
    });

    return <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <Router>
            <Switch>
                <Route path={'/login'}>
                    <LoginView />
                </Route>
                <Route path={'/'} render={(props) =>
                    token ? (
                        <HomeView />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
                } />
            </Switch>
        </Router>
    </MuiThemeProvider>;
}

const mapStateToProps = ({ authReducer }) => ({
    token: authReducer.token
});

const mapDispatchToProps = { ...authActions };

export default connect(mapStateToProps, mapDispatchToProps)(App);
