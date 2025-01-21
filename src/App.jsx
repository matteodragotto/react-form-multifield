import { useState, useEffect } from "react"

const defaultFormData = {
  title: '',
  image: '',
  content: '',
  category: '',
  tags: []
}

const App = () => {

  const [formData, setFormData] = useState(defaultFormData)
  const [publish, setPublish] = useState([])
  const [oldPublishLength, setOldPublishLength] = useState(publish.length)

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
    setPublish([...publish, { ...formData, id: publish.length + 1 }])
    console.log(publish);
  }

  const removeHandler = (id) => {
    const removePublished = publish.filter(post => post.id !== id)
    setPublish(removePublished)
  }

  useEffect(() => {
    if (publish.length > oldPublishLength) {
      setOldPublishLength(publish.length)
      alert('Il post è stato pubblicato')
    }
  }, [oldPublishLength, publish])

  return (
    <div className="container my-5">
      <div className="row">
        <h1>Aggiungi un post al tuo blog</h1>
        <div className="col-12 d-flex flex-column">

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
            <textarea type='textarea' className="form-control" name='content'
              placeholder="Testo"
              value={formData.content}
              onChange={changeHandler}>
            </textarea>

            <select className='form-select' name="category" id="category" onChange={changeHandler}>
              <option selected>Seleziona una categoria</option>
              <option value='Framework'>Framework</option>
              <option value='Linguaggi di programmazione'>Linguaggi di programmazione</option>
              <option value='Strumenti di sviluppo'>Strumenti di sviluppo</option>
              <option value='Gestione dei pacchetti'>Gestione dei pacchetti</option>
            </select>

            <h3 className="mt-3">Scegli dei tag</h3>
            <div className="tagsContainer d-flex justify-content-start">

              <div className="form-check m-3 p-3">
                <input type='checkbox' className='form-check-input' name='tags' value='html' id='html' onChange={changeHandler} />
                <label className="form-check-label" htmlFor='html'>
                  HTML
                </label>
              </div>

              <div className="form-check m-3 p-3">
                <input type='checkbox' className='form-check-input' name='tags' value='InnovazioneTech' id='css' onChange={changeHandler} />
                <label className="form-check-label" htmlFor='css'>
                  CSS
                </label>
              </div>

              <div className="form-check m-3 p-3">
                <input type='checkbox' className='form-check-input' name='tags' value='js' id='js' onChange={changeHandler} />
                <label className="form-check-label" htmlFor='js'>
                  JS
                </label>
              </div>
            </div>



            <button className="btn btn-success m-3" type="submit"> Salva</button>
            <button className="btn btn-primary m-3" type='button' onClick={publishHandler}>Pubblica</button>

          </form>
        </div>
        <div className="col-12">
          <ul className="list-group">
            {publish.map(post => (
              <li key={post.id} className="list-group-item d-flex justify-content-around" >
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