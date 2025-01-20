import { useState } from "react"

const postTitlesList = [
  { id: 1, title: "Exploring the Wonders of the Grand Canyon" },
  { id: 2, title: "A Journey Through the Streets of Tokyo" },
  { id: 3, title: "Discovering the Hidden Gems of Paris" },
  { id: 4, title: "Adventures in the Australian Outback" },
  { id: 5, title: "A Foodie's Guide to Italy" },
  { id: 6, title: "The Best Beaches in the Caribbean" },
  { id: 7, title: "Hiking the Trails of the Swiss Alps" },
  { id: 8, title: "Cultural Experiences in India" },
  { id: 9, title: "Road Trip Across the United States" },
  { id: 10, title: "A Safari Adventure in South Africa" }
];

const App = () => {

  const [postTitle, setPostTitle] = useState(postTitlesList)
  const [newTitle, setNewTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setPostTitle([newTitle, ...postTitle])
  }

  const newTitleHandler = (e) => {
    const newTitle = {
      id: postTitle.length + 1,
      title: e.target.value
    }
    setNewTitle(newTitle)
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
              placeholder="Titolo"
              value={newTitle.title}
              onChange={newTitleHandler}
            />
            <button className="btn btn-success my-3" type="submit"> Invia</button>
          </form>

          <ul className="list-group">
            {postTitle.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                {item.title}
                <i className="fa-solid fa-square-minus remove" onClick={() => removeHandler(item.id)}></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default App