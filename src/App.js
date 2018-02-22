import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Root from './Root';

const App = () => (
    <MuiThemeProvider >
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </MuiThemeProvider>
);

export default App;
