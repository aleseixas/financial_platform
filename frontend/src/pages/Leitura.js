import React from 'react';
import '../styles/leitura.css';
import Navbar from '../components/Navbar';

// Just the base file for the Leitura page. 
// Future functionalities will include:
// - A button to change the text to a different one
// - A progress bar to show how much of the text has been read
// - A button to go back to the previous page
// - A conclusion page. 

const Leitura = () => {
  const text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ullamcorper metus, ac fermentum
    metus fermentum et. Aenean at lectus et est convallis sollicitudin non eget lorem. Vestibulum ante ipsum
    primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ut nisi vitae justo interdum dictum.
    Vivamus euismod mauris quis nisl feugiat efficitur. Morbi sodales magna ac mi faucibus, at facilisis libero
    venenatis. Suspendisse eget orci id metus sollicitudin varius vel sit amet justo. Ut sed consectetur nibh.
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam varius
    viverra nisi, ut feugiat tortor blandit quis. Sed ac elementum velit, id fringilla dui. Cras eget ligula sed
    orci fermentum consequat in non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada
    fames ac turpis egestas. Sed nec ultricies magna. Donec non magna at turpis accumsan dictum in sit amet risus.
  `;

  return (
    <>
    <Navbar/>
    <div className = "my-component">
       <div className="text-container2">
      <p>{text}</p>
    </div> 
    </div>
    
    </>
  );
}

export default Leitura;
