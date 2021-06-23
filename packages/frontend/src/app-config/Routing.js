import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from '_Pages/home';

const IndexRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);

export default IndexRoutes;
