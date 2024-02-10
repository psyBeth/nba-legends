import { Form } from "react-bootstrap"

const FormComp = ({handleChange}) => {
    

  return (
    <>
    <Form.Control 
        placeholder = "Search a player"
        className="w-50 m-auto"
        onChange={handleChange}
        // onChange={(e) => console.log(e.target.value)}
        type="search"
    /> 
    </>
  )
}

export default FormComp