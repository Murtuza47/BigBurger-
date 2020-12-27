import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-react-5710e-default-rtdb.firebaseio.com/",
});

export default instance;
