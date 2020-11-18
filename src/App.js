import React , {useEffect, useState}from 'react'
import { BrowserRouter } from 'react-router-dom'
import {ThemeProvider} from "@material-ui/core/styles";
import theme from './theme'


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/mprabu0104')
    .then( response => response.json())
    .then( user => setUser(user))
  }, [])

  console.log(user, "user")

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider theme={theme}>
      </ThemeProvider></BrowserRouter>
  );
}

export default App;
