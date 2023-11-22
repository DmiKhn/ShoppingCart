import { Button, Nav, Container, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
  const {openCart, cartQuantity} = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && <Button
          onClick={openCart}
          className="rounded-circle"
          variant="outline-primary"
          style={{width: "2.5rem", height: "2.5rem", position: "relative"}}
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 504.256 504.256"
          >
          <g>
            <path d="M478.755,125.762l-363.982-0.063L99.517,73.176c-2.274-7.831-8.578-14.018-16.45-16.147L29.673,42.591
              c-2.012-0.544-4.081-0.82-6.149-0.82c-10.596,0-19.93,7.15-22.698,17.388c-1.641,6.065-0.82,12.407,2.31,17.856
              c3.129,5.449,8.192,9.353,14.258,10.993l40.631,10.987l82.486,297.522c-11.749,5.797-19.367,17.809-19.367,31.184
              c0,19.18,15.604,34.783,34.783,34.783c19.179,0,34.784-15.604,34.784-34.783c0-0.453-0.009-0.904-0.026-1.357h167.917
              c-0.019,0.453-0.026,0.906-0.026,1.357c0,19.18,15.604,34.783,34.784,34.783c19.18,0,34.783-15.604,34.783-34.783
              c0-17.629-13.402-32.408-30.554-34.518c-41.737-6.74-212.073-14.977-212.073-14.977l-5.595-21.894h212.53
              c10.866,0,20.526-7.302,23.495-17.754l45.93-161.797h16.88c14.083,0,25.5-11.417,25.5-25.5S492.838,125.762,478.755,125.762z
              M208.05,302.168h-39.839c-1.089-0.02-2.688,0.231-3.417-2.332c-0.926-3.254-2.223-7.725-2.223-7.725l-31.223-109.99
              c-0.152-0.535-0.042-1.121,0.293-1.564c0.337-0.446,0.871-0.712,1.43-0.712h48.418c0.844,0,1.562,0.575,1.745,1.399l26.407,118.246
              l0.096,0.365c0.05,0.163,0.075,0.338,0.075,0.521C209.812,301.356,209.023,302.153,208.05,302.168z M309.718,182.025
              l-21.519,118.746c-0.183,0.822-0.9,1.396-1.744,1.396h-30.05c-0.845,0-1.563-0.576-1.748-1.398L233.14,182.021
              c-0.119-0.53,0.009-1.079,0.352-1.506c0.341-0.425,0.85-0.669,1.395-0.669h73.084c0.546,0,1.055,0.244,1.397,0.672
              C309.71,180.942,309.837,181.493,309.718,182.025z M411.511,182.125l-33.709,118.742c-0.218,0.767-0.926,1.304-1.722,1.304h-41.227
              c-0.547,0-1.056-0.244-1.396-0.67c-0.342-0.427-0.469-0.979-0.351-1.511l26.517-118.745c0.181-0.81,0.916-1.398,1.748-1.398h48.417
              c0.558,0,1.091,0.265,1.427,0.71C411.553,181.001,411.662,181.587,411.511,182.125z"/>
          </g>
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1,5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)"
            }}
          >{cartQuantity}</div>
        </Button>}
      </Container>
    </NavbarBs>
  )
}