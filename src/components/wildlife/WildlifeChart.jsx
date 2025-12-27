import React from "react";

const WildlifeChart = ({ data }) => {
  const count = data.reduce((acc, curr) => {
    const status = curr["Conservation Status"];
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="my-6 p-4 border rounded">
      <h3 className="font-bold mb-2">Conservation Status Overview</h3>
      {Object.keys(count).length === 0 ? (
        <p>No animals to display</p>
      ) : (
        Object.keys(count).map((key) => (
          <p key={key}>
            {key}: {count[key]}
          </p>
        ))
      )}
    </div>
  );
};

export default WildlifeChart;
