import { useEffect, useState } from 'react';
import '../App.css';
import { baseUrl } from '../constants';

const Page2 = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${baseUrl}/2`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('API failed');
                }
                return response.json();
            })
            .then(post => {
                setPost(post);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="App"><header className="App-header">Loading...</header></div>;
    }

    if (error) {
        return <div className="App"><header className="App-header">API failed for Page2</header></div>;
    }

    if (!post || !post.title || !post.body) {
        return <div className="App"><header className="App-header">Content not received for Page2</header></div>;
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Title: {post.title}</h1>
                <p>Content: {post.body}</p>         
            </header>
        </div>
    );
}

export default Page2;
