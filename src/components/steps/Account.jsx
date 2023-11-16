import  {useStepperContext}  from "../../contexts/StepperContext";

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
    Authentication page
    {/* <CheckOutAuth/> */}
    </div>
  );
}
