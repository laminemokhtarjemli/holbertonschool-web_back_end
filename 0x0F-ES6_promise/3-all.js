import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadResponse, userResponse]) => {
      console.log(uploadResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch(error => {
      console.log('Signup system offline');
    });
}
export default handleProfileSignup;