const requirements = [
  { label: "Complete all modules", done: true },
  { label: "Attendance > 80%", done: true },
  { label: "Submit & pass  capstone ", done: false },
];

export default function CertificateProgressCard() {
  const met = requirements.filter((item) => item.done).length;

  return (
    <article className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] p-5">
      <h2 className="mb-4 text-sm font-semibold text-[#0F172A]">Certificate</h2>

      <div className="mb-4 flex text-[#E2E8F0]" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="77" height="85" viewBox="0 0 77 85" fill="none">
        <path d="M36.2104 82.8495C19.96 82.8495 11.8347 82.8495 6.78641 76.9101C1.73804 70.9712 1.73804 61.4118 1.73804 42.2938C1.73804 23.1757 1.73804 13.6166 6.78641 7.67736C11.8347 1.7381 19.96 1.7381 36.2104 1.7381C52.4607 1.7381 60.586 1.7381 65.6344 7.67736C69.6981 12.4583 70.4909 19.5848 70.6454 32.1549" stroke="#D2ECE2" stroke-width="3.4762" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.0156 26.0715H50.4046M22.0156 46.3494H34.1823" stroke="#D2ECE2" stroke-width="3.4762" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M69.0976 67.0545C72.5161 64.566 74.7381 60.5332 74.7381 55.9812C74.7381 48.4216 68.6102 42.2936 61.0506 42.2936H60.0367C52.4771 42.2936 46.3491 48.4216 46.3491 55.9812C46.3491 60.5332 48.5712 64.566 51.9896 67.0545M69.0976 67.0545C66.8391 68.6987 64.0582 69.6687 61.0506 69.6687H60.0367C57.0291 69.6687 54.2482 68.6987 51.9896 67.0545M69.0976 67.0545L71.4612 74.4965C72.3628 77.335 72.8138 78.7544 72.6905 79.6382C72.4337 81.4774 70.9336 82.8429 69.1625 82.8494C68.3117 82.8526 67.0366 82.1834 64.4868 80.8455C63.3935 80.2716 62.8468 79.9845 62.2875 79.8158C61.1479 79.4723 59.9393 79.4723 58.7997 79.8158C58.2405 79.9845 57.6938 80.2716 56.6004 80.8455C54.0507 82.1834 52.7756 82.8526 51.9247 82.8494C50.1537 82.8429 48.6535 81.4774 48.3968 79.6382C48.2735 78.7544 48.7245 77.335 49.626 74.4965L51.9896 67.0545" stroke="#D2ECE2" stroke-width="3.4762"/>
</svg>
      </div>
      <span className="text-[#154535]">Complete all requirements to earn your certificate. </span>

      <ul className="space-y-3">
        {requirements.map((item) => (
          <li key={item.label} className="flex items-center gap-2 text-sm text-[#475569]">
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                item.done
                  ? "border-bg-white "
                  : "border-bg-white"
              }`}
            >
              {item.done && (
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              )}
            </span>
            {item.label}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-[#E2E8F0]">
          <div className="h-full w-[66%] rounded-full bg-[#00B98A]" />
        </div>
        <p className="text-xs text-[#64748B]">{met}/3 requirements met.</p>
      </div>
    </article>
  );
}
