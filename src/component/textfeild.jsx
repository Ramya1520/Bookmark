import React, { useState,useCallback,useRef} from "react";
import './bookmark.css';
import {
  Layout,
  Page,
  Card,
  Button,
  FormLayout,
  TextField,

  
} from "@shopify/polaris";

var no = 1
function BookmarkFrom() {
   
    const [listVal, setListVal] = useState({
      url:"",
      topic:"",
      notes:""
    })
    const [list, setList] = useState([{url:'',notes:'',value:''}])
    
    const Submit = () => {
        if (listVal.url && listVal.topic && listVal.notes) { setList([...list, listVal]) }
        console.log("list=================>:", list)
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
                      type="text"
                      value={listVal.url}
                      onChange={e=>setListVal({...listVal,url: e})}
                      autoComplete="off"
                      placeholder="paste or type your URL Link here"
                  />
  
                 <TextField
                      label="Topic"
                      type="text"input
                       value={listVal.topic}
                       onChange={e=>setListVal({...listVal,topic: e})}
                       autoComplete="off"
                       placeholder="Enter your topic here"
                  />
              </FormLayout.Group>
                <TextField
                     label="Notes" 
                      type="text"
                      value={listVal.notes}
                      onChange={e=>setListVal({...listVal,notes: e
                      })}
                      autoComplete="off"
                      placeholder="Enter your notes here"
                      multiline={4}
                  />
              <Button primary onClick={Submit} >Submit</Button>
  
            </FormLayout>
          </Card>
        </Layout>
        <p className="layout"></p>
      </Page> 
    )   
}

export default BookmarkFrom