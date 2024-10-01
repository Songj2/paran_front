import React from "react";
import HeartCheckbox from "./HeartCheckBox";
import SelectCheckBox from "./SelectCheckBox";
import { useAppDispatch } from "@/lib/store";
import { useRouter } from "next/navigation";
import { saveCurrentGroup } from "@/lib/features/group/group.Slice";

interface GroupCardProps {
  group: any; // 타입을 더 구체적으로 정의할 수 있습니다.
  active: boolean;
  onSelect: () => void;
}

const GroupCard = ({ group, active, onSelect }: GroupCardProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLikeChange = (isLiked: boolean) => {
    console.log('좋아요 상태:', isLiked);
    // 여기에서 필요한 로직을 수행 (예: API 호출)
  };

  const onClickToDetail = () => {
    dispatch(saveCurrentGroup(group));
    router.push(`/groups/${group.id}`);
  };

  return (
    <div className="relative max-w-sm">
      <form className="absolute top-2 w-full px-3">
        <div className="flex justify-between">
          <HeartCheckbox onChange={handleLikeChange} />
          <SelectCheckBox />
        </div>
      </form>
      <div
        className={`max-w-sm rounded-lg border border-gray-200 bg-white shadow ${active ? 'ring-2 ring-green-500' : ''
          }`}
        onClick={onSelect}
      >
        <div className="p-5">
          <h5 className={`mb-2 text-lg font-medium tracking-tight ${active ? 'text-green-600' : 'text-gray-900'
            }`}>
            {group.title || "Group Title"}
          </h5>
          <p className="mb-3 text-sm font-medium text-gray-700">
            {group.content || "Group Content"}
          </p>
          <div className="w-full flex justify-between">
            <p className="text-sm font-medium">소모임 : {group.name}</p>
            <p className="text-sm font-medium">
              카테고리
              <span className="font-xs bg-green-400 p-2 text-white rounded-full ml-2">
                {group.categoryName}
              </span>
            </p>
          </div>
          <button
            onClick={onClickToDetail}
            className={`mt-5 inline-flex w-full items-center rounded-lg p-3 text-sm font-medium text-white ${active ? 'bg-green-600 hover:bg-green-700' : 'bg-green-400 hover:bg-green-500'
              }`}
          >
            상세보기
            <svg
              className="ms-2 size-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;