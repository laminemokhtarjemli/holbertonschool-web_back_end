import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadResponse, userResponse]) => {
      console.log('${uploadResponse[0].body}, ${userResponse[1].firstName}, ${userResponse[1].lastName}');
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
export default handleProfileSignup;
