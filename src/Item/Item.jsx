

const Item = ({prod}) =>{
  return(
    <>
<div className="col-md-4 p-1" key={prod.id}>
      <div className="card w-100 mt-5">
        <div className="card-header">
          {`${prod.producto} - ${prod.caracteristica}`}
      
        </div>
      
      
        <div className="card-body figure">
          <img src={prod.imageURL} alt='' className="w-100 figure-img img-fluid" />
          </div>
        <div className="card-body btn">{prod.precio}</div>
      
    
      <div className="card-footer">
    
        <button className="btn btn-outline-primary btn-block">
          detalle del producto
        </button>
    
      </div>
      </div>
    </div>
    </>
  )
}


export default Item