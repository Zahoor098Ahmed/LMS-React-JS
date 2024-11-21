import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import StudentDashboard from "./pages/Student/StudentDashboard";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import CourseRegistration from "./pages/Student/CourseRegistration";
import ManageResults from "./pages/Teacher/ManageResults";
export default function AppRouter () {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/student/register-course" element={<CourseRegistration />} />
        <Route path="/teacher/manage-results" element={<ManageResults />} />
      </Routes>
    </BrowserRouter>
    </>
  )
};