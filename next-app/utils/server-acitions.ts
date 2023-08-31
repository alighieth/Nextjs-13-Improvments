"use server";

import { cookies } from "next/headers";

export async function saveToken() {
  "use server";

  cookies().set({
    name: "isLoggedIn",
    value: "true",
    httpOnly: true,
  });
  console.log("hello, i am logged in server");
}
