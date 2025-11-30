// LatestPost.tsx
import { Navigate } from 'react-router-dom';
import { getAllPosts } from '../content/posts';

export function LatestPost() {
    const latest = getAllposts();
              return <Navigate to={`/post/${latest.slug}`} replace />
}