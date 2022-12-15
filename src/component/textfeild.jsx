import React, { useState, useCallback } from "react";
import {
  Layout,
  Page,
  Card,
  Button,
  FormLayout,
  TextField,
} from "@shopify/polaris";

function BookmarkFrom() {
  const [url, setUrl] = useState('');
  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState('');

  const handleChange = useCallback((newValue) => setUrl(newValue), []);
  const handleChange1 = useCallback((newValue) => setTopic(newValue), []);
  const handleChange2 = useCallback((newValue) => setNotes(newValue), []);
  var details={}
  details.url=url
  details.topic=topic
  details.notes=notes
  function submit(){
    console.log(details)
  }
  return (
    <Page
      title="Bookmark"
    >
      <Layout>
        <Card sectioned>
          <FormLayout>
            <FormLayout.Group>
          
                <TextField
                    label="URL Link"
                    value={url}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="paste or type your URL Link here"
                />
  
               <TextField
                    label="Topic"
                    value={topic}
                    onChange={handleChange1}
                    autoComplete="off"
                    placeholder="Enter your topic here"
                />
            </FormLayout.Group>
            <TextField
                    label="Notes"
                    value={notes}
                    onChange={handleChange2}
                    autoComplete="off"
                    placeholder="Enter your notes here"
                    multiline={4}
                />
             
              <Button primary onClick={submit}>Submit</Button>
          </FormLayout>
        </Card>
      </Layout>
    </Page>
  )
  console.log("Details:",details)
}



export default BookmarkFrom