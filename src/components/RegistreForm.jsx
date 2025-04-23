import { useForm } from "react-hook-form";
const RegistreForm = () => {
  const form = useForm();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  console.log(register);
  const handlForm = (data) => {
    console.log(data);
  };

  return (
    <div className="m-auto mt-[154px] max-w-[393px]">
      <h2 className="mb-[38px] font-bold text-[30px]">Sign up</h2>
      <form onSubmit={handleSubmit(handlForm)}>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className="mt-[6px] pl-[16px] border-[#D8DADC] border-[1px] focus:border-[#46A56C] rounded-[10px] focus:outline-none max-w-[353px] min-h-[56px]"
            type="text"
            placeholder="Enter Your Name"
            id="name"
            {...register("userName", {
              required: "UserName is requred",
            })}
          />
        </div>
        <div className="flex flex-col mt-[22px]">
          <label htmlFor="email">Email</label>
          <input
            className="mt-[6px] pl-[16px] border-[#D8DADC] border-[1px] focus:border-[#46A56C] rounded-[10px] focus:outline-none max-w-[353px] min-h-[56px]"
            type="email"
            placeholder="example@gmail.com"
            id="email"
            {...register("Email", {
              required: "Email is requred",
            })}
          />
        </div>
        <div className="flex flex-col mt-[22px]">
          <label htmlFor="password">Create a password</label>
          <input
            className="mt-[6px] pl-[16px] border-[#D8DADC] border-[1px] focus:border-[#46A56C] rounded-[10px] focus:outline-none max-w-[353px] min-h-[56px]"
            type="password"
            placeholder="must be 8 characters"
            id="password"
            {...register("password", {
              required: "password is requred",
            })}
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
