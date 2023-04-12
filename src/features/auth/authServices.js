import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const API_URL ="http://localhost:4500"
   

const registerUser = createAsyncThunk (
    'auth/register',
    async ({ fullnames, username, email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                },
            }
                      await axios.post(`${API_URL} /user-auth-node/auth/register`,  {fullnames, username, email, password}, config
            )
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const authServices= {
    registerUser,
}
export default authServices