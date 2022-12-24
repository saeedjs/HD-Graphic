import axios from "axios";
import { NextResponse } from "next/server";

export default async function middleware(req, res) {
  const access = req.cookies.get("access");
  if (access && req.nextUrl.pathname == "/auth") {
    return NextResponse.redirect("http://localhost:3000");
  }
  return NextResponse.next();
}
