export default function ProjectCard({ title, description, imageUrl }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
        <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }