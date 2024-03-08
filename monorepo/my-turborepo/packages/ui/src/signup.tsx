import { Card } from "@mui/material"

export const Signup = () => {
  return(
    <Card>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Submit</button>
    </Card>
  )
}