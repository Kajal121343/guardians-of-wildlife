

const programImpactData = {
  1: [
    { year: "2020", rescued: 120 },
    { year: "2021", rescued: 180 },
    { year: "2022", rescued: 260 },
    { year: "2023", rescued: 310 }
  ],
  2: [
    { year: "2020", rescued: 90 },
    { year: "2021", rescued: 140 },
    { year: "2022", rescued: 190 }
  ],
  3: [
    { year: "2019", rescued: 50 },
    { year: "2020", rescued: 75 },
    { year: "2021", rescued: 130 }
  ]
};

// pretend API call
export const fetchProgramImpact = async (programId) => {
  return programImpactData[programId] || [];
};
