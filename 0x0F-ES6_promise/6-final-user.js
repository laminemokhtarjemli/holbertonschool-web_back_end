import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

const handleProfileSignup = async ( firstName, lastName, fileName,
) => {
  const result = [];
  try {
    const user = await signUpUser(firstName, lastName);
    result.push({ status: 'fulfilled', value: user });
  } catch (error) {
    result.push({
      status: 'rejected',
      value: error.toString(),
    });
  }
  try {
    await uploadPhoto(fileName);
  } catch (error) {
    result.push({
      status: 'rejected',
      value: error.toString(),
    });
  }
  return result;
};

export default handleProfileSignup;
