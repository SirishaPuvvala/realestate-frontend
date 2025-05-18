import ImageUploader from "../components/ImageUploader";

export default function ImageUploadPage() {
  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
      <h1 style={{ marginBottom: 20 }}>Upload Property Image</h1>
      <ImageUploader />
    </div>
  );
}

