import React, { Component } from "react";
import WellSearch2 from "./WellSearch2";

class WellSearch extends Component {
  state = {
    wellFound: false,
    selectedWell: {},
    productionData: [],
    searchInput: "",
    location: ""
  };

  findWell() {
    const xhr = new XMLHttpRequest();
    const searchWell = {};
    const search = this.state.searchInput;
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const xmldoc = xhr.responseText;
        var XMLParser = require("react-xml-parser");
        var x = new XMLParser().parseFromString(xmldoc);
        const records = x.getElementsByTagName("welldata");
        for (let i = 0; i < records.length; i++) {
          if (records[i].children[0].value.trim() === search) {
            for (let j = 0; j < records[i].children.length; j++) {
              searchWell[records[i].children[j].name] =
                records[i].children[j].value;
            }
          }
        }
      }
    };
    xhr.open("GET", "res/welldata.xml", true);
    xhr.send();
    this.setState({
      selectedWell: searchWell,
      wellFound: true,
      location: searchWell.location
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let searchResult = <span>{this.state.selectedWell.location}</span>;
    return (
      <div className="container">
        <WellSearch2 />
        <div className="card">
          <div className="card-header">
            <h3>Alberta Township Well Search</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 offset-3">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="searchInput">
                      Well Location
                    </label>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="searchInput"
                    name="searchInput"
                    value={this.state.searchInput}
                    onChange={this.onChange}
                    placeholder="Location..."
                  />
                </div>
                <input
                  type="button"
                  className="btn btn-primary form-control"
                  value="Search"
                  onClick={this.findWell.bind(this)}
                />
              </div>
            </div>
            {this.state.wellFound ? this.state.location : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default WellSearch;
