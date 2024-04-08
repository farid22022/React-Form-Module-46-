
import './App.css'
import Grandpa from './Component/Grandpa/Grandpa'
// import ReusableForm from './Component/ReusableForm/ReusableForm'
// import HookForm from './Component/HookForm/HookForm'
// import RefForm from './Component/RefForm/RefForm'
// import SimpleForm from './Component/SimpleForm/SimpleForm'
// import StatefulForm from './Component/StatefulFom/StatefulForm'

function App() {

  // const handleSingUpSubmit =(data) =>{
  //   data.preventDefault();
  //   console.log('sign up data',data.target.name.value);
  //   console.log(data.target.email.value)
  //   console.log(data.target.password.value)
  // }
  // const handleUpdateProfile = (data) =>{
  //   console.log('profile update ',data);
  // }

  return (
    <>
      
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm 
        formTitle={'Sign Up'}handleSubmit={handleSingUpSubmit} >
          <div>
            <h2>Sing Up</h2>
            <p>Please sing Up right now</p>
          </div>
        </ReusableForm> */}
      {/* <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
