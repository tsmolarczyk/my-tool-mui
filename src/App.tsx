import React from 'react'
import { NavBar } from './components/NavBar/NavBar'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'

import css from './App.module.css'
import './App.module.css'
import { FirstPage } from 'components/Main/FirstPage/FirstPage'
import { SecondPage } from 'components/Main/SecondPage/SecondPage'
import { ThirdPage } from 'components/Main/ThirdPage/ThirdPage'
import { ContextProvider } from 'Providers/ContextProvider'

//CONTEXT
export const NameContext = React.createContext('')

function App() {
  return (
    <ContextProvider>
      <Router>
        <div>
          <NavBar />
          <div>
            <div className={css.navbar}>
              <NavLink
                to="/firstpage"
                className={css.navlink}
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: '3px red solid',
                      }
                    : { color: '#545e6f', background: '#f0f0f0' }
                }
              >
                First Page
              </NavLink>
              <NavLink
                to="/secondpage"
                className={css.navlink}
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: 'none',
                        borderBottom: '3px red solid',
                      }
                    : { color: '#545e6f', background: '#f0f0f0' }
                }
              >
                Second Page
              </NavLink>
              <NavLink
                to="/thirdpage"
                className={css.navlink}
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: '3px red solid',
                      }
                    : { color: '#545e6f', background: '#f0f0f0' }
                }
              >
                Third Page
              </NavLink>
            </div>
          </div>

          <Routes>
            <Route path="/firstpage" element={<FirstPage />} />

            <Route path="/secondpage" element={<SecondPage />} />
            <Route path="/thirdpage" element={<ThirdPage />} />
          </Routes>
        </div>
      </Router>
    </ContextProvider>
  )
}

export default App
