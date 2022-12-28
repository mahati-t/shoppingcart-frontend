import { Modal,Button, NavLink } from 'react-bootstrap';

const LogoutModal = (props) => {
  
  function loggingOut(){
        localStorage.clear();
        props.onHide();
        window.location.reload();      
      }
  return (
    <Modal {...props}  size="md"
    aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Logout
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Message</h4>
      <p>
       Do you really want to logout?
      </p>
    </Modal.Body>
    <Modal.Footer> 
     <NavLink to={"/products"}><Button onClick={loggingOut}>Yes</Button></NavLink>
     <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
    </Modal>
    
  
  )
}

export default LogoutModal