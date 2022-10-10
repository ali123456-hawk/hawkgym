import { Box } from '@mui/material'
import React from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import { useState } from 'react';
import Exercises from '../components/Exercises';

function Home() {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
            <Box>
         <HeroBanner />
          <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises  setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
            </Box>
  )
}

export default Home