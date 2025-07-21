import supabase from "../config/supabase.js";

export const save = async () => {};

export const findAll = async () => {
  const { data, error } = await supabase.from("user").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

console.log("test");

export const findById = async () => {};

export const update = async () => {};

export const remove = async () => {};
