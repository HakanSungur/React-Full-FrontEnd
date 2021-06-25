import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormField, Button } from "semantic-ui-react";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu."),
    unitPrice: Yup.number().required("Ürün fiyatı Zorunlu."),
  });
  return (
    
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values)=>{}}>
        <Form className="ui form">
          <FormField>
            <Field name="prouductName" placeholder="Ürün Adı" ></Field>
          </FormField>
          <FormField>
          <Field name="unitPrice" placeholder="Ürün Fiyatı" ></Field>
          </FormField>
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
   
  );
}
