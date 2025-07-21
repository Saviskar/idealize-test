import * as userRepository from "../repositories/userRepository.js";

export const createUser = async () => {
  const user = await userRepository.findAll();
  return user;
};
