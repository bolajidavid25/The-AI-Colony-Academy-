"use client";

import Image from "next/image";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import defaultAvatar from "../../../assets/hero-images/Hero2.jpg";

export default function EditProfileTab() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [phone, setPhone] = useState("+12345678990");
  const [homePhone, setHomePhone] = useState("+12345678990");

  const [isSaved, setIsSaved] = useState(false);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  }

  return (
    <div className="space-y-4">
      {/* Tab Section Header */}
      <h2 className="text-sm font-bold text-[#154535]">Account</h2>

      {/* Main Settings Card */}
      <div className="rounded-[20px] bg-[#F9F9F9] p-6 sm:p-8">
        {/* ── Profile Details ── */}
        <div>
          <h3 className="text-sm font-bold text-[#154535]">Profile Details</h3>
          <p className="mt-0.5 text-xs text-[#94A3B8]">
            You have full control to manage your own account setting.
          </p>

          <div className="mt-5 flex items-center gap-4">
            {/* Avatar */}
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-xs sm:h-16 sm:w-16">
              {avatarPreview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={avatarPreview}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={defaultAvatar}
                  alt="Profile"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                  priority
                />
              )}
            </div>

            {/* Change Photo controls */}
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer rounded-full border border-[#CBD5E1] bg-white px-4 py-1 text-xs font-medium text-[#475569] shadow-2xs transition-colors hover:bg-gray-50 hover:text-[#154535]"
              >
                Change Photo
              </button>
              <p className="mt-1 text-[11px] text-[#94A3B8]">
                PNG or JPG no bigger than 800px wide and tall.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-b border-[#E2E8F0]" />

        {/* ── Personal Details Form ── */}
        <form onSubmit={handleSubmit}>
          <div>
            <h3 className="text-sm font-bold text-[#154535]">Personal Details</h3>
            <p className="mt-0.5 text-xs text-[#94A3B8]">
              Edit your personal information
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-xs font-medium text-[#64748B]"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 text-xs sm:text-sm text-[#154535] outline-none transition-colors focus:border-[#31CA92]"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-xs font-medium text-[#64748B]"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 text-xs sm:text-sm text-[#154535] outline-none transition-colors focus:border-[#31CA92]"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-medium text-[#64748B]"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 text-xs sm:text-sm text-[#154535] outline-none transition-colors focus:border-[#31CA92]"
                />
              </div>

              {/* Home Phone */}
              <div>
                <label
                  htmlFor="home-phone"
                  className="block text-xs font-medium text-[#64748B]"
                >
                  Home phone
                </label>
                <input
                  id="home-phone"
                  type="tel"
                  value={homePhone}
                  onChange={(e) => setHomePhone(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 text-xs sm:text-sm text-[#154535] outline-none transition-colors focus:border-[#31CA92]"
                />
              </div>
            </div>
          </div>

          {/* Update Button */}
          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-[#31CA92] px-8 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#28b380] active:scale-95"
            >
              Update
            </button>
            {isSaved && (
              <span className="text-xs font-medium text-[#31CA92] animate-in fade-in">
                Profile updated successfully!
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
