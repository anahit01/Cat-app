import React, { useState } from "react";
import { SideBar } from "./sidebar/sidebar";
import { Main } from "./main/main";

function App() {
  const [selectedId, setSelectedId] = useState<number>();
  return (
    <div className="app">
      <SideBar categoryId={setSelectedId} />
      <Main category={selectedId} />
    </div>
  );
}

export default App;
