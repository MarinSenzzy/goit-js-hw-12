import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export const toastError = message => {
  iziToast.error({
    message: message,
    closeOnClick: true,
    close: false,
    position: 'topRight',
    transitionIn: 'fadeInLeft',
    transitionOut: 'fadeOutLeft',
  });
};
