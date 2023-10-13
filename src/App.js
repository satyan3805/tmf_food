import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componenets/Header';
import Body from './componenets/Body';

const rootReact  = ReactDOM.createRoot(document.getElementById("root"));

const AppRoot = () => (
    <div className="app-root">
        <Header />
        <Body />
    </div>
);
rootReact.render(<AppRoot />);