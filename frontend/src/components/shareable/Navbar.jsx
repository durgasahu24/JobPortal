import React, { useState } from 'react'
import { Popover, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { PopoverContent } from '../ui/popover'
// import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { USER_API_END_POINT } from '../constant'
import { setUser } from '@/redux/authslice'
import { toast } from 'sonner'
import axios from 'axios'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Menu } from 'lucide-react'
import { X } from 'lucide-react'

function Navbar() {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };



  const { user } = useSelector(store => store.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });

      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");

        toast.success(res.data.message);
        // console.log("logout successfully");


      }
    } catch (error) {
      // console.log(error);
      toast.error(error.message);

    }
  }



  return (
    <div>
      <div className='flex items-center justify-between mx-auto max-w-6xl h-16 px-1 '>
        <div ><h1 className='text-2xl font-bold'>Job<span className='text-[#9b29e6]'>Portal</span></h1></div>

        {/* for large size  */}
        <div className=' hidden lg:flex items-center gap-5'>

          <ul className='flex font-medium  gap-3 items-center px-2'>
            {
              user && user.role === "recruiter" ? (
                <>
                  <li><Link to="/admin/companies" > Companies</Link></li>
                  <li> <Link to="/admin/jobs" >Jobs</Link> </li>
                </>
              ) : (
                <>
                  <li><Link to="/"> Home</Link></li>
                  <li> <Link to="/jobs">Jobs</Link> </li>
                  <li> <Link to="/Browse">Browse</Link> </li>
                </>
              )
            }

          </ul>
          {
            !user ? (
              <div className='flex gap-4'>
                <Link to="/login"><Button className='bg-[#F83002]'>Login</Button></Link>
                <Link to="/signup"> <Button className='bg-[#F83002]' >SignUp</Button></Link>


              </div>
            ) : (
              <Popover >
                <PopoverTrigger asChild>
                  <Avatar className='rounded-full cursor-pointer' >
                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className=' w-80' >
                  <div className='flex gap-4 space-y-2'>
                    <Avatar className='rounded-full cursor-pointer' >
                      <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className='font-medium ' >{user?.fullName}</h4>
                      <p className='text-sm font-light'>Lorem ipsum dolor sit, amet consect</p>
                    </div>
                  </div>
                  {
                    user && user.role === "recruiter" ? null :
                      <div className=' mt-2 flex w-fit items-center  cursor-pointer' >
                        <User2 />
                        <Button variant="link"><Link to="/profile">View Profile</Link ></Button>
                      </div>
                  }

                  <div className='flex w-fit items-center cursor-pointer  ' >
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">Logout</Button>
                  </div>
                </PopoverContent>
              </Popover>)
          }


        </div>

        {/* for tablet and mobile size  */}

        {/* Hamburger Menu */}

        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* slider menu  */}

        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white shadow-md z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >

          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={closeMobileMenu} className="text-gray-800">
              <X className="w-6 h-6" />
            </button>
          </div>
          {/* 

          <div className="flex flex-col justify-center items-start space-y-4 mt-2 ml-6">
            <li className="list-none">
              <Link to="/">Home</Link>
            </li>
            <li className="list-none">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="list-none">
              <Link to="/Browse">Browse</Link>
            </li>
          </div> */}


          <ul className='flex flex-col font-medium  gap-3 items-start ml-6'>
            {
              user && user.role === "recruiter" ? (
                <>
                  <li><Link to="/admin/companies" > Companies</Link></li>
                  <li> <Link to="/admin/jobs" >Jobs</Link> </li>
                </>
              ) : (
                <>
                  <li><Link to="/"> Home</Link></li>
                  <li> <Link to="/jobs">Jobs</Link> </li>
                  <li> <Link to="/Browse">Browse</Link> </li>
                </>
              )
            }

          </ul>



          <div className='mt-8 ml-6'>
            {
              !user ? (
                <div className='flex gap-4 mx-auto w-64'>
                  <Link to="/login">
                    <Button className='bg-[#F83002]'>Login</Button>
                  </Link>
                  <Link to="/signup">
                    <Button className='bg-[#F83002]'>SignUp</Button>
                  </Link>
                </div>

              ) : (
                <div>
                  <div className='flex gap-4 space-y-2'>
                    <Avatar className='rounded-full cursor-pointer' >
                      <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className='font-medium ' >{user?.fullName}</h4>
                      <p className='text-sm font-light'>Lorem ipsum dolor sit, amet consect</p>
                    </div>
                  </div>
                  {
                    user && user.role === "recruiter" ? null :
                      <div className=' mt-2 flex w-fit items-center  cursor-pointer' >
                        <User2 />
                        <Button variant="link"><Link to="/profile">View Profile</Link ></Button>
                      </div>
                  }

                  <div className='flex w-fit items-center cursor-pointer  ' >
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">Logout</Button>
                  </div>
                </div>

              )

            }

          </div>





        </div>





      </div>

    </div>
  )
}

export default Navbar