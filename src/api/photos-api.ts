import axios from "axios";
import { FetchPhotosResponse } from "../components/App/App.type";

axios.defaults.baseURL = "https://api.unsplash.com";
const KEY: string = "AC_nMjspbvXco3DlqUFSXU_Nw6YXiCWSUT2nb4dvqGE";

export const fetchPhotosWithQuery = async (query: string, page: number): Promise<FetchPhotosResponse> => {
    const { data } = await axios.get("/search/photos", {
        params: {
            client_id: KEY,
            query: query,
            page: page,
            per_page: 12,
            orientation: "landscape",
        }
    });
    return data;
};