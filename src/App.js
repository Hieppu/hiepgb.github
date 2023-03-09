import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes, Navigate } from 'react-router-dom';
import Signin from './page/signin/Signin';
import Signup from './page/signup/signup';
import Home from './page/home/Home';
import WithLoading from './sharecomponent/loading/WithLoading';
import ListGroups from './page/home/listgroup/ListGroups';
import UserInfo from './page/home/userinfo/UserInfo';
import ChangePassword from './page/home/changepassword/ChangePassword';
import ForgotPassword from './page/home/forgotpassword/ForgotPassword';
const SignUpWithLoading = WithLoading(Signup)
const SignInWithLoading = WithLoading(Signin)
const ForgotPasswordUsername = WithLoading(ForgotPassword)
const ListGroupsWithLoading = WithLoading(ListGroups)
const UserWithLoading = WithLoading(UserInfo)
const PasswordChangingWithLoading = WithLoading(ChangePassword)
function App() {
  // localStorage.getItem('login', true)

  // const isLoggedIn = localStorage.getItem('login')
  const username = localStorage.getItem('username')
  if (!username) {
    return (
      <div className="App">
        <Routes>
          <Route path='/sign-in' element={<SignInWithLoading />} />
          <Route path="/forgot-password" element={<ForgotPasswordUsername />} />
          <Route path='/sign-up' element={<SignUpWithLoading />} />
          <Route path="/" element={<Navigate to="/sign-in" />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <Routes>
        <Route path="/sign-in" element={<SignInWithLoading />} />
        <Route path="/sign-up" element={<SignUpWithLoading />} />
        {/* <Route path="/forgot-password" element={<ForgotPasswordUsername />} /> */}
        <Route path="/forgot-password" element={<ForgotPasswordUsername />} />
        <Route path="/" element={<Home />}>
          <Route path="/user-info" element={<UserWithLoading />} />
          <Route path="/list-groups" element={<ListGroupsWithLoading />} />
          <Route path="/password-changing" element={<PasswordChangingWithLoading />} />
          {/* <Route path="/settings" element={<SettingsWithLoading />} /> */}
        </Route>
      </Routes>
    )
  }

}

export default App;
