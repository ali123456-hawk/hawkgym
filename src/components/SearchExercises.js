import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useState,useEffect } from 'react';
import {fetchData,fetchOptions} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
    const [search,setSearch] = useState('');
    const [bodyParts ,setBodyParts] = useState([])        
   
   useEffect(() => {
      const fetchExercisesData = async() =>{
         const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',fetchOptions)
         console.log(bodyPartsData);
         setBodyParts(['all',...bodyPartsData]);
      }

      fetchExercisesData();
   }, [])
   
   
   
   
   
   
   
   
    const handleSearch = async() =>{
        if (search){
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',fetchOptions)

        const searchExercises = exercisesData.filter((exercise)=>exercise.name.toLowerCase().includes(search)||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
        )  
        
        setExercises(searchExercises);
       
    }



    } 
    
    
    
    
    
    
    
    
    
    return (
        <Stack alignItems="center" justifyContent="center" marginTop="37px" p="20px" >
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
                Awesome Exercises  You<br />Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    height="76px"
                    placeholder="Search Exercises"
                    type="text"
                    value={search}
                    onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
                    sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                />

                <Button className="search-btn"  onClick={handleSearch}  sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}>
                    Search
                </Button>

            </Box>

             <Box width='100%'>
                <HorizontalScrollbar  data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
            </Box>   

        </Stack>
    )
}

export default SearchExercises