import axios from "axios";
import { url } from "../axiosConfig/useHttp";

// Api calls
export const getAllGyms = async (setGyms) => {
  setGyms({ loading: true });
  try {
    const response = await axios.get(`${url}/gyms`);
    setGyms({ data: response.data, loading: false });
  } catch (error) {
    setGyms({ error: "Error fetching data", loading: false });
  }
};
