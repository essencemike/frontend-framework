import { Message } from 'element-ui';

export default {
  message(option) {
    Message(option);
  },

  error(message, error) {
    let alertMessage = message;
    if (error.errorMessage) {
      alertMessage = `${alertMessage}, 原因是:${error.errorMessage}`;
    } else if (error.message) {
      alertMessage = `${alertMessage}, 原因是:${error.message}`;
    }
    Message.error(alertMessage);
  },

  success(message) {
    Message.success(message);
  },
};
