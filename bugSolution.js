```javascript
//pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/'); //This is correct now
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
}
```