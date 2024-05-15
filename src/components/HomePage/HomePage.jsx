import CardPost from "../CardPost/CardPost"
import CreateNewPost from "../CreateNewPost/CreateNewPost"

const HomePage = () => {
  return (
    <div>
      <h1>sono la homepage</h1>
      <CreateNewPost />
      <CardPost />
    </div>
  )
}

export default HomePage
