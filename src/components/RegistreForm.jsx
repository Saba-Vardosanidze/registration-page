const RegistreForm = () => {
  return (
    <div className="m-auto mt-[154px] max-w-[393px]">
      <h2 className="mb-[38px] font-bold text-[30px]">Sign up</h2>
      <form>
        <div className="flex flex-col">
          <label htmlFor="email">Name</label>
          <input
            className="mt-[6px] pl-[16px] border-[#D8DADC] border-[1px] focus:border-[#46A56C] rounded-[10px] focus:outline-none max-w-[353px] min-h-[56px]"
            type="email"
            placeholder="Enter Your Name"
            id="email"
          />
        </div>
        <div className="flex flex-col mt-[22px]">
          <label htmlFor="email">Email</label>
          <input
            className="mt-[6px] pl-[16px] border-[#D8DADC] border-[1px] focus:border-[#46A56C] rounded-[10px] focus:outline-none max-w-[353px] min-h-[56px]"
            type="email"
            placeholder="example@gmail.com"
            id="email"
          />
        </div>
        <div className="flex flex-col mt-[22px]">
          <label htmlFor="email">Create a password</label>
          <input
            className="mt-[6px] pl-[16px] border-[#D8DADC] border-[1px] focus:border-[#46A56C] rounded-[10px] focus:outline-none max-w-[353px] min-h-[56px]"
            type="email"
            placeholder="must be 8 characters"
            id="email"
          />
        </div>
        <button
          type="submit"
          className="bg-[#46A56C] hover:bg-[#46a56ce1] mt-[38px] mt-38px rounded-[10px] w-full max-w-[353px] min-h-[56px] text-white cursor-pointer"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default RegistreForm;
