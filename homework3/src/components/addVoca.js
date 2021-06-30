import { firestore } from "../firebase";

const voca_db = firestore.collection("vocaburlary");

export const loadVocaFB = () => {
  return function (dispatch, getState) {
    let voca_data = [];
    voca_db.get().then((docs) => {
      docs.forEach((doc) => {
        if (doc.exists) {
          voca_data = [...voca_data, { id: doc.id, ...doc.data() }];
        }
      });
      dispatch(LoadVoca(voca_data));
    });
  };
};

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
      text: "penguin",
      desc: "Penguins are a group of aquatic flightless birds.",
      example: "Penguin is qute",
    },
  ],
};

export const addVocaFB = (addVoca) => {
  return function (dispatch) {
    let voca_data = { ...addVoca, completed: false };
    console.log(voca_data);
    voca_db
      .add(voca_data)
      .then((docRef) => {
        voca_data = { ...voca_data, id: docRef.id };
        dispatch(CreateVoca(voca_data));
      })
      .catch((err) => {
        console.log(err);
        window.alert("오류 발생");
      });
  };
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "addVoca/LOAD":
      if (action.addVoca.length > 0) {
        return { voca_list: action.addVoca };
      }
      return state;

    case "addVoca/CREATE":
      const new_voca_list = [...state.voca_list, action.addVoca];
      return { voca_list: new_voca_list };

    default:
      return state;
  }
}
