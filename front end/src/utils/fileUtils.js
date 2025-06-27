export const getFileTypeFromUrl = (url) => {
  if (!url) return null;

  try {
    // Extract the file name from the URL
    const decodedUrl = decodeURIComponent(url);
    const fileName = decodedUrl.match(/o\/(.*?)\?/)[1];

    // Check if it's an image (contains image or images in the path)
    const isImage =
      fileName.toLowerCase().includes("image") ||
      fileName.toLowerCase().includes("images") ||
      /\.(jpg|jpeg|png|gif|webp|bmp|svg)\d*/i.test(fileName);

    // Check if it's a PDF
    const isPDF = /\.pdf\d*/i.test(fileName);

    if (isImage) {
      return { type: "image/*", isImage: true, isPDF: false };
    }

    if (isPDF) {
      return { type: "application/pdf", isImage: false, isPDF: true };
    }

    return { type: "unknown", isImage: false, isPDF: false };
  } catch (error) {
    console.error("Error parsing Firebase URL:", error);
    return { type: "unknown", isImage: false, isPDF: false };
  }
};
