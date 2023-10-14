import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("***********************");
  console.log("***  Test Cron job  ***");
  console.log(`***  ${new Date()}  ***`);
  console.log("***********************");

  const authHeader = request.headers.get("authorization");

  console.log(`Auth header: ${authHeader}`);
  console.log(`Cron secret: ${process.env.CRON_SECRET}`);

  return NextResponse.json(
    {},
    {
      status: 200,
    },
  );
}