import React, { useState, useEffect } from "react";

export default function WellSearch2() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedWell, setSelectedWell] = useState({
    location: "",
    perfdepth: "",
    perfzone: "",
    stroke: "",
    strokepermin: "",
    welldepth: ""
  });

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    const searchWell = {};
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const xmldoc = xhr.responseText;
        var XMLParser = require("react-xml-parser");
        var x = new XMLParser().parseFromString(xmldoc);
        const records = x.getElementsByTagName("welldata");
        for (let i = 0; i < records.length; i++) {
          if (records[i].children[0].value.trim() === searchValue) {
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
    return () => {
      setSelectedWell(searchWell);
    };
  }, [searchValue]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3>Alberta Township Well Search</h3>
        </div>
        <div className="card-body">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="search">
                Well Location
              </label>
            </div>
            <input
              className="form-control"
              type="text"
              id="search"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>
          {selectedWell.location}
        </div>
      </div>
    </div>
  );
}
