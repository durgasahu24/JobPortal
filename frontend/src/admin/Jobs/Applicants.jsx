import Navbar from '@/components/shareable/Navbar'
import React, { useEffect } from 'react'
import ApplicantTable from './ApplicantTable'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/components/constant'
import { setAllApplicants } from '@/redux/applicationslice'


const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { applicants } = useSelector(store => store.application);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
                // console.log(res.data);
                dispatch(setAllApplicants(res.data.job));
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllApplicants();
    }, []);





    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length}</h1>
            <ApplicantTable />
        </div>

    )
}

export default Applicants