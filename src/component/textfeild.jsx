
import React from "react";
import {
  Layout,
  Page,
  Card,
  Button,
  FormLayout,
  TextField,
} from "@shopify/polaris";
function InputField() {
  return (
    <Page
      title="bookmark"
    >
      <Layout>
        <Card sectioned>
          <FormLayout>
            <FormLayout.Group>
              <TextField
                label="url link"
                placeholder="url"
              />
              <TextField
                label="Type"
                placeholder="type"
              />
            </FormLayout.Group>
              <TextField
                label="Email"
                placeholder="example@email.com"
              />
              <Button primary>Submit</Button>
          </FormLayout>
        </Card>
      </Layout>
    </Page>
  )
}
export default InputField