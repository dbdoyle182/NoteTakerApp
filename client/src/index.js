import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme()}>
<App />
</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
