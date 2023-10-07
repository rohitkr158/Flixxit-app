import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Flixxit from "./pages/Flixxit";
import Movie from "./pages/Movie";
import TvShow from "./pages/TvShow";
import Player from "./pages/Player";
import UserLiked from "./pages/UserLiked";
import Footer from "./components/Footer";
import About from "./FooterPage/About";
import HelpCenter from "./FooterPage/HelpCenter";
import Thank from "./FooterPage/Thank";
import Contact from "./FooterPage/Contact";
import Copyright from "./FooterPage/Copyright";
import Term from "./FooterPage/Term";
import FAQ from "./FooterPage/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/movies" element={<Movie />} />
        <Route exact path="/tv" element={<TvShow />} />
        <Route exact path="/mylist" element={<UserLiked />} />
        <Route exact path="/" element={<Flixxit />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/thank" element={<Thank />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/copyright" element={<Copyright />} />
        <Route exact path="/term" element={<Term />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/helpcenter" element={<HelpCenter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
