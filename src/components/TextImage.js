export default function TextImage(props) {
    function importAll(r) {
        return r.keys().map(r);
      }
      
      const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
    return (
        <div className='text-image'>
            <img src={props.src}/>
        </div>
    )
  }