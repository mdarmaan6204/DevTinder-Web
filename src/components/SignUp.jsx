const SignUp = () => {
  return (
    <div className="flex justify-center my-10 ">
      <div className="card bg-base-200 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Sign Up</h2>
          <div>
            <label className="form-control w-full max-w-xs mb-4">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs mt-4">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="Password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            
          </div>
          <div className="card-actions justify-center my-2 ">
            <button className="btn btn-primary hover:shadow-lg hover:scale-105 font-bold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
