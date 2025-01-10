const UserCard = ({ user }) => {

  if(!user)
    return <div></div>;

  const { _id ,  fname, lname, skills, about, photoUrl, gender, age } = user;

  return (
      <div className="flex justify-center my-10 mx-4">
        <div className="card bg-neutral-400 w-96 shadow-xl ">
          <figure className="px-10 pt-10">
            <img src={photoUrl} alt="Profile Picture" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{fname + " " + lname} </h2>
            {age && gender && (
              <p className="my-2 font-bold text-emerald-500 ">
                {gender + " / " + age}{" "}
              </p>
            )}
            <p className="my-2">{about}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Ignore</button>
              <button className="btn btn-secondary">Interested</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default UserCard;
