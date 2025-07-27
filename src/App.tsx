import JobAddModal from "./components/modals/JobAddModal";
import Navbar from "./components/navbar/Navbar";
import DeleteModal from "./components/modals/DeleteModal";
import JobList from "./components/jobs/JobList";
import HeaderSection from "./components/HeaderSection";
import EmptyJobState from "./components/EmptyJobState";
import { useJobContext } from "./hooks/useJobContext";
import { useState } from "react";
import TabButton from "./components/ui/TabButton";
import Analytics from "./components/Analytics";

function App() {
  const { appliedJobs, isOpen, isDelete, filteredJobs } = useJobContext();
  const [activeTab, setActiveTab] = useState("jobs");

  return (
    <div>
      <Navbar />
      <HeaderSection />
      {isOpen && <JobAddModal />}
      {isDelete && <DeleteModal />}
      <div className="flex items-center justify-center mt-5">
        <TabButton
          buttonText="Jobs"
          tabKey="jobs"
          onActive={setActiveTab}
          activeTab={activeTab}
        />
        <TabButton
          buttonText="AnaLytics"
          tabKey="analytics"
          onActive={setActiveTab}
          activeTab={activeTab}
        />
      </div>
      {activeTab === "jobs" && <JobList />}
      {activeTab === "analytics" && <Analytics />}
      {(appliedJobs.length === 0 || filteredJobs.length === 0) && (
        <EmptyJobState />
      )}
    </div>
  );
}

export default App;
