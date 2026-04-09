"use client";

import useAttendance from "../hooks/useAttendance";

export default function AttendancePanel() {
  const { attendance, loading, error, handleCheckIn, handleCheckOut } =
    useAttendance();

  return (
    <div className="p-4 border rounded-md space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">My Attendance</h2>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={handleCheckIn}
          >
            Check In
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={handleCheckOut}
          >
            Check Out
          </button>
        </div>
      </div>

      {loading && <p>Loading attendance...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="w-full mt-4 border-collapse text-center">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time In</th>
            <th className="border p-2">Time Out</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.length === 0 && (
            <tr>
              <td colSpan={4} className="p-2">
                No attendance data
              </td>
            </tr>
          )}
          {attendance.map((att: any) => (
            <tr key={att.date}>
              <td className="border p-2">{att.date}</td>
              <td className="border p-2">{att.time_in || "-"}</td>
              <td className="border p-2">{att.time_out || "-"}</td>
              <td className="border p-2">{att.status || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}