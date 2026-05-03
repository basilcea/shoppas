"use client";

const handleInstallClick = (): void => {
  alert("You're being redirected to install the app.");
  window.location.href = "https://shoppas-app.vercel.app/app/download";
};

export default function DownloadButton() {
  return (
    <button
      onClick={handleInstallClick}
      className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-extrabold text-xl shadow-ambient flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
    >
      <span className="material-symbols-outlined">download</span>
      Download App
    </button>
  );
}