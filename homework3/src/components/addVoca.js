// action type
const LOAD = "addVoca/LOAD";
const CREATE = "addVoca/CREATE";

// action 생성 함수
export function LoadVoca(addVoca) {
  return {
    type: LOAD,
    addVoca,
  };
}

export function CreateVoca(addVoca) {
  return {
    type: CREATE,
    addVoca,
  };
}

// 초기상태

const initialState = {
  voca_list: [
    {
      id: "1",
      word: "penguin",
      desc: "Penguins are a group of aquatic flightless birds.",
      example: "Penguin is qute",
    },
  ],
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "addVoca/LOAD":
      return state;

    case "addVoca/CREATE":
      const new_voca_list = [...state.voca_list, action.addVoca];
      return { voca_list: new_voca_list };

    default:
      return state;
  }
}
