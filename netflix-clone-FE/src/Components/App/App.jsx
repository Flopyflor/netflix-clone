import SnackbarState from '../../context/snackbarContext/SnackbarState'
import UserState from '../../context/userContext/UserState'
import AppRouter from '../../router/AppRouter'
import { NextUIProvider } from '@nextui-org/react';
import './App.css'

function App() {

  return (
    <><NextUIProvider>
        <SnackbarState>
          <UserState>
              <AppRouter />
          </UserState>
        </SnackbarState>
      </NextUIProvider>
    </>
  )
}

export default App
