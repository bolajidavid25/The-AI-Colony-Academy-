"use client";

import { useState, type FormEvent } from "react";

export default function SecurityTab() {
  const [currentEmail] = useState("johndoe@examplemail.com");
  const [newEmail, setNewEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStatus, setPasswordStatus] = useState<string | null>(null);

  const [showCurrentPw, setShowCurrentPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

  function handleEmailUpdate(e: FormEvent) {
    e.preventDefault();
    if (!newEmail.trim()) {
      setEmailStatus("Please enter a valid email address");
      return;
    }
    setEmailStatus("Confirmation email sent to " + newEmail);
    setNewEmail("");
    setTimeout(() => setEmailStatus(null), 4000);
  }

  function handlePasswordUpdate(e: FormEvent) {
    e.preventDefault();
    if (!currentPassword) {
      setPasswordStatus("Please enter your current password");
      return;
    }
    if (newPassword.length < 8) {
      setPasswordStatus("New password must be at least 8 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordStatus("New passwords do not match");
      return;
    }
    setPasswordStatus("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setTimeout(() => setPasswordStatus(null), 4000);
  }

  // Calculate password strength
  const pwLength = newPassword.length;
  let strengthLabel = "Weak";
  let strengthColor = "bg-[#FF5D2A]";
  if (pwLength >= 8 && /[A-Z]/.test(newPassword) && /[0-9]/.test(newPassword)) {
    strengthLabel = "Strong";
    strengthColor = "bg-[#31CA92]";
  } else if (pwLength >= 6) {
    strengthLabel = "Medium";
    strengthColor = "bg-amber-400";
  }

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <h2 className="text-sm font-bold text-[#154535]">Security</h2>

      {/* Main Settings Card */}
      <div className="rounded-[20px] bg-[#F9F9F9] p-6 sm:p-8">
        {/* ── Security Header ── */}
        <div>
          <h3 className="text-sm font-bold text-[#154535]">Security</h3>
          <p className="mt-0.5 text-xs text-[#94A3B8]">
            Edit your account settings and change your password here.
          </p>
        </div>

        {/* ── Email Address Subsection ── */}
        <div className="mt-6">
          <h3 className="text-sm font-bold text-[#154535]">Email Address</h3>
          <p className="mt-0.5 text-xs text-[#94A3B8]">
            Your current email address is{" "}
            <span className="font-semibold text-[#0F172A]">{currentEmail}</span>
          </p>

          <form onSubmit={handleEmailUpdate} className="mt-3 max-w-lg">
            <label
              htmlFor="new-email"
              className="block text-xs font-medium text-[#64748B]"
            >
              New Email Address
            </label>
            <input
              id="new-email"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter new email address"
              className="mt-1.5 h-10 w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 text-xs sm:text-sm text-[#154535] outline-none transition-colors focus:border-[#FF5D2A]"
            />

            <div className="mt-3 flex items-center gap-3">
              <button
                type="submit"
                className="cursor-pointer rounded-full bg-[#FF5D2A] px-8 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#e54f1f] active:scale-95"
              >
                Update
              </button>
              {emailStatus && (
                <span className="text-xs font-medium text-[#FF5D2A] animate-in fade-in">
                  {emailStatus}
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="my-6 border-b border-[#E2E8F0]" />

        {/* ── Change Password Subsection ── */}
        <div>
          <h3 className="text-sm font-bold text-[#154535]">Change Password</h3>
          <p className="mt-0.5 text-xs text-[#94A3B8]">
            We will email you a confirmation when changing your password, so please
            expect that email after submitting.
          </p>

          <form onSubmit={handlePasswordUpdate} className="mt-4 max-w-lg space-y-4">
            {/* Current Password */}
            <div>
              <label
                htmlFor="current-password"
                className="block text-xs font-medium text-[#64748B]"
              >
                Current Password
              </label>
              <div className="relative mt-1.5">
                <input
                  id="current-password"
                  type={showCurrentPw ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="h-10 w-full rounded-lg border border-[#E2E8F0] bg-white pr-10 pl-3.5 text-xs sm:text-sm text-[#154535] outline-none transition-colors focus:border-[#31CA92]"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPw(!showCurrentPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] hover:text-[#154535]"
                >
                  {showCurrentPw ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-xs font-medium text-[#64748B]"
              >
                Confirm New Password
              </label>
              <div className="relative mt-1.5">
                <input
                  id="confirm-password"
                  type={showConfirmPw ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-10 w-full rounded-lg border border-[#E2E8F0] bg-white pr-10 pl-3.5 text-xs sm:text-sm text-[#154535] outline-none transition-colors focus:border-[#31CA92]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPw(!showConfirmPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] hover:text-[#154535]"
                >
                  {showConfirmPw ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label
                htmlFor="new-password"
                className="block text-xs font-medium text-[#64748B]"
              >
                New Password
              </label>
              <div className="relative mt-1.5">
                <input
                  id="new-password"
                  type={showNewPw ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="h-10 w-full rounded-lg border border-[#E2E8F0] bg-white pr-10 pl-3.5 text-xs sm:text-sm text-[#154535] outline-none transition-colors focus:border-[#31CA92]"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPw(!showNewPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] hover:text-[#154535]"
                >
                  {showNewPw ? "Hide" : "Show"}
                </button>
              </div>

              {/* Password strength indicator */}
              <div className="mt-2 flex items-center gap-2 text-xs text-[#94A3B8]">
                <span>Password strength</span>
                <span
                  title="Password strength rules: 8+ characters, uppercase, and numbers"
                  className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#94A3B8] text-[10px] cursor-help"
                >
                  i
                </span>
                {newPassword && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-12 rounded-full ${strengthColor}`}
                    />
                    <span className="text-[11px] font-medium text-[#64748B]">
                      {strengthLabel}
                    </span>
                  </span>
                )}
              </div>
            </div>

            {/* Update Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="cursor-pointer rounded-full bg-[#31CA92] px-8 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#28b380] active:scale-95"
              >
                Update
              </button>
              {passwordStatus && (
                <p className="mt-2 text-xs font-medium text-[#31CA92] animate-in fade-in">
                  {passwordStatus}
                </p>
              )}
            </div>

            {/* Reset password via email */}
            <div className="pt-2 text-xs text-[#94A3B8]">
              Can&apos;t remember your current password?{" "}
              <button
                type="button"
                onClick={() =>
                  alert("Password reset link sent to your registered email.")
                }
                className="font-medium text-[#FF5D2A] underline hover:text-[#e54f1f] cursor-pointer"
              >
                Reset your password via email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
