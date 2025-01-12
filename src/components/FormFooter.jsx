import Save from "./Save"
import Cancel from "./Cancel"

const FormFooter = () =>{
  return(
    <>
      <div className="maxWidth flexSpaceInBetween">
        <Cancel location=''/>
        <Save />
      </div>

    </>
  )
}

export default FormFooter