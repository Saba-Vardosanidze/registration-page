import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  userName: z.string().min(3, "Username minimum 3 symbol"),
  Email: z.string().email("incorect format"),
  password: z.union([
    z.string().min(3, "Password must be at least 3 characters"),
    z.number(),
  ]),
});

const RegistreForm = () => {
  const form = useForm();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handlForm = async (data) => {
    fetch("https://6807cb21942707d722dc723c.mockapi.io/feedBack", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to Sand Feedback");
        }
        return res.json();
      })
      .then((responseData) => {
        console.log(responseData);
        reset();
      });
  };

  return (
    <div className="m-auto mt-[154px] max-w-[393px]">
      <h2 className="mb-[38px] font-bold text-[30px]">Sign up</h2>
      <form onSubmit={handleSubmit(handlForm)} noValidate>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className="mt-[6px] pl-[16px] border-[#D8DADC] border-[1px] focus:border-[#46A56C] rounded-[10px] focus:outline-none max-w-[353px] min-h-[56px]"
            type="text"
            placeholder="Enter Your Name"
            id="name"
            {...register("userName")}
          />
          <p className="ml-[5px] text-[12px] text-red-600">
            {errors.userName && <span>{errors.userName.message}</span>}
          </p>
        </div>
        <div className="flex flex-col mt-[22px]">
          <label htmlFor="email">Email</label>
          <input
            className="mt-[6px] pl-[16px] border-[#D8DADC] border-[1px] focus:border-[#46A56C] rounded-[10px] focus:outline-none max-w-[353px] min-h-[56px]"
            type="email"
            placeholder="example@gmail.com"
            id="email"
            {...register("Email")}
          />
          <p className="ml-[5px] text-[12px] text-red-600">
            {errors.Email && <span>{errors.Email.message}</span>}
          </p>
        </div>
        <div className="flex flex-col mt-[22px]">
          <label htmlFor="password">Create a password</label>
          <input
            className="mt-[6px] pl-[16px] border-[#D8DADC] border-[1px] focus:border-[#46A56C] rounded-[10px] focus:outline-none max-w-[353px] min-h-[56px]"
            type="password"
            placeholder="must be 8 characters"
            id="password"
            {...register("password")}
          />
          <p className="ml-[5px] text-[12px] text-red-600">
            {errors.password && <span>{errors.password.message}</span>}
          </p>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-[#46A56C] hover:bg-[#46a56ce1] mt-[38px] mt-38px rounded-[10px] w-full max-w-[353px] min-h-[56px] text-white cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Log in"}
        </button>
        <div>{errors.root && <div>{errors.root.message}</div>}</div>
      </form>
    </div>
  );
};

export default RegistreForm;
