function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>
      <div className="space-y-4">
        <button
          onClick={() => (window.location = "/teacher/manage-results")}
          className="px-6 py-2 bg-blue-500 text-white rounded-md"
        >
          Manage Results
        </button>
      </div>
    </div>
  );
}

export default TeacherDashboard;
