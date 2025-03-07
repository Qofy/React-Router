import { useParams } from "react-router-dom"
export const UsersDetails = () =>{
  const {userId} = useParams()
  return(
    <div>
      This is User details about user {userId}
    </div>
  )
}