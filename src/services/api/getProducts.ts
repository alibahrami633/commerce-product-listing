import {
  ApiResponse,
  MessageResponse,
  Products
} from "../../common/interfaces";

export default async function getProducts(): Promise<ApiResponse<Products>> {
  try {
    const response = await fetch("/src/common/app-data.json", {
      method: "GET",
      mode: "cors",
    });
    if (response.status === 200) {
      const data: Products = await response.json();
      console.log(data);
      return {
        success: true,        
        body: data,
      };
    } else {
      const data: MessageResponse = await response.json();
      return {
        success: false,
        message: data.msg,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Server Communication Error", // to be replaced with proper messaging
      status: "Error", // to be replaced with proper status
    };
  }
}
