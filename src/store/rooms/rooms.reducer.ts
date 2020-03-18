import RoomsAction from './rooms.action';
import { RoomDetailInfo } from './rooms.dto';
import { GET_ROOM_LIST_SUCCESS } from './rooms.constants';

export interface RoomsReducerState {
  currentPage: number;
  maxPage: number;
  limit: number;
  roomList: Array<RoomDetailInfo>;
}

const initialState = {
  currentPage: 1,
  maxPage: 1,
  limit: 10,
  roomList: [],
};

export const RoomsReducer = (
  state: RoomsReducerState = initialState,
  action: RoomsAction,
) => {
  switch (action.type) {
    case GET_ROOM_LIST_SUCCESS:
      return {
        ...state,
        roomList: action.payload.roomList,
      };

    default:
      return state;
  }
};