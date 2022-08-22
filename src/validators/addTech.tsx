import * as yup from "yup";

export const formSchema = yup.object().shape({
  title: yup.string().required("Tecnologia obrigatória"),
  status: yup.string().required("Status obrigatório"),
});
