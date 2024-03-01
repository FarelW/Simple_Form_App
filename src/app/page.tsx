"use client"
import Form from "@/components/Form";
import Success from "../app/success/page";
import Image from "next/image";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Success from './Success'

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}
