import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(repool) {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const value=setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setLoading(false)
        setTodos(res.data.todos);
      })
    },repool*1000)

    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res => {
      setLoading(false)
      setTodos(res.data.todos);
    })

    return () => {
      clearInterval(value);
    }

  }, [repool])



  return {todos,loading};
}

function DataApp() {
  const {todos,loading} = useTodos(10);

  if(loading) return <div>Loading...</div>

  return (
    <>
      {todos.map((todo,index) => <Track todo={todo} key={index} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default DataApp