import React, { useState} from "react";
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

  const [url, setUrl] = useState('');
  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [list, setList] =useState([]);

  const handleChange = (newValue) => setUrl(newValue);
  const handleChange1 = (newValue) => setTopic(newValue);
  const handleChange2 =(newValue) => setNotes(newValue);


  var details={}
  function Submit(){
    details=[]
      details.push(url)
      details.push(topic)
      details.push(notes)

    console.log("details:",details)
    console.log("a===>:",list)

    {setList([...list,details])}
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
              <Button primary onClick={Submit}>Submit</Button>
            
          </FormLayout>
        </Card>
        
      </Layout>
      <p></p>
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

       
          rows={list}
        />
    </Page>
  )
        }
export default BookmarkFrom