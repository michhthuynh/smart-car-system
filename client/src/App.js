import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import { useEffect, useState } from 'react';
import api from './utils/api';

function App() {
  const [logged, setLogged] = useState(false)
  useEffect(() => {
    const checkLogged = async () => {
      try {
        const response = await api.get('/auth/check', {
          headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`
          }
        })
        if (response.status === 200) {
          setLogged(true)
        }
      } catch (error) {
        return
      }
    }
    checkLogged()
  }, [])
  return (
    <Router>
      <Switch>
        <Route path='/login' exact render={() => <Login logged={logged} />} />
        <Route path='' render={() => <Dashboard logged={logged} />} />
      </Switch>
    </Router>
  );
}

export default App;
