import { Button } from "./components/ui/button"
import { hc } from "hono/client"
import type { ApiRoutes } from "../../server/app"
import { useEffect } from "react"

const client = hc<ApiRoutes>('/',{})

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.api.hello['hello'].$get()
        const data = await res.json()
        console.log(data.message)
      } catch (error) {
        console.error(error)
      }
    }
  }, [])
  return (
    <>
      <h1 className='text-blue-500 text-lg'>Hello from Frontend !</h1>
      <Button>Click me</Button>
    </>
  )
}

export default App
