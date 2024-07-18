import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import StaffList from "./components/StaffList";
import Home from "./components/Home";
import AdminDashboard from "./components/AdminDashboard";
import AddStaff from "./components/AddStaff";
import UpdateStaff from "./components/UpdateStaff";
import AddFarmer from "./components/AddFarmer";
import FRODashboard from "./components/froDashboard";
import ViewFarmer from "./components/ViewFarmer";
import UpdateFarmer from "./components/UpdateFarmer";
import AddFarmerpro from "./components/AddFarmerpro";
import ViewFarmerp from "./components/ViewFarmerP";
import UpdateFarmerp from "./components/updateF";
import StoreKeeperDashboard from "./components/StoreKeeperDashboard";
import AddFertilizer from "./components/AddFertilizer";
import ViewFertilizers from "./components/ViewInventory";
import ViewFertilizersd from "./components/directorView";
import ViewFertilizerDistribution from "./components/FertilizerDist";
import FarmerDashboard from "./components/farmerDashboard";
import UpdateFarmerprofile from "./components/UpdateFarmerProfile";
import ValidateCodeForm from "./components/Validatecode";
import ViewApplicationFarmer from "./components/ViewApplicationFarmer";
import DViewApplicationFarmer from "./components/DirectorAppView";
import ViewApprovedApplications from "./components/ApprovedApplication";
import ViewPendingApplications from "./components/PendingApplication";
import AssignedFertilizerForm from "./components/AssignedFertilizer";
import AssignedFertilizerForm1 from "./components/diretorAssign.js";
import ViewAssignedFertilizer from "./components/directorViewAssigniedFer.js";
import ViewAssignedFertilizers from "./components/FarmerViewAssignedCode";
import FarmerApplicationForm from "./components/farmerApply";
import FarmerViewApprovedApplications from "./components/FarmerViewApprovedApplication";
import FarmerViewPendingApplications from "./components/farmerViewPendingApp";
import DirectorDashboard from "./components/directorDashboard";
import ViewFarmerprofile from "./components/DirectorviewFarmer";
import DirectorViewApprovedApplications from "./components/directorViewApproved";
import DirectorViewAssignedFertilizers from "./components/directorViewAssigniedFer.js";
import ViewFertilizerDistributionD from "./components/directorViewDist.js";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/directorDashboard" element={<DirectorDashboard />} />
          <Route path="/farmer/viewApplication" element={<ViewApplicationFarmer />} />
          <Route path="/director/viewAssigned" element={<DirectorViewAssignedFertilizers />} />
          <Route path="/director/AssignFerti" element={<AssignedFertilizerForm />} />
          <Route path="/director/viewApplication" element={<DViewApplicationFarmer />} />
          <Route path="/admin/viewstaff" element={<StaffList />} />
          <Route path="/approvedApplication" element={<ViewApprovedApplications />} />
          <Route path="/farmer/approvedApplication" element={<FarmerViewPendingApplications />} />
          <Route path="/farmer/viewApprovedApp" element={<FarmerViewApprovedApplications />} />
          <Route path="/pendingApplication" element={<ViewPendingApplications/>} />
          <Route path="/fro/addFarmerp" element={<AddFarmerpro/>} />
          <Route path="/fro/viewFarmer" element={<ViewFarmer />} />
          <Route path="/sk/viewFarmer" element={<ViewFertilizers />} />
          <Route path="/farmer/viewAssignCode" element={<ViewAssignedFertilizers />} />
          <Route path="/director/assignFertilizer" element={<AssignedFertilizerForm1 />} />
          <Route path="/director/VieweDist" element={<ViewFertilizerDistributionD />} />
          <Route path="/dire/viewFarmer" element={<ViewFertilizersd />} />
          <Route path="/viewAss" element={<ViewAssignedFertilizer />} />
          <Route path="/storekeeper/view" element={<ViewFertilizerDistribution />} />
          <Route path="/farmerDashboard" element={<FarmerDashboard />} />
          <Route path="/fro/viewFarmerp" element={<ViewFarmerp />} />
          <Route path="/Storekeeper/codeValid" element={<ValidateCodeForm />} />
          <Route path="/farmer/apply" element={<FarmerApplicationForm/>} />
          <Route path="/fro/UpdateFarmerp/:id" element={<UpdateFarmerp />} />
          <Route path="/fro/UpdateFarmerpro/:id" element={<UpdateFarmerprofile />} />
          <Route path="/fro/UpdateFarmer/:id" element={<UpdateFarmer />} />
          <Route path="/fro/addFarmer" element={<AddFarmer />} />
          <Route path="/froDashboard" element={<FRODashboard />} />
          <Route path="/Storekeeper/Addfertilizer" element={<AddFertilizer />} />
          <Route path="/storekeeperDashboard" element={<StoreKeeperDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/admin/addStaff" element={<AddStaff />} />
          <Route path="/admin/updateStaff/:id" element={<UpdateStaff />} />
          <Route path="/director/viewFarmer" element={<ViewFarmerprofile />} />
          <Route path="/director/viewApprovedApplication" element={<DirectorViewApprovedApplications />} />
          <Route path="/director/viewfertilizer" element={<ViewFertilizersd />} />
          <Route path="/fro" element={<AddFarmer />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
