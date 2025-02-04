import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { motion } from "framer-motion";
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
        <App />
    </motion.div>
  </StrictMode>,
)
