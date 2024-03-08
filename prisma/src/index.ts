import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email:string,username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstName,
        lastName,
        email,
    }
  })
  console.log(res);
}
async function getUsers(){
  const res=await prisma.user.findMany();
  console.log(res)
  return res;
}
getUsers()

interface UpdateParams {
  firstName: string;
  lastName: string;
}
async function updateUser(username: string, {
  firstName,
  lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: {
      username: username,
    },
    data: {
      firstName,
      lastName,
    }
  })
  console.log(res);
  return res;
}
// insertUser("you4@gmail.com","admin4", "123456", "Shoaib", "Shah")
// insertUser("super@gmail.com","admin2", "123456", "shahid", "gillani")
// updateUser("admin1",{firstName:"Khalid", lastName:"Khan"})


async function getUser(username: string) {
 const res= await prisma.user.findUnique({
  where: {
    username
  }
 }) 
 console.log(res);
 return res;
}

// getUser("admin2")


async function createTodo(userId: number, title: string, description: string) {
  const res = await prisma.todos.create({
    data: {
      title,
      description,
      userId,
      done: false
    }
  })
  return res;
}

createTodo(1, "go to gym", "go to gym and do 10 pushups");

async function getTodos(userId: number, ) {
  const res = await prisma.todos.findMany({
    where: {
      userId
    }
  })
  return res;
}

getTodos(1);

async function getTodosAndUserDetails(userId: number, ) {
  const res = await prisma.todos.findMany({
    where: {
        userId: userId,
    },
    select: {
        user: true,
        title: true,
        description: true
    }
});
return res;
}

getTodosAndUserDetails(1);