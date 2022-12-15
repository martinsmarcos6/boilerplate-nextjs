import * as yup from 'yup';

import { InputFeedbackMessages } from '../feedback-messages';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(InputFeedbackMessages.INVALID_EMAIL)
    .required(InputFeedbackMessages.REQUIRED_FIELD),
  password: yup.string().required(InputFeedbackMessages.REQUIRED_FIELD),
});
