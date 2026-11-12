import certificationCard from "../../../assets/certification-card.png";

export interface CertificatePdfOptions {
  recipientName: string;
  courseName: string;
  issuedDate?: string;
  fileName?: string;
}

function buildPdfFromJpeg(
  jpegBytes: Uint8Array,
  imgWidth: number,
  imgHeight: number,
  pageWidth = 800,
  pageHeight = 550
): Blob {
  const encoder = new TextEncoder();
  const chunks: Uint8Array[] = [];
  const offsets: number[] = [];
  let currentOffset = 0;

  function pushStr(str: string) {
    const bytes = encoder.encode(str);
    chunks.push(bytes);
    currentOffset += bytes.length;
  }

  function pushBytes(bytes: Uint8Array) {
    chunks.push(bytes);
    currentOffset += bytes.length;
  }

  pushStr("%PDF-1.4\n");

  // 1: Catalog
  offsets.push(currentOffset);
  pushStr("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");

  // 2: Pages
  offsets.push(currentOffset);
  pushStr("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");

  // 3: Page
  offsets.push(currentOffset);
  pushStr(
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`
  );

  // 4: Image XObject
  offsets.push(currentOffset);
  pushStr(
    `4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${imgWidth} /Height ${imgHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`
  );
  pushBytes(jpegBytes);
  pushStr("\nendstream\nendobj\n");

  // 5: Content Stream
  const contentStream = `q\n${pageWidth} 0 0 ${pageHeight} 0 0 cm\n/Im0 Do\nQ\n`;
  offsets.push(currentOffset);
  pushStr(
    `5 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}endstream\nendobj\n`
  );

  // xref
  const xrefOffset = currentOffset;
  pushStr(`xref\n0 ${offsets.length + 1}\n`);
  pushStr("0000000000 65535 f \n");
  for (const offset of offsets) {
    pushStr(`${String(offset).padStart(10, "0")} 00000 n \n`);
  }

  pushStr(
    `trailer\n<< /Size ${offsets.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`
  );

  const totalLength = chunks.reduce((acc, c) => acc + c.length, 0);
  const combined = new Uint8Array(totalLength);
  let pos = 0;
  for (const c of chunks) {
    combined.set(c, pos);
    pos += c.length;
  }

  return new Blob([combined], { type: "application/pdf" });
}

export async function downloadCertificatePdf({
  recipientName,
  courseName,
  issuedDate = "November 12, 2026",
  fileName,
}: CertificatePdfOptions): Promise<void> {
  const width = 1600;
  const height = 1100;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas 2D context is unavailable");
  }

  // Draw white background
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, width, height);

  // Attempt to draw user's exact certificate image
  let imageLoaded = false;
  try {
    const certImg = new Image();
    certImg.crossOrigin = "anonymous";
    await new Promise<void>((resolve, reject) => {
      certImg.onload = () => resolve();
      certImg.onerror = () => reject(new Error("Image failed to load"));
      certImg.src = certificationCard.src;
    });

    const drawWidth = 1440;
    const drawHeight = (drawWidth * certImg.height) / certImg.width;
    const drawX = (width - drawWidth) / 2;
    const drawY = (height - drawHeight) / 2;

    ctx.drawImage(certImg, drawX, drawY, drawWidth, drawHeight);
    imageLoaded = true;
  } catch {
    imageLoaded = false;
  }

  if (!imageLoaded) {
    // White & Mint Gradient Background Fallback
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, "#FFFFFF");
    grad.addColorStop(0.55, "#FFFFFF");
    grad.addColorStop(1, "#D6F7EB");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Double Gold/Bronze Border
    ctx.strokeStyle = "#B89355";
    ctx.lineWidth = 5;
    ctx.strokeRect(56, 56, width - 112, height - 112);

    ctx.strokeStyle = "#D4B982";
    ctx.lineWidth = 2;
    ctx.strokeRect(72, 72, width - 144, height - 144);

    // Top Header Text
    ctx.fillStyle = "#154535";
    ctx.font = "600 22px Arial, Helvetica, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("THE AI COLONY ACADEMY", width / 2, 168);

    // Decorative Rules around Header
    ctx.strokeStyle = "#B89355";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(420, 160);
    ctx.lineTo(590, 160);
    ctx.moveTo(width - 590, 160);
    ctx.lineTo(width - 420, 160);
    ctx.stroke();

    // Main "Certificate" Serif Title
    ctx.fillStyle = "#154535";
    ctx.font = "bold 96px Georgia, Times New Roman, serif";
    ctx.fillText("Certificate", width / 2, 290);

    // "— OF COMPLETION —"
    ctx.fillStyle = "#9B7C4B";
    ctx.font = "600 24px Arial, Helvetica, sans-serif";
    ctx.fillText("—   O F   C O M P L E T I O N   —", width / 2, 348);

    // "THIS CERTIFICATE IS PRESENTED TO"
    ctx.fillStyle = "#64748B";
    ctx.font = "500 18px Arial, Helvetica, sans-serif";
    ctx.fillText("THIS CERTIFICATE IS PRESENTED TO", width / 2, 415);

    // Recipient Name
    ctx.fillStyle = "#154535";
    ctx.font = "italic bold 76px Georgia, Times New Roman, serif";
    ctx.fillText(recipientName, width / 2, 540);

    // Underline beneath name
    ctx.strokeStyle = "#31CA92";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 260, 575);
    ctx.lineTo(width / 2 + 260, 575);
    ctx.stroke();

    // Course Description
    ctx.fillStyle = "#475569";
    ctx.font = "400 24px Arial, Helvetica, sans-serif";
    ctx.fillText("For successfully completing the", width / 2, 650);

    ctx.fillStyle = "#154535";
    ctx.font = "bold 36px Arial, Helvetica, sans-serif";
    ctx.fillText(courseName, width / 2, 708);

    // Bottom Date & Signature
    ctx.strokeStyle = "#B89355";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(220, 890);
    ctx.lineTo(520, 890);
    ctx.moveTo(width - 520, 890);
    ctx.lineTo(width - 220, 890);
    ctx.stroke();

    ctx.fillStyle = "#154535";
    ctx.font = "600 20px Arial, Helvetica, sans-serif";
    ctx.fillText(issuedDate, 370, 875);
    ctx.fillText("The AI Colony Academy", width - 370, 875);

    ctx.fillStyle = "#64748B";
    ctx.font = "500 15px Arial, Helvetica, sans-serif";
    ctx.fillText("DATE ISSUED", 370, 922);
    ctx.fillText("AUTHORIZED SIGNATURE", width - 370, 922);

    // Green Verified Seal
    ctx.fillStyle = "#31CA92";
    ctx.beginPath();
    ctx.arc(width / 2, 885, 52, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#154535";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(width / 2, 885, 42, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 16px Arial, Helvetica, sans-serif";
    ctx.fillText("VERIFIED", width / 2, 891);
  }

  const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
  const base64 = dataUrl.split(",")[1];
  const binaryStr = atob(base64);
  const jpegBytes = new Uint8Array(binaryStr.length);
  for (let i = 0; i < binaryStr.length; i++) {
    jpegBytes[i] = binaryStr.charCodeAt(i);
  }

  const pdfBlob = buildPdfFromJpeg(jpegBytes, width, height);
  const url = URL.createObjectURL(pdfBlob);
  const link = document.createElement("a");
  link.href = url;
  const safeName =
    fileName ||
    `${courseName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-certificate.pdf`;
  link.download = safeName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
