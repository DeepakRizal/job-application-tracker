interface TabButtonProps {
  buttonText: string;
  onActive: (value: string) => void;
  activeTab: string;
  tabKey: string;
}

const TabButton = ({
  buttonText,
  onActive,
  activeTab,
  tabKey,
}: TabButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded ${
        activeTab === tabKey ? "bg-[#007456] text-white" : "bg-gray-200"
      }`}
      onClick={() => onActive(tabKey)}
    >
      {buttonText}
    </button>
  );
};

export default TabButton;
