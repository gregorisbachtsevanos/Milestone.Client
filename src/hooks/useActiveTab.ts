import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const normalizePathname = (path: string) => path.replace(/^\//, "");

const useActiveTab = () => {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState(normalizePathname(pathname));

  useEffect(() => {
    setActiveTab(normalizePathname(pathname));
  }, [pathname]);

  return activeTab;
};

export default useActiveTab;
