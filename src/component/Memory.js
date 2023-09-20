import React, { useState } from "react";
import classes from "./Memory.module.css";

const defaultPictures = [
  "https://as2.ftcdn.net/v2/jpg/05/37/91/89/1000_F_537918923_lssQgh08s7U4KGEVfr03axdTFNxfK5uh.jpg",
  "https://as2.ftcdn.net/v2/jpg/05/37/91/89/1000_F_537918923_lssQgh08s7U4KGEVfr03axdTFNxfK5uh.jpg",
  "https://as2.ftcdn.net/v2/jpg/05/37/91/89/1000_F_537918923_lssQgh08s7U4KGEVfr03axdTFNxfK5uh.jpg",
  "https://as2.ftcdn.net/v2/jpg/05/37/91/89/1000_F_537918923_lssQgh08s7U4KGEVfr03axdTFNxfK5uh.jpg",
  "https://as2.ftcdn.net/v2/jpg/05/37/91/89/1000_F_537918923_lssQgh08s7U4KGEVfr03axdTFNxfK5uh.jpg",
  "https://as2.ftcdn.net/v2/jpg/05/37/91/89/1000_F_537918923_lssQgh08s7U4KGEVfr03axdTFNxfK5uh.jpg",
  "https://as2.ftcdn.net/v2/jpg/05/37/91/89/1000_F_537918923_lssQgh08s7U4KGEVfr03axdTFNxfK5uh.jpg",
  "https://as2.ftcdn.net/v2/jpg/05/37/91/89/1000_F_537918923_lssQgh08s7U4KGEVfr03axdTFNxfK5uh.jpg",
  "https://as2.ftcdn.net/v2/jpg/05/37/91/89/1000_F_537918923_lssQgh08s7U4KGEVfr03axdTFNxfK5uh.jpg",
  

//   "https://images.unsplash.com/photo-1605266167878-41e1caf93ffe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8anVuZ2xlJTIwcml2ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//   "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mount_Everest_as_seen_from_Drukair2_PLW_edit_Cropped.jpg",
//   "https://as2.ftcdn.net/v2/jpg/05/37/91/89/1000_F_537918923_lssQgh08s7U4KGEVfr03axdTFNxfK5uh.jpg",
//   "https://images.unsplash.com/photo-1605266167878-41e1caf93ffe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8anVuZ2xlJTIwcml2ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//   "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mount_Everest_as_seen_from_Drukair2_PLW_edit_Cropped.jpg",



];

const replacementPictures = [
  "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=2000",
  "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-469196054-e1691415831480.jpg?w=1024",
  "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=2000",
  "https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg",
  'https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg',
  "https://www.akc.org/wp-content/uploads/2021/07/Cavalier-King-Charles-Spaniel-laying-down-indoors.jpeg",
  "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-469196054-e1691415831480.jpg?w=1024",
  'https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg',
  'https://img.freepik.com/premium-vector/hand-with-middle-finger-pointing-camera_841047-300.jpg?w=2000'

];

const MemoryGame = (props) => {
  const [currentPictures, setCurrentPictures] = useState(defaultPictures);

  const handleImageClick = (index) => {
    const newPictures = [...currentPictures];
    newPictures[index] = newPictures[index] === defaultPictures[index] ? replacementPictures[index] : defaultPictures[index];
    setCurrentPictures(newPictures);
    console.log(index);
  };

  return (
    <div className={classes.container}>
      <div className={classes.gallery}>
        {currentPictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;