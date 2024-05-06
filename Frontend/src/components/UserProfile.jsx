import { Avatar, Chip, IconButton } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import Tilebig from './../components/Tilebig';

function UserProfile() {

  const { authUser, setAuthUser, selectedChat, setSelectedChat, searchSkill, setSearchSkill } = useContext(AuthContext);
  console.log("authUser ", authUser);
  return (
    <div className='ml-[100px] bg-[#f9f6ff] '>
      <div className='h-[13rem] bg-[#eddfff]  px-28 relative'>

        <div className='absolute  top-36 '>
          <div className='flex gap-9 items-center'>
            <Avatar className='w-[150px] h-[150px]' src={authUser?.avatar} />
            <div className='flex flex-col justify-between'>
              <div className='font-normal mb-5  text-6xl'>{authUser?.name}</div>
              <div className='flex justify-between'>
                <Chip color='pink' variant='ghost' size='lg' value={authUser?.expertise} />
                <div className='flex gap-3'>

                  <IconButton className="rounded-lg bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" color="#ffffff" fill="none">
                      <path d="M7 10V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.00801 7L6.99902 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                  </IconButton>
                  <IconButton className="rounded-lg bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                      <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
                      <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </IconButton>
                  <IconButton className="rounded-lg bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                      <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' mt-32 h-screen px-48 space-y-14 '>

        <div className='flex justify-between gap-14'>

          <div className='bg-[#eadbfd] w-[40rem] p-9 rounded-2xl hover:shadow-lg  h-54'>
            <p className='text-[30px]'>👋🏼</p>
            <h2 className='text-xl font-semibold mb-5'>{authUser?.title}</h2>
            <p className='text-sm'>{authUser?.description}</p>
          </div>

          <div className='bg-[#ffffff] w-[36rem] p-11 rounded-2xl h-54  grid grid-cols-2 grid-rows-3 gap-8 my-auto hover:shadow-lg'>
            <p className='flex items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
              {authUser?.email}
            </p>
            <p className='flex items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M18 20C18 21.1046 15.3137 22 12 22C8.68629 22 6 21.1046 6 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              </svg>
              {authUser?.city}
            </p>
            <p className='flex items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                <path d="M7 22V12.3981C7 11.3299 7 10.7958 7.24458 10.3478C7.48915 9.89983 7.93842 9.61101 8.83697 9.03338L10.9185 7.69526C11.4437 7.35763 11.7063 7.18881 12 7.18881C12.2937 7.18881 12.5563 7.35763 13.0815 7.69526L15.163 9.03338C16.0616 9.61101 16.5108 9.89983 16.7554 10.3478C17 10.7958 17 11.3299 17 12.3981V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 13H12.009" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 22V16.1623C21 13.8707 19.7408 13.6852 17 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 22V16.1623C3 13.8707 4.25916 13.6852 7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 22H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 22V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M12 7V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {authUser?.college}
            </p>
            <p className='flex items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                <path d="M18 2V4M6 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.5 8H20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 8H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {authUser?.age} Years Old
            </p>
            <p className='flex items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                <path d="M21.1609 9.92846C22.1928 9.54155 22.2858 7.69292 21.3685 5.79943C20.4512 3.90594 18.8711 2.68462 17.8391 3.07154M21.1609 9.92846C20.1289 10.3154 18.5488 9.09406 17.6315 7.20057C16.7142 5.30708 16.8072 3.45845 17.8391 3.07154M21.1609 9.92846L6.16089 18.9285C5.12895 19.3154 3.54878 18.0941 2.6315 16.2006C1.71421 14.3071 1.80716 12.4584 2.83911 12.0715L17.8391 3.07154" stroke="currentColor" stroke-width="1.5" />
                <path d="M15 13.6067C13.6383 13.0337 10.9233 10.9504 10.9574 7.20068M11.5 15.7007C10.3333 15.144 7.9 13.0782 7.5 9.26917" stroke="currentColor" stroke-width="1.5" />
                <path d="M15.43 14C16.0276 15.1302 16.639 18.1124 14.5498 21L13.5632 19.584L11 20.8103C11 20.8103 12.8249 18.8868 11.9528 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {authUser?.education}
            </p>
            <p className='flex items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                <path d="M2.57956 8.62505C2.50886 8.03528 2.47351 7.74039 2.52323 7.499C2.6651 6.81015 3.27111 6.25159 4.07871 6.06529C4.36172 6 4.717 6 5.42757 6H18.5724C19.283 6 19.6383 6 19.9213 6.06529C20.7289 6.25159 21.3349 6.81015 21.4768 7.499C21.5265 7.74039 21.4911 8.03528 21.4204 8.62505C21.2584 9.97669 20.4991 10.716 19.0512 11.1423L14.88 12.3703C13.4541 12.7901 12.7411 13 12 13C11.2589 13 10.5459 12.7901 9.11996 12.3703L4.94882 11.1423C3.50094 10.7161 2.7416 9.97669 2.57956 8.62505Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M3.46283 10.5L3.26658 12.7757C2.91481 16.855 2.73892 18.8947 3.86734 20.1974C4.99576 21.5 6.93851 21.5 10.824 21.5H13.176C17.0615 21.5 19.0042 21.5 20.1327 20.1974C21.2611 18.8947 21.0852 16.855 20.7334 12.7757L20.5372 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.5 5.5L15.4227 5.23509C15.0377 3.91505 14.8452 3.25503 14.3869 2.87752C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 2.87752C9.15478 3.25503 8.96228 3.91505 8.57727 5.23509L8.5 5.5" stroke="currentColor" stroke-width="1.5" />
              </svg>
              {authUser?.experience}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className='flex gap-6'>
          <div className='p-6 bg-white rounded-xl'>
            <h1 className='text-2xl font-semibold mb-6'>Skills I Have</h1>
            <div className='flex flex-wrap gap-5'>

              {authUser?.skills.map((skill, index) => (
                <Tilebig key={index} skill={skill} />
              ))}

             

            </div>
          </div>
          {/* <div className='p-6 bg-white rounded-xl'>
            <h1 className='text-2xl font-semibold mb-6'>Skills I Want</h1>
            <div className='flex flex-wrap gap-5'>
              <div className='bg-blue-gray-50 rounded-r-3xl rounded-b-4xl text-[16px] font-semibold text-blue-gray-700 rounded-t-2xl px-5 py-3'>
                UI Desiging
              </div>
              <div className='bg-blue-gray-50 rounded-r-3xl rounded-b-4xl text-[16px] font-semibold text-blue-gray-700 rounded-t-2xl px-5 py-3'>
                User Experience
              </div>
              <div className='bg-blue-gray-50 rounded-r-3xl rounded-b-4xl text-[16px] font-semibold text-blue-gray-700 rounded-t-2xl px-5 py-3'>
                WireFraming
              </div>
              <div className='bg-blue-gray-50 rounded-r-3xl rounded-b-4xl text-[16px] font-semibold text-blue-gray-700 rounded-t-2xl px-5 py-3'>
                Product Designer
              </div>
              <div className='bg-blue-gray-50 rounded-r-3xl rounded-b-4xl text-[16px] font-semibold text-blue-gray-700 rounded-t-2xl px-5 py-3'>
                Web
              </div>

            </div>
          </div> */}
        </div>
      </div>

    </div>
  )
}

export default UserProfile