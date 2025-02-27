import React from "react";

const FerriteTable = () => {
  const tableHeaders = [
    "EE", "ETD", "EEH", "EEL", "EP", "EI", "PM", "RM", "PQ", "EP", "UU", "POT"
  ];

  const tableData = [
    ["EE1028", "ETD2910", "EEH2024", "EEL1605", "EP7", "EI1804P", "PM6939", "RM10", "PQ093", "EP7", "UU0103", "P093"],
    ["EE1031", "ETD3411", "EEH2056", "EEL1608B", "EP10", "EI2311", "PM6249", "RM12", "PQ2016", "EP10", "UU0104", "P1003"],
    ["EE1036", "ETD3913", "EEH2056", "EER2118", "EP13", "EI3011", "PM8770", "RM14", "PQ2020", "EP13", "UU1030", "P1181"],
    ["EE1230", "ETD4145", "EER2511", "EER2818", "EP15", "EI3209P", "RM6", "PQ2059", "EP15", "UU1101", "P10610"],
    ["EE1304", "ETD4917", "ER3913P", "IP20", "B3313P", "RM5", "PQ2610", "IP20", "UU1220", "P2010"],
    ["EE1405", "ETD5919", "EER2511A", "EER3019", "B3551T", "RM5", "PQ2616", "IP25", "UU1301", "P2512"],
    ["EE1608", "EEH318A", "EB4012", "PQ2620", "UU1410", "P2522"],
    ["EE1804P", "EEH3522", "EB349P", "PQ2920", "UU1620", "P2748"],
    ["EE1905", "EI405P", "PQ3230", "UU1650C", "PT8311"],
    ["EE1950S", "EI4204", "EH2504", "PQ3535", "UU1910", "P72311"],
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-6">Ferrite Geometries</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {tableHeaders.map((header, index) => (
                <th key={index} className="border border-gray-400 px-4 py-2 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="odd:bg-white even:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-400 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FerriteTable;
