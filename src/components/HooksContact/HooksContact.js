import React, { useState, useEffect } from "react";
import classes from "./HooksContact.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { db } from "../../firebase";
import * as yup from "yup";
import content from "./index";
const schema = yup.object().shape({
  username: yup
    .string()
    .required("Firstname is required")
    .max(40, "Too Long")
    .min(4, "Too short"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required").min(5, "Too short"),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

const HooksContact = () => {
  // const [name, setName] = useState("");
  // const [photo, setPhoto] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.apiKey) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data, e) => {
    e.preventDefault();
    e.target.reset();

    db.collection("contacts")
      .add({
        name: data.username,
        email: data.email,
        message: data.message,
        createdOn: data.createdOn,
      })
      .then(() => {
        alert("Message has submitted");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className={classes.wrapper} id="contact">
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <h1 className={classes.header}>Contact us</h1>
        {content.inputs.map((input, key) => {
          return (
            <div key={key} className="contact-form-inputs">
              <label className={classes.label}>{input.label}</label>

              {input.name === "message" ? (
                <textarea
                  className={classes.input}
                  type={input.type}
                  name={input.name}
                  ref={register}
                  placeholder="Enter your message here"
                ></textarea>
              ) : (
                <input
                  className={classes.input}
                  type={input.type}
                  name={input.name}
                  ref={register}
                />
              )}

              <p style={{ color: "red", fontSize: "13px" }}>
                {errors[input.name]?.message}
              </p>
            </div>
          );
        })}

        <button disabled={!isLogged} className={classes.button} type="submit">
          Submit
        </button>
        {!isLogged && (
          <p style={{ color: "red", fontSize: "13px" }}>please log in</p>
        )}
      </form>
    </div>
  );
};

export default HooksContact;
