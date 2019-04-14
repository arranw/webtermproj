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

  renderOptions = [];

  parseOptions(options) {
    let total = 0;
    this.renderOptions = [];
    if (options.roofRack) {
      this.renderOptions.push("Roof Rack");
      total += 5;
    }
    if (options.bikeRack) {
      this.renderOptions.push("Bike Rack");
      total += 5;
    }
    if (options.gps) {
      this.renderOptions.push("GPS");
      total += 10;
    }
    if (options.childSeat) this.renderOptions.push("Child Seat");
    return total;
  }

  render() {
    const {
      formItems,
      selectedCar,
      selectedOptions,
      days
    } = this.props.summary;

    if (formItems) {
      let optionsTotal = this.parseOptions(selectedOptions);
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
              {formItems.firstName}
              <br />
              {formItems.lastName}
              <br />
              {formItems.address}
              <br />
              {formItems.stateProv}
              <br />
              {formItems.email}
              <br />
              {formItems.phone}
              <br />
              {selectedCar ? selectedCar.name : null} for {days} days with
              <br />
              <ul className="list-group">
                {this.renderOptions.map((option, i) => (
                  <li key={new Date().getTime()} className="list-group-item">
                    {this.renderOptions[i]}
                  </li>
                ))}
              </ul>
              <h3 className="text-">
                Total: ${((selectedCar.cost + optionsTotal) * days).toFixed(2)}
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
    } else {
      return null;
    }
  }
}

export default ModalEdit;
