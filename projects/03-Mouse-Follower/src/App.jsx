import { useEffect, useState } from 'react';

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect para manejar el movimiento del mouse
  useEffect(() => {
    console.log('Proyecto 3: Mouse Follower');
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Cleanup, cuando el componente se desmonta o cuando 'enabled' cambia
    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled]);

  // useEffect para manejar la clase 'no-cursor' en el body
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);

    return () => {
      document.body.classList.remove('no-cursor');
    }
  }, [enabled]);

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  );
}

function App() {
  // const [mounted, setMounted] = useState(true);

  return (
    <main>
      {/* Si esta montado el componente, renderiza FollowMouse
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMouse component
      </button> */}
      <FollowMouse />
    </main>
  )
}

export default App
