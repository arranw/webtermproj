import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.openModal
    };

    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      modal: nextProps.openModal
    });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    this.props.setOpenModal(false);
  }

  actionHandler = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      selectedCar,
      formFirstname,
      formLastname,
      formAddress,
      formProv,
      formEmail,
      formPhone,
      days,
      selectedOptions
    } = this.props.summary;
    let optionsTotal = 0;
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="lg"
        >
          <ModalHeader toggle={this.toggle}>Rental Summary</ModalHeader>
          <ModalBody>
            {formFirstname}
            <br />
            {formLastname}
            <br />
            {formAddress}
            <br />
            {formProv}
            <br />
            {formEmail}
            <br />
            {formPhone}
            <br />
            {selectedCar ? selectedCar.name : null} for {days} days with
            <br />
            <ul className="listgroup">
              {selectedOptions ? (
                selectedOptions.gps ? (
                  <li className="list-item">Roof Rack</li>
                ) : (
                  ""
                )
              ) : null}
              {selectedOptions ? (
                selectedOptions.gps ? (
                  <li className="list-item">Bicycle Rack</li>
                ) : (
                  ""
                )
              ) : null}
              {selectedOptions ? (
                selectedOptions.gps ? (
                  <li className="list-item">GPS</li>
                ) : (
                  ""
                )
              ) : null}
              {selectedOptions ? (
                selectedOptions.gps ? (
                  <li className="list-item">Child Seat</li>
                ) : (
                  ""
                )
              ) : null}
            </ul>
            <h3 className="text-">
              Total: {selectedCar ? selectedCar.value : null}
            </h3>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalEdit;
