import { List } from "./components/List";

export function App() {

  return (
    <>
      <div className="container">
        <nav className='p-4 bg-slate-600'>
          <p className='text-xl font-bold text-white'>Rick and Morty</p>
        </nav>
        <List />
      </div>
    </>
  )
}

