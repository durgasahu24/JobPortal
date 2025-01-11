import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { useDispatch } from 'react-redux';
import { setsearchQuery } from '@/redux/jobslice';
import { Label } from '../ui/label';
import { X } from 'lucide-react';


const fitlerData = [

  {
    fitlerType: "Location",
    array: ["Delhi", "Benglure", "Hydrabad", "Lucknow", "pune"]
  },
  {
    fitlerType: "Industry",
    array: ["Frontend", "Backend", "DataScience", "FullStack", "Ai&Ml"]
  },
  {
    fitlerType: "sallery",
    array: ["0-40k", "40k-50k", "50k-60k", "60k-70k", "70k-90k"]
  }

]


function FilterCard(props) {
  console.log("props : ", props);

  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedValue(value);
  }
  useEffect(() => {
    dispatch(setsearchQuery(selectedValue));
  }, [selectedValue]);


  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg hidden md:block'>Filter Jobs</h1>
      <hr className='mt-2 hidden md:block' />
      <RadioGroup className="hidden md:block " value={selectedValue} onValueChange={changeHandler} >
        {
          fitlerData.map((data, index) => (
            <div key={index}>
              <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
              {
                data.array.map((item, idx) => {
                  const itemId = `id${index}-${idx}`;
                  return (
                    <div key={itemId} className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item} id={itemId} />
                      <Label htmlFor={itemId}>{item}</Label>
                    </div>
                  );
                })
              }
            </div>
          ))
        }
      </RadioGroup>



      {/* slider */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-md z-50 transform transition-transform duration-300 ${props.filterOpen ? "translate-x-0" : "-translate-x-full"
        }`}>

        <div className="flex justify-end p-4">
          <button onClick={props.closefilterOpen} className="text-gray-800">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* <RadioGroup value={selectedValue} onValueChange={changeHandler} >
          {
            fitlerData.map((data, index) => (
              <div key={index} >
                <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
                {
                  data.array.map((item, idx) => {
                    const itemId = `id${index}-${idx}`;
                    return (
                      <div key={itemId} className='flex items-center space-x-2 my-2'>
                        <RadioGroupItem value={item} id={itemId} />
                        <Label htmlFor={itemId}>{item}</Label>
                      </div>
                    );
                  })
                }
              </div>
            ))
          }
        </RadioGroup> */}

        <RadioGroup
          value={selectedValue}
          onValueChange={changeHandler}
          className="flex flex-col items-start pl-4"
        >
          {
            fitlerData.map((data, index) => (
              <div key={index} className="text-center">
                <h1 className="font-bold text-lg">{data.fitlerType}</h1>
                {
                  data.array.map((item, idx) => {
                    const itemId = `id${index}-${idx}`;
                    return (
                      <div
                        key={itemId}
                        className="flex  space-x-2 my-2 justify-start"
                      >
                        <RadioGroupItem value={item} id={itemId} />
                        <Label htmlFor={itemId}>{item}</Label>
                      </div>
                    );
                  })
                }
              </div>
            ))
          }
        </RadioGroup>

      </div>



    </div>
  )
}

export { FilterCard }