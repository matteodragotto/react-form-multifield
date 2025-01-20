import { useState } from "react"

const defaultFormData = {
  id: 1,
  title: '',
  image: '',
  content: '',
  category: '',
  tags: [],
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

  // const removeHandler = (id) => {
  //   const newPostList = postTitle.filter(title => title.id !== id)
  //   setPostTitle(newPostList)
  // }

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
            <input
              type="url"
              className="form-control"
              name="image"
              placeholder="Immagine"
              value={formData.image}
              onChange={changeHandler}
            />
            <input
              type='textarea'
              className="form-control"
              name='content'
              placeholder="Testo"
              value={formData.content}
              onChange={changeHandler}
            />
            <select className='form-select' name="category" id="category" onChange={changeHandler}>
              <option value='Cucina'>Cucina</option>
              <option value='Viaggi'>Viaggi</option>
              <option value='Auto'>Auto</option>
              <option value='Tech'>Tech</option>
            </select>
            <h3 className="mt-3">Scegli dei tag</h3>
            <div className="tagsContainer d-flex justify-content-start">
              <div className="form-check mt-3">
                <input type='checkbox' className='form-check-input' name='tags' value='Piatti veloci' id='piattiVeloci' onChange={changeHandler} />
                <label class="form-check-label" htmlFor='piattiVeloci'>
                  Piatti veloci
                </label>
              </div>
              <div className="form-check mt-3">
                <input type='checkbox' className='form-check-input' name='tags' value='Cucina sana' id='cucinaSana' onChange={changeHandler} />
                <label class="form-check-label" htmlFor='cucinaSana'>
                  Cucina sana
                </label>
              </div>


            </div>
            <button className="btn btn-success my-3" type="submit"> Invia</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default App