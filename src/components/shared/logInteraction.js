import axios from "axios";

// both the element and the widget have to be strings!
const logInteraction = (element, widget) => {
  const time = JSON.stringify(new Date());

  let data = {
    element,
    widget,
    time,
  };

  axios
    .post("/interactions", data)
    .then(() => {
      console.log("interaction successfully logged!");
    })
    .catch((err) => {
      console.err(err);
    });
};

export default logInteraction;
