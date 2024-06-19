interface PrimaryButtonProps {
  text: string;
}
const PrimaryButton = ({ text }: PrimaryButtonProps) => {
  return (
    <button className="px-4 py-2 bg-amber-400 text-slate-950 font-normal rounded-sm w-full hover:scale-95 active:scale-90 ease-in-out transition-all duration-75 ">
      {text}
    </button>
  );
};

export default PrimaryButton;
