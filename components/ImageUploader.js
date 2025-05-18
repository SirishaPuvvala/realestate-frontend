import { useState } from "react";

export default function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Upload failed.");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        style={{
          marginTop: 10,
          padding: "8px 16px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        Upload
      </button>
    </div>
  );
}
