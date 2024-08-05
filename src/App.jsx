import React from "react";
import Memory2 from "./Memory2";
import Memory from "./Memory";

const App = () => {
  return (
    <div>
      <Memory />
      {/* <Memory2/> */}
      <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center p-4">
        <p>Created by Saichandan Gorli</p>
      </footer>
    </div>
  );
};

export default App;
