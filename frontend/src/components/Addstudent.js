import React, { useState } from "react";
import axios from "axios";

function Addstudent() {
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newStudent = {
      name,
      age,
      gender,
    };
    axios
      .post("http://localhost:8070/student/add", newStudent)
      .then(() => {
        alert("Student Added");
        setName("");
        setage("");
        setgender("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form className="py-5" onSubmit={sendData}>
        <div class="form-group">
          <label for="name"> Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Student Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="name"> Age</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Student Age"
            onChange={(e) => {
              setage(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="name">Gender</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Student Gender"
            onChange={(e) => {
              setgender(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <br></br>
        <br></br>

        <select class="btn btn-primary">
          <option value="">Add Components</option>
          <option value="first">Cart Component</option>
          <option value="second">Pie Charts</option>
          <option value="thired">Line Charts</option>
        </select>
      </form>
    </div>
  );
}
export default Addstudent;
