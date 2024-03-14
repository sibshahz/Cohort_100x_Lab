import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
import client from '@/db';
// const client = new PrismaClient;
export async function GET() {
  const user = await client.user.findFirst({
    // where: {
    //   username:"ultimater"
    // }
  });
  return Response.json({ name: user?.username, email: user?.username })
}


export async function POST(req: NextRequest) {
  const body = await req.json();
  // should add zod validation here
 try {
  const user = await client.user.create({
    data: {
        username: body.username,
        password: body.password
    }
  });
  return NextResponse.json({ body });

 } catch (error) {
  console.log(error);
  return NextResponse.json({ 
    message: "Error"
  
  }, { status: 411 });
 }



}