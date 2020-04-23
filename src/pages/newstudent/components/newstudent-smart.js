import React from "react";

function NewStudentSmart({ addStudent, onBlur, selectAvatar }) {
  const handleClick = (event) => {
    event.target.parentElement.parentElement
      .querySelectorAll(".avatarBox")
      .forEach((img) => (img.style.border = "none"));

    event.target.parentElement.style.border = "5px solid rgb(194, 201, 232)";
    event.target.parentElement.style.borderRadius = "5px";

    selectAvatar(event.target);
  };
  return (
    <div className="newstudentWrapper">
      <div className="newstudent-form">
        <p>Add a new student</p>
        <input
          type="text"
          name="first_name"
          onBlur={onBlur}
          placeholder="first name"
        ></input>
        <input
          type="text"
          name="last_name"
          onBlur={onBlur}
          placeholder="last name"
        ></input>
        <input
          type="text"
          name="gender"
          onBlur={onBlur}
          placeholder="gender"
        ></input>
        <input
          type="text"
          name="email"
          onBlur={onBlur}
          placeholder="e-mail"
        ></input>
        <div>Select an avatar</div>
        <div className="avatar-panel">
          <div className="avatarBox">
            <img
              onClick={handleClick}
              className="avatar"
              src="https://randomuser.me/api/portraits/lego/1.jpg"
              alt="avatar"
            />
          </div>
          <div className="avatarBox">
            <img
              onClick={handleClick}
              className="avatar"
              src="https://randomuser.me/api/portraits/lego/2.jpg"
              alt="avatar"
            />
          </div>
          <div className="avatarBox">
            <img
              onClick={handleClick}
              className="avatar"
              src="https://randomuser.me/api/portraits/lego/3.jpg"
              alt="avatar"
            />
          </div>
          <div className="avatarBox">
            <img
              onClick={handleClick}
              className="avatar"
              src="https://randomuser.me/api/portraits/lego/4.jpg"
              alt="avatar"
            />
          </div>
          <div className="avatarBox">
            <img
              onClick={handleClick}
              className="avatar"
              src="https://randomuser.me/api/portraits/lego/5.jpg"
              alt="avatar"
            />
          </div>
          <div className="avatarBox">
            <img
              onClick={handleClick}
              className="avatar"
              src="https://i.pinimg.com/564x/91/fc/58/91fc58add6272e37ec3edd3cce302bf3.jpg"
              alt="avatar"
            />
          </div>
          <div className="avatarBox">
            <img
              onClick={handleClick}
              className="avatar"
              src="https://i.pinimg.com/474x/dc/c2/69/dcc2690e4d64f7c24cdb751be477dc10.jpg"
              alt="avatar"
            />
          </div>
          <div className="avatarBox">
            <img
              onClick={handleClick}
              className="avatar"
              src="https://images.brickset.com/sets/images/8805-10.jpg?201108060256"
              alt="avatar"
            />
          </div>
          <div className="avatarBox">
            <img
              onClick={handleClick}
              className="avatar"
              src="https://img.brickowl.com/files/image_cache/larger/lego-girl-with-pink-halter-top-with-butterflies-minifigure-25.jpg"
              alt="avatar"
            />
          </div>
          <div className="avatarBox">
            <img
              onClick={handleClick}
              className="avatar"
              src="https://www.brickpicker.com/uploads/monthly_2016_01/female_lego.thumb.jpg.1f96fa7adb237554d7477f2d53ea621e.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <button className="addStudent-button" onClick={addStudent}>
          add students
        </button>
      </div>
    </div>
  );
}

export default NewStudentSmart;
