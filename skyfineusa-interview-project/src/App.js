import './App.css';
import React, { useState } from 'react';
import { TableWithBrowserPagination, Column, Application, Input } from 'react-rainbow-components';
import States from './States';

function App() {
    
    const americanStateData = States;
    
    const [americanStates, setAmericanStates] = React.useState(americanStateData);
    
    const containerStyles = {
    maxWidth: 700,
    };


    return (<div className="App">
            
            <Input
        id="input-component-1"
        label="Search States"
        placeholder="Search States"
        style={containerStyles}
        className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    />;
            
        <TableWithBrowserPagination
            pageSize={10}
            data={americanStates}
            keyField="name"
        >
            <Column header="State" field="name" />
            <Column header="Abbreviation" field="abbreviation" />
            <Column header="Population" field="population" />

        </TableWithBrowserPagination>
          </div>
)
}

export default App;
