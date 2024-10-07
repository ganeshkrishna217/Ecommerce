import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import router from "../routers/routes";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 600));

axios.defaults.baseURL = "http://localhost:5000/api/";
axios.defaults.withCredentials = true;

function responsebody(response: AxiosResponse) {
  return response.data;
}

axios.interceptors.response.use(
  async (response) => {
    await sleep();
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            if (data.errors[key]) modelStateErrors.push(data.errors[key]);
          }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 500:
        router.navigate("/server-error", { state: { error: data } });
        break;

      default:
        break;
    }
    return Promise.reject(error.response);
  }
);

const requests = {
  async get(url: string) {
    const response = await axios.get(url);
    return responsebody(response);
  },
  async post(url: string, body: object) {
    const response = await axios.post(url, body);
    return responsebody(response);
  },
  async put(url: string, body: object) {
    const response = await axios.put(url, body);
    return responsebody(response);
  },
  async delete(url: string) {
    const response = await axios.delete(url);
    return responsebody(response);
  },
};

const Catalog = {
  list: () => requests.get("Product"),
  details: (id: number) => requests.get(`Product/${id}`),
};
const TestErrors = {
  get400error: () => axios.get("Bug/bad-request"),
  get404error: () => axios.get("Bug/not-found"),
  get401error: () => axios.get("Bug/unauthorised"),
  get500error: () => axios.get("Bug/server-error"),
  getValidationError: () => axios.get("Bug/validation-error"),
};
const Basket = {
  get: () => requests.get("basket"),
  addItem: (productId: number, quantity = 1) =>
    requests.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
  deleteItem: (productId: number, quantity = 1) =>
    requests.delete(`basket?productId=${productId}&quantity=${quantity}`),
};
const agent = {
  Catalog,
  TestErrors,
  Basket,
};
export default agent;
