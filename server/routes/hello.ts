import { Hono } from "hono";

export const helloRoute = new Hono()
.get('/', c => {
    try {
        return c.json({ message: 'Hello from server !' }, 200)
    } catch (error) {
        return c.json({ message: 'Error' }, 500)
    }
})