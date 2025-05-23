import * as yup from 'yup';
import { validateName } from '../utils/validateName';
import { validateEmail } from '../utils/validateEmail';

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .test('is-valid-name', 'Nome muito curto', (value) => validateName(value)),
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .test('is-valid-email', 'E-mail inválido', (value) => validateEmail(value)),
});
