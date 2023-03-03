/* eslint-disable no-useless-escape */
import * as yup from 'yup';

import { InputFeedbackMessages } from '../feedback-messages';

export const createPasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, InputFeedbackMessages.PASSWORD_MIN_LENGTH)
    .max(100, InputFeedbackMessages.PASSWORD_MAX_LENGTH)
    .required(InputFeedbackMessages.REQUIRED_FIELD)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      InputFeedbackMessages.STRONG_PASSWORD
    ),
  password_confirmation: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      InputFeedbackMessages.PASSWORDS_NOT_MATCH
    )
    .required(InputFeedbackMessages.REQUIRED_FIELD),
});

export type CreatePasswordDto = yup.InferType<
  typeof createPasswordValidationSchema
>;
