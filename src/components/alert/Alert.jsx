function Alert({ type, message }) {
  let alertClass = '';

  if (type === 'error') {
    alertClass = 'alert alert-danger';
  } else if (type === 'success') {
    alertClass = 'alert alert-success';
  }

  return (

    // <div className={`col-md-6 w-50 mx ${alertClass}`} role="alert">
    //   {message}
    // </div>
    <div className= {alertClass} role="alert "> 
    {message}
  </div>
  );
}

export default Alert;



// // // function Alert() {
// // //   return (
// // //     <>
// // //       <div className="alert alert-primary" role="alert">
// // //         A simple primary alert—check it out!
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default Alert;
