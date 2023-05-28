import SnackbarState from '../../context/snackbarContext/SnackbarState'
import UserState from '../../context/userContext/UserState'
import AppRouter from '../../router/AppRouter'
import './App.css'

function App() {

  return (
    <>
      <SnackbarState>
        <UserState>
          <AppRouter />
        </UserState>
      </SnackbarState>
    </>
  )
}

export default App
