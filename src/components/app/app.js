
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeerslist from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form'

import './app.css';


function App() {
    return (
    <div className="app">
        <AppInfo/>

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        <Employeerslist/>
        <EmployeersAddForm/>
    </div>
    );
}

export default App;