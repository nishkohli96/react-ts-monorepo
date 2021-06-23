import { FC } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from '_Pages/home';

const IndexRoutes: FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);

export default IndexRoutes;
