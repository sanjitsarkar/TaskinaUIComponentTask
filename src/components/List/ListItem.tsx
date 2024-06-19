interface ListItemProps {
  title: string;
  isSelected: boolean;
  onSelected: (value: unknown) => void;
  value: unknown;
}
const ListItem = ({ title, isSelected, onSelected, value }: ListItemProps) => {
  return (
    <li className="flex justify-between w-full text-md text-slate-600 ">
      <span>{title}</span>
      <input
        type="checkbox"
        checked={isSelected}
        className="w-4 h-4 cursor-pointer"
        onChange={() => {
          onSelected(value);
        }}
      />
    </li>
  );
};

export default ListItem;
