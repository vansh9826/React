

const Navbar = () => {
  return (
    <div className='max-w-7xl flex justify-between bg-white items-center h-6 p-2 m-auto mt-4 border-b h-14 shadow-sm rounded-sm sticky top-0 '>
      <div>
        REACT
      </div>
      <div className='flex gap-x-3 '>
      <button className='bg-black rounded-full text-white p-2'> signup</button>
      <button className='bg-white rounded-full text-black'> signin</button>
      </div>
     
    </div>
  )
}

export default Navbar
