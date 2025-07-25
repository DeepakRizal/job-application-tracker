import JobAddModal from "./components/modals/JobAddModal";
import Navbar from "./components/navbar/Navbar";
import DeleteModal from "./components/modals/DeleteModal";
import JobList from "./components/jobs/JobList";
import HeaderSection from "./components/HeaderSection";
import EmptyJobState from "./components/EmptyJobState";
import { useJobContext } from "./hooks/useJobContext";

function App() {
  const { appliedJobs, isOpen, isDelete, filteredJobs } = useJobContext();

  return (
    <div>
      <Navbar />
      <HeaderSection />
      {isOpen && <JobAddModal />}
      {isDelete && <DeleteModal />}
      <JobList />
      {(appliedJobs.length === 0 || filteredJobs.length === 0) && (
        <EmptyJobState />
      )}
    </div>
  );
}

export default App;
