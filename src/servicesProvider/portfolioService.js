// services/portfolioService.js
import axios from "axios";

const getUserData = async () => {
  try {
    const response = await axios.get(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};

export default { getUserData };
