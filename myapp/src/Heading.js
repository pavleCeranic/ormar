import './Heading.css';

function Heading() {
  return (
    <div className='w-full flex justify-between'>
      <div className='self-center text-center m-5 w-36 '>logo</div>
      <Menu label="Collections" items={['Item 1', 'Item 2', 'Item 3']} />
      <div className='self-center text-center m-5 w-36 hover:font-bold transition-all duration-200 ease-in-out hover:bg-gray-300'>Account</div>
    </div>
  );
}

const Menu = ({ label, items }) => {
  return (
    <div className="self-center relative group">
      <span className="text-center m-5 w-36 hover:font-bold transition-all duration-200 ease-in-out hover:bg-gray-300">
        {label}
      </span>
      <div className="hidden group-hover:block absolute z-10 bg-white p-2 mt-2 space-y-2 shadow">
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Heading;