import { useState } from "react"

const defaultFormData = {
  id: 1,
  title: '',
  image: '',
  content: '',
  category: '',
  tags: '',
  published: false
}

const App = () => {

  const [formData, setFormData] = useState(defaultFormData)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(formData);


  }

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const removeHandler = (id) => {
    const newPostList = postTitle.filter(title => title.id !== id)
    setPostTitle(newPostList)
  }

  return (
    <div className="container my-5">
      <div className="row">
        <h1>Inserisci qui il titolo dell'articolo per il tuo blog</h1>
        <div className="col-6 d-flex justify-content-center flex-column">

          <form action="#" onSubmit={submitHandler}>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Titolo"
              value={formData.title}
              onChange={changeHandler}
            />
            <button className="btn btn-success my-3" type="submit"> Invia</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default App