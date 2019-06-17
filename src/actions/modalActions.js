import {
  CLOSE_MODAL,
  OPEN_MODAL
} from './type';

export const closeModal = () => ({
  type: CLOSE_MODAL
})
export const openModal = (payload, current) => ({
  type: OPEN_MODAL,
  payload,
  current
});