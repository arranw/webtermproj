import React, { useState, useEffect } from "react";
import classnames from "classnames";

export default function WellSearch2() {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");

  const [locations, setLocations] = useState([]);
  const [productions, setProductions] = useState([]);
  const [matchingProductions, setMatchingProductions] = useState([]);

  useEffect(() => {
    loadLocations();
    loadProductions();
  }, []);

  useEffect(() => {
    if (locations.includes(searchValue)) {
      setError("");
      const matchingProds = [];
      for (let i = 0; i < productions.length; i++) {
        if (productions[i].location.trim() === searchValue) {
          matchingProds.push(productions[i]);
        }
      }
      setMatchingProductions(matchingProds);
    } else if (searchValue !== "") {
      setError("Well Not Found.");
      setMatchingProductions([]);
    }
  }, [searchValue]);

  const loadProductions = () => {
    const xhr = new XMLHttpRequest();
    const prods = [];
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const xmldoc = xhr.responseText;
        var XMLParser = require("react-xml-parser");
        var x = new XMLParser().parseFromString(xmldoc);
        const records = x.getElementsByTagName("productiondata");
        for (let i = 0; i < 700; i++) {
          const obj = {};
          for (let j = 0; j < records[i].children.length; j++) {
            obj[records[i].children[j].name] = records[i].children[j].value;
          }
          prods.push(obj);
        }
      }
    };
    setProductions(prods);
    xhr.open("GET", "res/productiondata.xml", true);
    xhr.send();
  };

  const loadLocations = () => {
    const xhr = new XMLHttpRequest();
    const locs = [];
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const xmldoc = xhr.responseText;
        var XMLParser = require("react-xml-parser");
        var x = new XMLParser().parseFromString(xmldoc);
        const records = x.getElementsByTagName("welldata");
        for (let i = 0; i < records.length; i++) {
          locs.push(records[i].children[0].value.trim());
        }
      }
    };
    xhr.open("GET", "res/welldata.xml", true);
    xhr.send();
    setLocations(locs);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3>Alberta Township Well Search</h3>
        </div>
        <div className="card-body">
          <div className="input-group">
            <div className="input-group-prepend">
              <label
                className={classnames("input-group-text", {
                  "text-danger border-danger": error
                })}
                htmlFor="search"
              >
                Well Location
              </label>
            </div>
            <input
              className={classnames("form-control", { "is-invalid": error })}
              type="text"
              id="search"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>
          <h3 className="text-danger text-center">
            {error !== "" ? error : ""}
          </h3>
          {matchingProductions ? (
            <table style={{ tableLayout: "fixed" }} className="table">
              <tbody>
                <tr>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Oil Production</th>
                  <th>Water Production</th>
                  <th>Gas Production</th>
                </tr>
                {matchingProductions.map(production => (
                  <tr>
                    <td>{production.location}</td>
                    <td>{production.date}</td>
                    <td>{production.oilproduction}</td>
                    <td>{production.waterproduction}</td>
                    <td>{production.gasproduction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </div>
  );
}
