import React, { useState, useEffect } from "react";
import "./rental.css";
import classnames from "classnames";
import camelcase from "camelcase";

import EditItem from "../modals/EditItem";
import AddonButton from "../layout/AddonButton";
import InputGroup from "../layout/InputGroup";
import Figure from "../layout/Figure";

export default function Rental() {
  const [clientSearch, setClientSearch] = useState("");
  const [clients, setClients] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [selectedClient, setSelectedClient] = useState();
  const [days, setDays] = useState(1);

  const [selectedCar, setSelectedCar] = useState({ name: "", value: 0 });
  const [selectedOptions, setSelectedOptions] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const [summary, setSummary] = useState({});
  const [formItems, setFormItems] = useState({
    lastName: "",
    firstName: "",
    address: "",
    stateProv: "",
    email: "",
    phone: ""
  });

  const cars = [
    {
      imgSrc: "/webtermproj/res/pics/compact.png",
      imgCaption: "Compact",
      cost: 20
    },
    {
      imgSrc: "/webtermproj/res/pics/midsize.png",
      imgCaption: "Mid-Size",
      cost: 25
    },
    {
      imgSrc: "/webtermproj/res/pics/luxury.png",
      imgCaption: "Luxury",
      cost: 35
    },
    {
      imgSrc: "/webtermproj/res/pics/pickup.png",
      imgCaption: "Pickup",
      cost: 40
    }
  ];

  const options = [
    {
      name: "Roof Rack",
      cost: 5
    },
    {
      name: "Bike Rack",
      cost: 5
    },
    {
      name: "GPS",
      cost: 10
    },
    {
      name: "Child Seat",
      cost: 0
    }
  ];

  const inputItems = [
    "Last Name",
    "First Name",
    "Address",
    "State-Prov",
    "Email",
    "Phone"
  ];

  useEffect(() => {
    if (selectedClient) {
      const items = {
        lastName: selectedClient.last_name,
        firstName: selectedClient.first_name,
        address: selectedClient.address,
        stateProv: selectedClient.state_prov,
        email: selectedClient.email,
        phone: selectedClient.phone
      };
      setFormItems(items);
    }
  }, [selectedClient]);

  useEffect(() => {
    const matches = [];
    if (dataLoaded) {
      for (let i = 0; i < clients.length; i++) {
        if (
          clients[i].last_name
            .toUpperCase()
            .startsWith(clientSearch.toUpperCase())
        ) {
          matches.push(clients[i]);
        }
      }
    }
    setSearchResults(matches);
  }, [clientSearch]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        setClients(JSON.parse(xhr.responseText));
      }
    };
    xhr.open("GET", "res/rentalclients.json", true);
    xhr.send();
    setDataLoaded(true);
  }, []);

  const toggleOption = option => {
    let optionsCopy = JSON.parse(JSON.stringify(selectedOptions));
    optionsCopy[option] = !optionsCopy[option];
    setSelectedOptions(optionsCopy);
    console.log(selectedOptions);
  };

  const packSummary = () => {
    const summaryObject = {
      formItems,
      selectedCar,
      selectedOptions,
      days
    };
    setSummary(summaryObject);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-4 offset-lg-1 mt-3">
          <h3 className="text-center">Client Search</h3>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Last Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="clientSearch"
              value={clientSearch}
              onChange={e => setClientSearch(e.target.value)}
            />
          </div>
          <div
            className="border"
            style={{
              height: "40vh",
              overflowY: "scroll"
            }}
          >
            <table
              className="table text-center"
              style={{
                maxHeight: "100%",
                tableLayout: "fixed"
              }}
            >
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody style={{}}>
                {searchResults.map(client => (
                  <tr
                    className={classnames("list-hover", {
                      "bg-info": client === selectedClient
                    })}
                    onClick={() => setSelectedClient(client)}
                    key={searchResults.indexOf(client)}
                  >
                    <td>{client.first_name}</td>
                    <td>{client.last_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-7">
          <form>
            <h2 className="mb-3 text-center">Rental Information</h2>
            {inputItems.map(item => (
              <InputGroup
                key={inputItems.indexOf(item)}
                name={item}
                value={formItems[camelcase(item)]}
                action={e => setFormItems(e.target.name, e.target.value)}
                disabled={!selectedClient}
              />
            ))}
          </form>
        </div>
      </div>
      <div className="row">
        {cars.map(car => (
          <div key={cars.indexOf(car)} className="col-md-3">
            <Figure
              imgSrc={car.imgSrc}
              imgCaption={car.imgCaption}
              cost={car.cost}
              selectedCar={selectedCar}
              setSelectedCar={setSelectedCar}
            />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-10 offset-lg-1 mt-3">
          <div className="row">
            <div className="btn-group" style={{ width: "100%" }} role="group">
              {options.map(option => (
                <AddonButton
                  key={option.name}
                  name={camelcase(option.name)}
                  label={option.name}
                  cost={option.cost}
                  toggleOption={toggleOption}
                  selectedOptions={selectedOptions}
                />
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-4">
              <div className="input-group mt-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">Days:</span>
                </div>
                <input
                  type="number"
                  name="days"
                  value={days}
                  onChange={e => setDays(e.target.value)}
                  className="form-control"
                  min="1"
                  max="30"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <button
              className="btn btn-primary form-control mt-2"
              disabled={!selectedClient || !selectedCar.name}
              onClick={() => {
                packSummary();
                setOpenModal(true);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <EditItem
        openModal={openModal}
        setOpenModal={setOpenModal}
        summary={summary}
      />
    </div>
  );
}
