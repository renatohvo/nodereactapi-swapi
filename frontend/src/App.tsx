import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import PeopleCard from "./components/PeopleCard";

function App() {
  return(
    <>
      <ToastContainer />
      <Header />
      <main>
      <section id="people">
        <div className="container">
          <PeopleCard />
        </div>
      </section>  
      </main>
    </>
  )
}

export default App;
