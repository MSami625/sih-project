import React, { useState } from "react";
import icon from "./assets/open-mind.png";
import groupicon from "./assets/group.png";
import "./Details.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Details() {
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

  // Define state variables to store user input
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [language, setLanguage] = useState("English");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a user object with the input data
    const user = {
      name,
      gender,
      age,
      language,
    };

    // Store user data in local storage as JSON
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to the story page using navigate
      navigate("/story");
  };

  return (
    <>
      <div className="logo">
        <img src={icon} width={40} /> <a href="/">SIHPREQ</a>
      </div>
      <div className="main-container">
        <div className="detail-container">
          <div className="groupicon">
            <img src={groupicon} width={100} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="questions">
              <h1>What is your name?</h1>
            </div>
            <div className="inputs">
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="questions">
              <h1>What is your gender?</h1>
            </div>
            <div className="inputs">
              <select
                required
                name="Gender"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="questions">
              <h1>What is your age?</h1>
            </div>
            <div className="inputs">
              <input
                required
                type="number"
                id="numericInput"
                min="0"
                max="100"
                step="1"
                inputMode="numeric"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="questions">
              <h1>Select Language</h1>
            </div>
            <div className="inputs">
              <select
                required
                name="Language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Details;
