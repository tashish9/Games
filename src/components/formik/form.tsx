import {
  Formik,
  type FormikValues,
  type FormikConfig,
  Form as FormikForm,
} from "formik";
import { type PropsWithChildren } from "react";

export const Form = <T extends FormikValues>({
  children,
  ...formikProps
}: PropsWithChildren & FormikConfig<T>) => {
  return (
    <Formik {...formikProps}>
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
};
