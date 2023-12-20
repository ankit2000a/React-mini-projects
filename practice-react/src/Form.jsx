import React, { useState } from "react";

export default function Form() {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   comments: "",
  //   isFriendly: true,
  //   employment: "",
  //   favColor: "",
  // });

  // function handleForm(e) {
  //   const { name, id, value, type, checked } = e.target;
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  //   console.log(formData);
  // }
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isSub: false,
  });
  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(formData);
  }

  function submitForm(e) {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log("Thanks for Signing Up!");
    } else {
      console.log("Password Doesn't Match");
      return;
    }

    if (formData.isSub) {
      console.log("You are subscribed");
    }
  }
  return (
    <div>
      {/* <form className="form-display">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleForm}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleForm}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleForm}
        />
        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          id="comments"
          value={formData.comments}
          onChange={handleForm}
          cols="30"
          rows="10"
        />
        <label htmlFor="isFriendly">Are You Friendly?</label>
        <input
          type="checkbox"
          name="isFriendly"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleForm}
        />
        <fieldset>
          <legend>Employment</legend>
          <label htmlFor="unemployed">Umemployed</label>
          <input
            type="radio"
            name="employment"
            id="unemployed"
            value="umemployed"
            onChange={handleForm}
          />
          <label htmlFor="partTime">Part-Time</label>
          <input
            type="radio"
            name="employment"
            id="partTime"
            value="parttime"
            onChange={handleForm}
          />
          <label htmlFor="fullTime">Full-Time</label>
          <input
            type="radio"
            name="employment"
            id="fullTime"
            value="fulltime"
            onChange={handleForm}
          />
        </fieldset>
        <label htmlFor="favColor">Choose Your Favourite Color:-</label>
        <select
          name="favColor"
          id="favColor"
          value={formData.favColor}
          onChange={handleForm}
        >
          <option value="">--Choose--</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Orange">Orange</option>
          <option value="Magenta">Magenta</option>
          <option value="Pink">Pink</option>
          <option value="Purple">Purple</option>
        </select>
      </form> */}
      <form className="form-display" onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="jae@gmail.com"
          value={FormData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*******"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="*******"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <label htmlFor="isSub">Signup For Our Newsletter:</label>
        <input
          type="checkbox"
          name="isSub"
          id="isSub"
          checked={formData.isSub}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
