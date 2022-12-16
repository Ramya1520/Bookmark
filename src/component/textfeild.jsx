import React, { useState,useCallback} from "react";
import './bookmark.css';
import {
  Layout,
  Page,
  Card,
  Button,
  FormLayout,
  TextField,
  DataTable
} from "@shopify/polaris";

function BookmarkFrom() {
  const [url, setUrl] = useState();
  const [topic, setTopic] = useState();
  const [notes, setNotes] = useState();
  const [lists, setLists] =useState([]);

  const handleChange = (newValue) => setUrl(newValue);
  const handleChange1 = (newValue) => setTopic(newValue);
  const handleChange2 =(newValue) => setNotes(newValue);

  const Submit= useCallback(() => {
    
   var details=[]
      details.push(url)
      details.push(topic)
      details.push(notes)
      setLists(() => [...lists, details]);
  }, [notes,url,topic]); 

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
            <Button primary onClick={Submit} >Submit</Button>
          </FormLayout>
        </Card>
      </Layout>

      <p className="layout"></p>
      <DataTable
          columnContentTypes={[
            'text',
            'text',
            'text'
          ]}
          headings={[
            'url link',
            'Type',
            'Notes',
          ]}
          rows={lists}          
        />
    </Page>
  )
        }
   
export default BookmarkFrom