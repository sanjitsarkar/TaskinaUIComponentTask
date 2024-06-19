import { useCallback, useMemo, useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import ListItem from "./ListItem";

const ListCard = () => {
  const [pages, setPages] = useState([
    {
      selected: false,
      pageNo: 1,
    },
    {
      selected: false,
      pageNo: 2,
    },
    {
      selected: false,
      pageNo: 3,
    },
    {
      selected: false,
      pageNo: 4,
    },
    {
      selected: false,
      pageNo: 5,
    },
    {
      selected: false,
      pageNo: 6,
    },
  ]);

  const isAllPageSelected = useMemo(() => {
    return pages.every((page) => page.selected);
  }, [pages]);

  const onItemSelected = useCallback(
    (() => (pageNo: number) => {
      if (pageNo === 0) {
        setPages((prev) =>
          prev.map((each) => ({ ...each, selected: !isAllPageSelected }))
        );
      }
      setPages((prev) => {
        return prev.map((each) => {
          if (each.pageNo === pageNo)
            return { ...each, selected: !each.selected };
          return each;
        });
      });
    })(),
    [pages, isAllPageSelected]
  );
  return (
    <div className="rounded-md shadow-md p-5  w-96 flex flex-col gap-5">
      <ul className="list-none flex flex-col gap-6 px-2">
        <ListItem
          title="All Pages"
          isSelected={isAllPageSelected}
          value={0}
          onSelected={onItemSelected}
        />
        <hr />
        {pages.map((page) => (
          <ListItem
            key={page.pageNo}
            value={page.pageNo}
            onSelected={onItemSelected}
            title={`Page ${page.pageNo}`}
            isSelected={page.selected}
          />
        ))}
      </ul>
      <hr />

      <PrimaryButton text="Done" />
    </div>
  );
};

export default ListCard;
