import React, { useEffect, useState } from 'react'
import Navbar from '../shareable/Navbar'
import { FilterCard } from '../Sections/FilterCard'
import { JobsCard } from '../Sections/JobsCard'
import { useSelector } from 'react-redux';
import "../../App.css"
// const jonArray = [1, 2, 3, 4, 5, 6, 7, 8];

function Jobs() {
  const [filterOpen,setFilterOpen] = useState(false);
  const {allJobs, searchQuery} = useSelector(store => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  const togglefilterOpen = () => {
    setFilterOpen(!filterOpen);
  }

  const closefilterOpen = () => {
    setFilterOpen(false);
  }
  

  useEffect(() => {
      if (searchQuery) {
          const filteredJobs = allJobs.filter((job) => {
              return job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  job.location.toLowerCase().includes(searchQuery.toLowerCase())
          })
          setFilterJobs(filteredJobs)
      } else {
          setFilterJobs(allJobs)
      }
  }, [allJobs, searchQuery]);



  return (
    <div>
      <Navbar />

      <div className='max-w-7xl mx-auto mt-10 md:px-7 w-screen h-screen'>

        <div className='flex gap-5'>
          <div className='w-2% md:w-20%'>
            <FilterCard closefilterOpen={closefilterOpen} togglefilterOpen={togglefilterOpen} filterOpen={filterOpen} />
          </div>




          {
           filterJobs?.length <= 0 ? <span>Job are not available </span> : (
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5 hide-scrollbar mr-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
                  {
                  filterJobs?.map((job) => (
                      <div  key={job?._id}>
                        <JobsCard job={job}/>
                      </div>
                    )) 
                  }
                </div>
              </div>)
          }
        </div>

        <div>
          <button
          onClick={togglefilterOpen}
           className='bg-red-500 p-3 rounded-lg fixed bottom-2 right-2 text-white md:hidden '>Jobs filter</button>
        </div>


        




      </div>











    </div>
  )
}

export default Jobs