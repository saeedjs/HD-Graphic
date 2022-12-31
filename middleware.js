import { NextResponse } from "next/server";
export default async function middleware(req, res) {
  const access = req.cookies.get("access");
  if (access && req.nextUrl.pathname == "/auth") {
    return NextResponse.redirect("http://localhost:3000");
  } else if (!access) {
    if (
      req.nextUrl.pathname == "/dashboard" ||
      req.nextUrl.pathname == "/dashboard/collection" ||
      req.nextUrl.pathname == "/dashboard/resume" ||
      req.nextUrl.pathname == "/dashboard/filemanagement" ||
      req.nextUrl.pathname == "/dashboard/support"
    )
      return NextResponse.redirect("http://localhost:3000");
  }
  return NextResponse.next();
}
