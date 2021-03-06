import React, {useState} from "react";
import CartSummary from "../layouts/CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SingnedOut from "./SingnedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function Navi() {

const {cartItems} = useSelector(state => state.cart )
console.log(cartItems)
const [isAuthenticated, setIsAuthenticated] = useState(true)
const history= useHistory()
function handleSignOut() {
  setIsAuthenticated(false)
  history.push("/")
}
function handleSignIn() {
  setIsAuthenticated(true)
}
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
          {cartItems?.length > 0 && <CartSummary/>}
            {
              //Alt componente props geçiyoruz... 
              isAuthenticated?<SignedIn  signOut={handleSignOut} />:<SingnedOut signIn={handleSignIn}/>
            }
            
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
