// import { useEffect } from 'react';

// const useRippleEffect = () => {
//   useEffect(() => {
//     const addRipple = (event: MouseEvent) => {
//       const ripple = document.createElement('div');
//       ripple.className = 'ripple';
//       ripple.style.width = ripple.style.height = '20px'; // Smaller initial size
//       ripple.style.position = 'absolute';
//       ripple.style.left = `${event.clientX}px`;
//       ripple.style.top = `${event.clientY}px`;

//       document.body.appendChild(ripple);
//       setTimeout(() => {
//         ripple.remove();
//       }, 1500); // Duration should match the CSS animation
//     };

//     document.addEventListener('mousemove', addRipple);
//     return () => document.removeEventListener('mousemove', addRipple);
//   }, []);
// };

// export default useRippleEffect;
import { useEffect } from 'react';

const useRippleEffect = () => {
  useEffect(() => {
    const changeBackground = (event: MouseEvent) => {
      document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Temporarily set to a semi-transparent red
    };

    document.addEventListener('mousemove', changeBackground);
    return () => document.removeEventListener('mousemove', changeBackground);
  }, []);
};

export default useRippleEffect;
