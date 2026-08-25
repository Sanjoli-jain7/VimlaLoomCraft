import { useRef } from 'react';
import ThreadLine from './ThreadLine';
import '../styles/thread-connector.css';

// A brief stretch of the same thread motif used on the homepage journey —
// here it simply marks the handoff from "you chose a doorway" to
// "here's what's through it".
export default function ThreadConnector() {
  const trackRef = useRef(null);

  return (
    <div className="thread-connector" ref={trackRef}>
      <ThreadLine trackRef={trackRef} />
    </div>
  );
}
