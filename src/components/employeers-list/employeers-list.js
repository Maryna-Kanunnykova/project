
import EmployeerslistItem from '../employers-list-item/employeers-list-item'
import './employeers-list.css'

const Employeerslist = () => {
    return (
        <ul className="app-list list-group">
            <EmployeerslistItem/>
            <EmployeerslistItem/>
            <EmployeerslistItem/>
            <EmployeerslistItem/>
        </ul>
    )
}

export default Employeerslist