


import react from "react"
import Skeleton from '@mui/material/Skeleton';


const Skeletons = () => {
  return (
    <>

      <div className="skeletonDiv">
        <Skeleton animation="wave" sx={{ bgcolor: 'grey.900' }} width={980} height={330} sx={{ bgcolor: 'grey.900' }} variant="rounded" />
      </div>
      <div className="skeletonDiv">
        <Skeleton animation="wave" sx={{ bgcolor: 'grey.900' }} width={980} height={330} sx={{ bgcolor: 'grey.900' }} variant="rounded" />
      </div>
      <div className="skeletonDiv">
        <Skeleton animation="wave" sx={{ bgcolor: 'grey.900' }} width={980} height={330} sx={{ bgcolor: 'grey.900' }} variant="rounded" />
      </div>



    </>
  )
}

export default Skeletons;

