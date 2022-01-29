import React from "react";
import { VictoryPie } from "victory-pie";

const App = ({data}) => {
  return (
    <div className="pieChart">
      <VictoryPie
        data={data}
        colorScale={["#2b6fab", "#3882c2", "#1f4e78"]}
        radius={100}
      />
    </div>
  );
};

export default App;