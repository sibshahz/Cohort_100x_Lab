// interface User {
//   id: number;
//   name: string;
//   email: string;
//   createdAt: Date;
// }

// // For a profile display, only pick `name` and `email`
// type UserProfile = Pick<User, 'name' | 'email'>;
// const displayUserProfile = (user: UserProfile) => {
//   console.log(`Name: ${user.name}, Email: ${user.email}`);
// };

// interface NewUser {
//   id: string;
//   name: string;
//   age: string;
//   email: string;
//   password: string;
// };

// type UpdateProps = Pick<NewUser, 'name' | 'age' | 'email'>
// //make everything optional
// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps: UpdatePropsOptional) {
//   // hit the database tp update the user
// }
// updateUser({})
