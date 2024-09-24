import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
});

// getメソッドをオーバーライドしてエラーをスロー
apiClient.get = () => {
  throw new Error("GET method is not allowed");
};

export default apiClient;
