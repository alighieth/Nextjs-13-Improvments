import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const baseUrl: string = `https://cat-fact.herokuapp.com/facts`;
    const url = new URL(baseUrl);

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${cookies().get("token")?.value}`,
      },
    });

    const jsonResponse = await response.json();

    return NextResponse.json(jsonResponse, { status: response.status });
  } catch (err) {
    console.error("error while getting appointment ", err);
    return NextResponse.json("Failure", { status: 500 });
  }
}
