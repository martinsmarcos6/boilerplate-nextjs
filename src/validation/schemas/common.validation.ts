import * as yup from 'yup';

import { validateCpf } from '../cpf.validation';
import { InputFeedbackMessages } from '../feedback-messages';

const COMMON_VALIDATION = {
  required_email: yup
    .string()
    .email(InputFeedbackMessages.INVALID_EMAIL)
    .required(InputFeedbackMessages.REQUIRED_FIELD),
  required_string: yup
    .string()
    .min(1, InputFeedbackMessages.REQUIRED_FIELD)
    .max(100),
  optional_string: yup.string().max(100).optional(),
  required_date: yup
    .date()
    .required(InputFeedbackMessages.REQUIRED_FIELD)
    .typeError(InputFeedbackMessages.INVALID_DATE),
  required_number: yup
    .number()
    .required(InputFeedbackMessages.REQUIRED_FIELD)
    .typeError(InputFeedbackMessages.INVALID_NUMBER),
  optional_number: yup.number().optional(),
  required_url: yup
    .string()
    .url(InputFeedbackMessages.INVALID_URL)
    .required(InputFeedbackMessages.REQUIRED_FIELD),
  optional_url: yup.string().url(InputFeedbackMessages.INVALID_URL).optional(),
  required_boolean: yup
    .boolean()
    .required(InputFeedbackMessages.REQUIRED_FIELD),
  optional_boolean: yup.boolean().optional(),
  required_array: yup.array().required(InputFeedbackMessages.REQUIRED_FIELD),
  optional_array: yup.array().optional(),
  required_phone: yup
    .string()
    .max(15)
    .required(InputFeedbackMessages.REQUIRED_FIELD),
  optional_phone: yup.string().max(15).optional(),
  required_cpf: yup
    .string()
    .test('cpf', InputFeedbackMessages.INVALID_CPF, (value) =>
      validateCpf(value)
    )
    .required(InputFeedbackMessages.REQUIRED_FIELD),
  optional_cpf: yup
    .string()
    .test('cpf', InputFeedbackMessages.INVALID_CPF, (value) =>
      validateCpf(value)
    )
    .optional(),
};

export default COMMON_VALIDATION;
