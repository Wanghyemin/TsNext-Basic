import React, { useState } from "react";

const DragDrop = () => {
  const [draggingSectionId, setDraggingSectionId] = useState(null); // 1

  const onDragStart = (e, index, id) => {
    draggingItemIndex.current = index;
    e.target.classList.add("grabbing");
    setDraggingSectionId(id); // 2

    const onLeftItemDragEnter = (e, index) => {
      if (draggingSectionId === "leftSelector") {
        // 3-1
        draggingOverItemIndex.current = index;
        const copyListItems = [...availableOptionsArr];
        const dragItemContent = copyListItems[draggingItemIndex.current];
        // 얕은 복사로 만든 카피 배열에서 드래깅되는 아이템을 하나 제거해주고
        copyListItems.splice(draggingItemIndex.current, 1);
        // 카피 리스트 배열에서 드레깅되는 아이템이 지나간 아이템의 인덱스에 드레그된 아이템을 추가해준다.
        copyListItems.splice(draggingOverItemIndex.current, 0, dragItemContent);
        // 드래깅된 아이템의 장소를 드래그 오버된 아이템의 인덱스로 바꾸어준다.
        draggingItemIndex.current = draggingOverItemIndex.current;
        // 드래그 오버 아이템의 useRef객체의 current 값을 초기화해준다.
        draggingOverItemIndex.current = null;
        // 리스트를 새롭게 랜더링할 수 있도록 상태를 업데이트해준다.
        setAvailableOptionsArr(copyListItems);
      }
    };

    const onRightItemDragEnter = (e, index) => {
      if (draggingSectionId === "rightItemSelector") {
        // 3-2
        draggingOverItemIndex.current = index;
        const copyListItems = [...selectedOptionsArr];
        const dragItemContent = copyListItems[draggingItemIndex.current];
        // 얕은 복사로 만든 카피 배열에서 드래깅되는 아이템을 하나 제거해주고
        copyListItems.splice(draggingItemIndex.current, 1);
        // 카피 리스트 배열에서 드레깅되는 아이템이 지나간 아이템의 인덱스에 드레그된 아이템을 추가해준다.
        copyListItems.splice(draggingOverItemIndex.current, 0, dragItemContent);
        // 드래깅된 아이템의 장소를 드래그 오버된 아이템의 인덱스로 바꾸어준다.
        draggingItemIndex.current = draggingOverItemIndex.current;
        // 드래그 오버 아이템의 useRef객체의 current 값을 초기화해준다.
        draggingOverItemIndex.current = null;
        // 리스트를 새롭게 랜더링할 수 있도록 상태를 업데이트해준다.
        setSelectedOptionsArr(copyListItems);
      }
    };

    const onDragEnd = (e) => {
      e.target.classList.remove("grabbing");
      setDraggingSectionId(null); // 4
    };
    <ul className="select-list">
      {optionsArr.map((option, idx) => {
        return (
          <li
            key={idx}
            onClick={(e) => onClickHandler(e, idx)}
            onDragStart={(e) => onDragStart(e, idx, id)}
            onDragEnter={(e) => onDragEnter(e, idx)}
            onDragOver={onDragOver}
            onDragEnd={onDragEnd}
            draggable
          />
        );
      })}
    </ul>;
  };
};

export default DragDrop;
