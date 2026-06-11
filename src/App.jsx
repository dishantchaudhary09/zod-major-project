import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "./schema";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("form Submited");
    reset();
  };

  const name = watch("name");

  return (
    <div>
      <h2>Student Registration Form</h2>;<p>Live Name: {name}</p>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("name")} />
        <p>{errors.name?.message}</p>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <>
          <label>
            <input type="radio" value="male" {...register("gender")} />
            Male
          </label>

          <label>
            <input type="radio" value="Female" {...register("gender")} />
            Female
          </label>
        </>
        <p>{errors.gender?.message}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
