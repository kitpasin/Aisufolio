import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const usePage = () => {
  return useContext(PageContext);
};

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(localStorage.getItem("currentPage") || "About Me");

  const pageContextValue = {
    page,
    setPage,
  };

  return (
    <PageContext.Provider value={pageContextValue}>
      {children}
    </PageContext.Provider>
  );
};
