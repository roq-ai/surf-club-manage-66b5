import * as yup from 'yup';

export const participantValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  event_id: yup.string().nullable(),
});
