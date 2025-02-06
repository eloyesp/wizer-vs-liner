// Entry point for the build script in your package.json

import { createRoot } from "react-dom/client"

function Application() {
  return <h1>Hello from React!</h1>
}

const domNode = document.getElementById("app")
const root = createRoot(domNode)
root.render(<Application />)
