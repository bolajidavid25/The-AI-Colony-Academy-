"use client";

import React, { useState, useMemo } from "react";
import StudentsToolbar from "./StudentsToolbar";
import StudentsTable from "./StudentsTable";
import StudentsPagination from "./StudentsPagination";
import DeleteStudentModal from "./DeleteStudentModal";
import EditStudentModal from "./EditStudentModal";
import {
  INITIAL_STUDENTS_DATA,
  StudentRecord,
} from "./studentsData";

export default function StudentsScreen() {
  const [students, setStudents] = useState<StudentRecord[]>(INITIAL_STUDENTS_DATA);
  const [search, setSearch] = useState("");
  const [cohortFilter, setCohortFilter] = useState("All Cohorts");
  const [courseFilter, setCourseFilter] = useState("All Courses");
  const [sortBy, setSortBy] = useState("Sort By Newest");
  const [perPage, setPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal states
  const [studentToDelete, setStudentToDelete] = useState<StudentRecord | null>(null);
  const [studentToEdit, setStudentToEdit] = useState<StudentRecord | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Filter & Sort Logic
  const filteredStudents = useMemo(() => {
    return students
      .filter((student) => {
        const matchesSearch =
          search === "" ||
          student.name.toLowerCase().includes(search.toLowerCase()) ||
          student.email.toLowerCase().includes(search.toLowerCase()) ||
          student.cohort.toLowerCase().includes(search.toLowerCase());

        const matchesCohort =
          cohortFilter === "All Cohorts" || student.cohort === cohortFilter;

        const matchesCourse =
          courseFilter === "All Courses" || student.course === courseFilter;

        return matchesSearch && matchesCohort && matchesCourse;
      })
      .sort((a, b) => {
        if (sortBy === "Sort By Name") {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === "Sort By Activity Point") {
          return b.activityPoint - a.activityPoint;
        }
        if (sortBy === "Sort By Attendance") {
          return b.attendancePercent - a.attendancePercent;
        }
        if (sortBy === "Sort By Submission") {
          return b.submissionPercent - a.submissionPercent;
        }
        if (sortBy === "Sort By Oldest") {
          return (a.enrollmentDate || "").localeCompare(b.enrollmentDate || "");
        }
        // Default: Sort By Newest
        return (b.enrollmentDate || "").localeCompare(a.enrollmentDate || "");
      });
  }, [students, search, cohortFilter, courseFilter, sortBy]);

  // Pagination calculation
  const totalCount = filteredStudents.length;
  const totalPages = Math.ceil(totalCount / perPage) || 1;
  const paginatedStudents = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return filteredStudents.slice(start, start + perPage);
  }, [filteredStudents, currentPage, perPage]);

  // Delete Handler
  const handleDeleteStudent = (studentId: string) => {
    setStudents((prev) => prev.filter((s) => s.id !== studentId));
    showToast("Student was removed successfully");
  };

  // Edit Handler
  const handleSaveStudent = (updatedStudent: StudentRecord) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
    showToast("Student details updated successfully");
  };

  // Export to CSV
  const handleExport = () => {
    try {
      const headers = [
        "Student Name",
        "Email",
        "Cohort",
        "Course",
        "Attendance",
        "Submission",
        "Activity Point",
        "Status",
      ];
      const rows = filteredStudents.map((s) => [
        `"${s.name}"`,
        `"${s.email}"`,
        `"${s.cohort}"`,
        `"${s.course}"`,
        `"${s.attendance}"`,
        `"${s.submission}"`,
        `"${s.activityPoint}"`,
        `"${s.status}"`,
      ]);

      const csvContent =
        "data:text/csv;charset=utf-8," +
        [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `enrolled_students_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast("Enrolled students exported to CSV");
    } catch {
      showToast("Export completed");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* ── Page Header (with bottom border running to the end of the screen) ── */}
      <div
        className="mb-6 pb-5 w-full"
        style={{ borderBottom: "1px solid #8FF9D1" }}
      >
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            color: "#154535",
            lineHeight: 1.2,
          }}
        >
          Enrolled Students
        </h1>
        <p
          className="mt-1"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#154535",
          }}
        >
          Manage and monitor student progress and performance
        </p>
      </div>

      {/* ── Toolbar: Search & Action Filters ── */}
      <StudentsToolbar
        search={search}
        onSearchChange={(val) => {
          setSearch(val);
          setCurrentPage(1);
        }}
        cohortFilter={cohortFilter}
        onCohortFilterChange={(val) => {
          setCohortFilter(val);
          setCurrentPage(1);
        }}
        courseFilter={courseFilter}
        onCourseFilterChange={(val) => {
          setCourseFilter(val);
          setCurrentPage(1);
        }}
        sortBy={sortBy}
        onSortByChange={(val) => {
          setSortBy(val);
          setCurrentPage(1);
        }}
        onExport={handleExport}
      />

      {/* ── Unified Table & Pagination Card Block (matching Applications table) ── */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        {/* Enrolled Students Table */}
        <StudentsTable
          students={paginatedStudents}
          onDeleteClick={(student) => setStudentToDelete(student)}
          onEditClick={(student) => setStudentToEdit(student)}
        />

        {/* Pagination */}
        <StudentsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          perPage={perPage}
          totalCount={totalCount}
          onPageChange={setCurrentPage}
          onPerPageChange={(newPerPage) => {
            setPerPage(newPerPage);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* ── Modals ── */}
      <DeleteStudentModal
        isOpen={Boolean(studentToDelete)}
        student={studentToDelete}
        onClose={() => setStudentToDelete(null)}
        onConfirm={handleDeleteStudent}
      />

      <EditStudentModal
        isOpen={Boolean(studentToEdit)}
        student={studentToEdit}
        onClose={() => setStudentToEdit(null)}
        onSave={handleSaveStudent}
      />

      {/* ── Toast Notification ── */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-[#061C19] px-4 py-3 text-sm font-medium text-white shadow-xl animate-in slide-in-from-bottom-3 duration-200">
          <span className="flex h-2 w-2 rounded-full bg-[#31CA92]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
