import { useState } from "react";
import JobAddModal from "./components/modals/JobAddModal";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleModalOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar />
      <div>
        <button onClick={handleModalOpen}>Add job</button>
      </div>
      {isOpen && <JobAddModal open={isOpen} onClose={setIsOpen} />}
    </div>
  );
}

export default App;
