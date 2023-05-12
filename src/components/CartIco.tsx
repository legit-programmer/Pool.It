
interface props {
  count: number;
}

const CartIco = ({count}:props) => {
  return (
    <div className="d-flex">
        <button className='btn btn-outlined-dark'><img style={{width:'40px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBy2pnJqbMu79A9sxJZHTKu-lPgfzOb7x19AknRKnL&s" alt="" /></button>
        <p className="btn-outlined-dark">{count}</p>
    </div>
  )
}

export default CartIco