/* eslint-disable no-param-reassign, operator-assignment */
// To inform next js, this is a client component
"use client";

import PersonList from './components/PersonList'; 
import PersonAdd from './components/PersonAdd';

function App() { return (
<div className="App">
<PersonAdd/>
<PersonList/>
</div>
)
}



export default App;
