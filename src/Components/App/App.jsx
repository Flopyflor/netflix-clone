import SnackbarState from '../../context/snackbarContext/SnackbarState'
import UserState from '../../context/userContext/UserState'
import AppRouter from '../../router/AppRouter'
import { NextUIProvider } from '@nextui-org/react';
import DarkTheme from '../../themes/DarkTheme'
import './App.css'

function App() {

  return (
    <><NextUIProvider theme={DarkTheme}>
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
