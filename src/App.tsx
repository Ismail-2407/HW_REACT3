import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./types/components/Input";
import Select from "./types/components/Select";
import Button from "./types/components/Button";
import { FormValues } from "./types/FormValues";
import "./styles.css";
import Checkbox from "./types/components/Checkbox";
import RadioGroup from "./types/components/RadioGroup";

const initialValues: FormValues = {
  username: "",
  password: "",
  textInput: "",
  rememberMe: false,
  radioSelection: "radio2",
  dropdown: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(4, "Your password is between 4 and 12 characters")
    .max(12, "Your password is between 4 and 12 characters"),
  textInput: Yup.string().required("This field is required"),
});

const App: React.FC = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="app">
      <h1>Flexible Form Template</h1>
      <p>Copy and use in our own Figma. Enjoy!</p>
      <p>
        All feedback is welcome. Connect with me on{" "}
        <a href="https://dribbble.com/urumovasoph">dribbble.com/urumovasoph</a>
      </p>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input
              label="Username"
              name="username"
              placeholder="Enter username"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              assistiveText="Your password is between 4 and 12 characters"
            />
            <Input
              label="Input Text Label"
              name="textInput"
              placeholder="Typing |"
            />
            <Checkbox label="Remember me" name="rememberMe" />
            <RadioGroup
              label="Radio selection"
              name="radioSelection"
              options={[
                { value: "radio1", label: "Radio selection 1" },
                { value: "radio2", label: "Radio selection 2" },
                { value: "radio3", label: "Radio selection 3" },
              ]}
            />
            <Select
              label="Dropdown Title"
              name="dropdown"
              options={[
                { value: "option1", label: "Dropdown option 1" },
                { value: "option2", label: "Dropdown option 2" },
              ]}
            />
            <div className="button-group">
              <Button type="button" className="button-cancel">
                Cancel
              </Button>
              <Button type="submit" className="button-next">
                Next
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default App;
