import { useState } from "react"

const defaultFormData = {
  id: 0,
  title: '',
  image: '',
  content: '',
  category: '',
  tags: []
}

const App = () => {

  const [formData, setFormData] = useState(defaultFormData)
  const [publish, setPublish] = useState([])

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

  const publishHandler = () => {
    setPublish([...publish, { formData, id: publish.length + 1 }])
    console.log(publish);

  }

  const removeHandler = (id) => {
    const removePublished = publish.filter(post => post.id !== id)
    setPublish(removePublished)
  }

  return (
    <div className="container my-5">
      <div className="row">
        <h1>Inserisci qui il titolo dell'articolo per il tuo blog</h1>
        <div className="col-6 d-flex flex-column">

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
              <div className="form-check m-3 p-3">
                <input type='checkbox' className='form-check-input' name='tags' value='Piatti veloci' id='piattiVeloci' onChange={changeHandler} />
                <label className="form-check-label" htmlFor='piattiVeloci'>
                  Piatti veloci
                </label>
              </div>
              <div className="form-check m-3 p-3">
                <input type='checkbox' className='form-check-input' name='tags' value='InnovazioneTech' id='innovazioneTech' onChange={changeHandler} />
                <label className="form-check-label" htmlFor='innovazioneTech'>
                  Innovazione Tech
                </label>
              </div>
            </div>

            <button className="btn btn-success m-3" type="submit"> Salva</button>
            <button className="btn btn-primary m-3" onClick={publishHandler}>Pubblica</button>

          </form>
        </div>
        <div className="col-6">
          <ul className="list-group">
            {publish.map((post, index) => (
              <li key={index} className="list-group-item d-flex justify-content-around flex-wrap" >
                <span>{post.title}</span>
                <span>{post.image}</span>
                <span>{post.content}</span>
                <span>{post.category}</span>
                <span>{post.tags}</span>
                <i className="fa-solid fa-square-minus remove" onClick={() => removeHandler(post.id)}></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default App