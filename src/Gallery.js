import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [authors, setAuthors] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const bucketName = process.env.REACT_APP_SUPABASE_BUCKET;
  const tableName = process.env.REACT_APP_SUPABASE_TABLE;

  useEffect(() => {
    async function fetchFilesRecursively(path = '') {
      const { data, error } = await supabase.storage.from(bucketName).list(path, { limit: 100 });
      if (error) {
        console.error('LIST ERROR:', error);
        return [];
      }
      if (!data || !data.length) {
        console.log('No items in path:', path);
        return [];
      }

      let results = [];
      for (let item of data) {
        if (item.type === 'folder') {
          const subfiles = await fetchFilesRecursively(`${path}${item.name}/`);
          results = results.concat(subfiles);
        } else if (item.type === 'file') {
          const url = supabase.storage.from(bucketName).getPublicUrl(`${path}${item.name}`).publicUrl;
          results.push({ url, folderId: path.split('/').filter(Boolean)[0] || '' });
        }
      }
      return results;
    }

    async function fetchPhotos() {
      setLoading(true);
      const photosArray = await fetchFilesRecursively();
      if (!photosArray.length) {
        console.warn('No files found in bucket:', bucketName);
        setLoading(false);
        return;
      }

      photosArray.sort(() => Math.random() - 0.5); // shuffle
      setPhotos(photosArray);

      // Fetch authors
      const { data: authorsData, error: authorsError } = await supabase.from(tableName).select('N, AUTHOR');
      if (authorsError) {
        console.error('Error fetching authors:', authorsError);
      } else {
        const authorsMap = {};
        authorsData?.forEach(a => {
          authorsMap[String(a.N)] = a.AUTHOR;
        });
        setAuthors(authorsMap);
      }

      setLoading(false);
    }

    fetchPhotos();
  }, [bucketName, tableName]);

  const nextPhoto = () => setCurrentIndex((currentIndex + 1) % photos.length);
  const prevPhoto = () => setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);

  if (loading) return <p>Loading...</p>;
  if (!photos.length) return <p>No files found.</p>;

  const currentPhoto = photos[currentIndex];
  const credit = authors[currentPhoto.folderId] || 'Unknown';

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={prevPhoto}>◀</button>
      <img
        src={currentPhoto.url}
        alt="File preview"
        style={{ maxWidth: '80%', maxHeight: '80vh', margin: '0 20px' }}
      />
      <button onClick={nextPhoto}>▶</button>
      <p>Credit: {credit}</p>
    </div>
  );
}
