import * as yup from 'yup';

import { ErrorMessages } from './error-feedback-messages';

export const companySignUpAccessDataStepSchema = yup.object({
  name: yup.string().required(ErrorMessages.REQUIRED_FIELD),
  email: yup
    .string()
    .email(ErrorMessages.INVALID_EMAIL)
    .required(ErrorMessages.REQUIRED_FIELD),
  password: yup.string().required(ErrorMessages.REQUIRED_FIELD),
  confirmPassword: yup
    .string()
    .required(ErrorMessages.REQUIRED_FIELD)
    .oneOf([yup.ref('password'), null], ErrorMessages.PASSWORD_MUST_MATCH),
});
