import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { normalizePathname } from "@/common/utils/helpers";
import { routes } from "@/routes";

const useActiveTab = () => {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState(normalizePathname(pathname));

  useEffect(() => {
    setActiveTab(normalizePathname(pathname));
  }, [pathname]);

  return activeTab || routes.OVERVIEW;
};

export default useActiveTab;
