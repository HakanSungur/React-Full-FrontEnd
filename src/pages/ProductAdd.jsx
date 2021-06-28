import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button } from "semantic-ui-react";
import KodTextInput from "../Utilities/customFormControls/KodTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu."),
    unitPrice: Yup.number().required("Ürün fiyatı Zorunlu."),
  });
  return (
    
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values)=>{}}>
        <Form className="ui form">
          <KodTextInput name="prouductName" placeholder="Ürün Adı"/>
          <KodTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
          
          {/* <FormField>
            <Field name="prouductName" placeholder="Ürün Adı" ></Field>
            <ErrorMessage name="productName" render={error=>
              <Label pointing basic color="red" content={eror} >

              </Label>
            }>

            </ErrorMessage>
          </FormField> */}
          
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
   
  );
}
