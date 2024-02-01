





import React from "react";
import { FormControl, Button, Container, Row, Col } from "react-bootstrap";

export default function Main1() {

  const[array, setarray] = React.useState([])

  const[text, settext] = React.useState("")


      React.useEffect(() => {

        console.log(array)


      }, [array])



        const render = array.map((pre, index) => (

                <Container>

                    <Row className="row2">
                  
                  <Col className="mt-3">
                  
                   <Container className="sunder" >

                     <p>{pre}</p>

                   </Container>
                  
                  </Col>

                    <Col xs={2} sm={2} lg={2} className="mt-3">


                    <Button>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg>



                    </Button>


                    </Col>


                    </Row>









                </Container>








    



        ))


    function Change(e){
    
    settext(e.target.value)

    

    }


    function Click(){

         setarray([...array, text])

           settext("")
    



    }







  return (
    <div>
      <Container className="rahul">
        <Row id="row" className="mb-3 mb-sm-4">
          <Col xs={9} sm={9} lg={8}>
            <FormControl onChange={Change} className="form2" type="text" placeholder="Enter text" value={text}
            
            
            style={{ width: "60vw", maxWidth: "250px" }}
            
            
            />
          </Col>
          <Col xs={3} sm={3} lg={4}>
            <Button onClick={Click}  className="rounded-circle"  style={{ backgroundColor: "black" }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>



            </Button>
          </Col>
        </Row>


    {render}


      </Container>

    



    </div>
  );
}














