// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres?sslmode=disable"
})

// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

// createUsersTable();

async function insertData(username: string, email: string, password: string) {

  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData('username7', 'user7@example.com', 'user_password').catch(console.error);

// // Async function to fetch user data from the database given an email
// async function getUser(email: string) {
// try {
//   await client.connect(); // Ensure client connection is established
//   const query = 'SELECT * FROM users WHERE email = $1';
//   const values = [email];
//   const result = await client.query(query, values);
  
//   if (result.rows.length > 0) {
//     console.log('User found:', result.rows[0]); // Output user data
//     return result.rows[0]; // Return the user data
//   } else {
//     console.log('No user found with the given email.');
//     return null; // Return null if no user was found
//   }
// } catch (err) {
//   console.error('Error during fetching user:', err);
//   throw err; // Rethrow or handle error appropriately
// } finally {
//   await client.end(); // Close the client connection
// }
// }

// // Example usage
// getUser('user52@example.com').catch(console.error);