import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const BookingForm = ({show, handleClose}) => {
    return (
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <div className='booking-body'>
        <div className="booking-form-w3layouts">
            <form>
                <h2 className="sub-heading-agileits">Booking Details</h2>
                <div className="main-flex-w3ls-sectns">
                </div>
               
                <div className="triple-wthree">
                </div>

                <h3 className="sub-heading-agileits">Personal Details</h3>
                <div className="main-flex-w3ls-sectns">
                    
                </div>
                <div className="main-flex-w3ls-sectns">
                    <div className="field-agileinfo-spc form-w3-agile-text1">
                        <input type="text" placeholder="Full Name" required />
                    </div>
                    <div className="field-agileinfo-spc form-w3-agile-text2">
                        <input type="text" placeholder="Phone Number" required />
                    </div>
                </div>
                <div className="field-agileinfo-spc form-w3-agile-text1">
                        <select className="form-control">
                            <option>Preferred Airline</option>
                            <option value="American Airline">American Airline</option>
                            <option value="Delta Airlines">Delta Airlines</option>
                        </select>
                    </div>
                <div className="field-agileinfo-spc form-w3-agile-text">
                    <input type="email" placeholder="Email" required />
                </div>
                <input type="submit" value="Submit" />
                <input type="reset" value="Clear Form" />
            </form>
        </div>
        </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default BookingForm;
