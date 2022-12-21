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
   
    const Submit= () => {
      console.log("hai")
      if (listVal.url)
            { setList([...list, listVal]) } 
            setListVal('')
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
         <table className="mytable">
          <th>URL Link</th>
          <th>Topic</th>
          <th>Notes</th>
        {  
      list.map((obj) => {
        console.log(obj.url)
        return(
          <tr>
          <td>{obj.url}</td>
          <td>{obj.topic}</td>
          <td>{obj.notes}</td>
          </tr>
        )
      
      }
      
    )
     }
       
       
       </table> 
       <p>hai</p>
      </Page> 
      
    )   
}

export default BookmarkFrom