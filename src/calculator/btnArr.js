export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  OPERATION: "operation",
  CLEAR: "clear",
  DELETE: "delete-digit",
  CALC: "calculate",
};
const btnArr = [
  { vol: "C", value: ACTIONS.CLEAR },
  { vol: "DEL", value: ACTIONS.DELETE },
  { vol: "/", value: ACTIONS.OPERATION },
  { vol: "*", value: ACTIONS.OPERATION },
  { vol: "7", value: ACTIONS.ADD_DIGIT },
  { vol: "8", value: ACTIONS.ADD_DIGIT },
  { vol: "9", value: ACTIONS.ADD_DIGIT },
  { vol: "-", value: ACTIONS.OPERATION },
  { vol: "4", value: ACTIONS.ADD_DIGIT },
  { vol: "5", value: ACTIONS.ADD_DIGIT },
  { vol: "6", value: ACTIONS.ADD_DIGIT },
  { vol: "+", value: ACTIONS.OPERATION },
  { vol: "1", value: ACTIONS.ADD_DIGIT },
  { vol: "2", value: ACTIONS.ADD_DIGIT },
  { vol: "3", value: ACTIONS.ADD_DIGIT },
  { vol: ".", value: ACTIONS.ADD_DIGIT },
  { vol: "0", value: ACTIONS.ADD_DIGIT },
  { vol: "=", value: ACTIONS.CALC },
];

export default btnArr;
