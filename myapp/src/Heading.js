import './Heading.css';

function Heading() {
  return (
    <div className='w-full h-10 flex justify-between'>
        <div className='p-4'>logo</div>
        <div className='p-4'>menu</div>
        <div className='p-4'>account</div>
    </div>
  );
}

export default Heading;