// Entry point for the build script in your package.json

import { createRoot } from "react-dom/client"
import Router from "./router"

const domNode = document.getElementById("app")
createRoot(domNode).render(<Router />)
