import { createUser, uploadPhoto } from './utils';

const asyncUploadUser = async () => {
  let result = {
    photo: null,
    user: null,
  };

  try {
    result.photo = await uploadPhoto();
  } catch (error) {
    // do nothing
  }

  try {
    result.user = await createUser();
  } catch (error) {
    // do nothing
  }

  return result;
};

export default asyncUploadUser;
