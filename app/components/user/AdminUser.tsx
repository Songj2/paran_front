"use client"
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function AdminUser() {
  const router = useRouter();

  const handleGoBack = () => {router.push('/');};
  const handlePageUserJoin = () => {router.push('/account');}
  const handlePageUserUpdate = () => { router.push('/admin/userUpdate')}

  // const handlePage = ({id}: string) => {//{유저아이디}
    const handlePage = () => {
    router.push(`/users/update/2`);
  }

  return (
    <div className="mx-auto my-[40px] py-3 px-6 h-auto w-full max-w-lg items-start rounded-lg border border-gray-200 bg-white shadow">
      <div className="flex mb-10">
      {/* 유저 이미지 */}
        <div className="flex flex-col items-center ml-3">
          <Image
            className="mb-3 rounded-full shadow-lg"
            width={102}
            height={100}
            src="/docs/images/people/profile-picture-3.jpg"
            alt="프로필 사진"
          />
        </div>
        {/* 유저정보 */}
        <div className="flex items-center">
          <ul className="text-sm">
            <li className="flex items-center">
              닉네임
              <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900">
                spongeBOB
              </h5>
            </li>
            <li className="flex items-center">
              유저 등급
              <h5 className="mb-2 ml-6 flex items-end text-xl font-medium text-gray-900">
                seller
              </h5>
            </li>
          </ul>
        </div>
      </div>
{/* 버튼 */}
      <div className="flex items-center justify-center">
      <button type="button" onClick={handlePageUserJoin} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white">등록정보</button>
        <button type="button" onClick={handlePageUserUpdate} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white">회원등급 수정</button>
        <button type="button" onClick={handlePage} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white">회원강제탈퇴</button>
        <button type="button" onClick={handleGoBack} className="m-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-green-500 hover:text-white">뒤로가기</button>
      </div>
    </div>
  );
}
