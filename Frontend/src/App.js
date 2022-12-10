import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Textutils from "./components/Textutils";
import NoteState from "./context/Notes/noteState";
import { Route, Routes } from "react-router-dom";
import UserState from "./context/Users/userState";
import SIgnup from "./components/SIgnup";
import Login from "./components/Login";

const App = () => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN
  return (
    <>
      <UserState>
        <NoteState>
          <Navbar title={"UrNotes"} />

          {/* <Alert message="APP STARTED" type="success"/> */}
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/textutils" element={<Textutils />} />
              <Route exact path="/signup" element={<SIgnup />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </NoteState>
      </UserState>
    </>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default App;
