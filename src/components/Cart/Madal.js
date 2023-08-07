import { Button, Modal } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

function CartModal(props) {
  const cartCtx = useContext(CartContext);
  const handleClose = () => props.showModalHandler(false);

  const buyHandler = () => {
    if (cartCtx._currentValue.items.length === 0) {
      alert("You have Nothing in Cart , Add some products to purchase !");
    } else {
      cartCtx._currentValue.buyItems(true);
    }
  };

  return (
    <>
      <Modal show={props.showCartItems} class="modal-dialog modal-lg">
        <header className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Your cart items
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </header>
        <Modal.Body>
          <table class="table ">
            <thead>
              <tr>
                <th>Items</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>action</th>
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
                      <Button
                        variant="danger"
                        onClick={() => cartCtx._currentValue.removeItem(item)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </Modal.Body>
        <span
          style={{ marginLeft: "25%", fontWeight: "bold" }}
        >{`Total Amount = $${cartCtx._currentValue.totalAmount}`}</span>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => buyHandler()}>
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;
