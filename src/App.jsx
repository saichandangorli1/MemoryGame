import React from "react";
import Memory2 from "./Memory2";
import Memory from "./Memory";

const App = () => {
  return (
    <div>
      <Memory />
      {/* <Memory2/> */}
      <footer className="bg-slate-950 text-white text-center p-4">
        <p className="font-bold text-xl">Developed by Saichandan Gorli</p>
      </footer>
    </div>
  );
};

export default App;
