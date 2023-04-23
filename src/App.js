import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div className="App">
      <motion.h1
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        Hi, Welcome to the talk.
      </motion.h1>
      <h2>Let's pray to demo gods!</h2>
    </motion.div>
  );
}

export default App;
