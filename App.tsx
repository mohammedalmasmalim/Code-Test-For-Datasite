import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetProjectMembership } from './actions/ProjectMemberShipAction';
import { GetRegisterdUsers } from './actions/RegisteredUsersActions';
import { GetUnRegisterdUsers } from './actions/UnRegisteredUsersActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { RootStore } from './store';

function App() {
  const users =  useSelector((state: RootStore) => state.users);
  console.log(users.users)
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(GetRegisterdUsers())
    dispatch(GetUnRegisterdUsers())

    setTimeout(() => {
      dispatch(GetProjectMembership())
    }, 2000);
  }, [dispatch]);
  return (
    <div className="App">
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Registered/Unregistered</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Projects</th>
        </tr>
      </thead>
      <tbody>
        {users.users?.map((user, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.isRegisteredUser ? 'Registered': 'UnRegistered'}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.projectIds?.join(',')}</td>
        </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
}

export default App;
