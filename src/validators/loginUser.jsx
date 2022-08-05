import * as yup from "yup";

export const formSchema = yup.object({
  email: yup
    .string()
    .required("Seu email é obrigatório")
    .email("Email inválido"),
  password: yup.string().required("Sua senha é obrigatória"),
});
