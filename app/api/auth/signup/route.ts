import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    return new Response(JSON.stringify({
      message: 'Create user successful!',
      data: {
        newUser,
      },
    }), { status: 201 });

  } catch (error) {
    return new Response(JSON.stringify({
      error: 'An error occurred while creating the user',
    }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}