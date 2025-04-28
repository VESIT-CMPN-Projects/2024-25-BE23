import React from "react";
import { Button } from "@/components/ui/button";

const OpenLocalhostPage = () => {
  const openLocalhost = () => {
    window.open("http://localhost:8501", "_blank");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Button onClick={openLocalhost} className="px-6 py-3 text-lg">
        Open Streamlit App
      </Button>
    </div>
  );
};

export default OpenLocalhostPage;