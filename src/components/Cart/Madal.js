import { Button, Modal } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { useContext } from "react";

function CartModal(props) {
  const cartCtx = useContext(CartContext);
  const handleClose = () => props.showModalHandler(false);

  return (
    <>
      <Modal show={props.showCartItems} class="modal-dialog modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Your items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table class="table ">
            <thead>
              <tr>
                <th scope="col">Items</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>

            {props.cartElements.map((item, index) => {
              return (
                <tbody>
                  <tr>
                    <td>
                      {/* <img
                              src={item.imageUrl}
                              class="object-fit-contain border rounded col-md-3 row"
                              alt="No image"
                            />  */}
                      {item.title}
                    </td>
                    <td>{`$${item.price}`}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Button variant="danger">Remove</Button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </Modal.Body>
        <span style={{marginLeft:'25%', fontWeight: 'bold'}}>{`Total Amount = $${cartCtx._currentValue.totalAmount}`}</span>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Purchase</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;
