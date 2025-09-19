const initialState = [
  {
    id: 1,
    userName: "Nguyễn Quang Huy",
    gender: "male",
    dateBirth: "2006-09-10",
    address: "Hà Nội",
  },
  {
    id: 2,
    userName: "Trần Thị A",
    gender: "female",
    dateBirth: "1990-05-20",
    address: "Hồ Chí Minh",
  },
  
];

export default initialState;
export const userReducer = (state = initialState, action: any) => {
  return state;
};
