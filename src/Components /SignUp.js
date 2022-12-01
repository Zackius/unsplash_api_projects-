import React from "react";
import Button from "@mui/material/Button";

const SignUp = () => {
  return (
    <div class="flex justify-center pt-56">
      <form class="h-[550px] w-[400px] bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="firstname"
          >
            First Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-5">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="secondname"
          >
            Second Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-7">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="*******"
          />
        </div>
        <div class="mb-8">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="passwordconfirm"
          >
            Password Confirm
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="****"
          />
        </div>
        <div class="flex items-center justify-between">
          <Button variant="contained">Register</Button>
          <div>
        <p class="font-bold text-sm">Already have an account?</p>
        <a href="/signin" class="underline">Login here</a>
       </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
