import HomePage from "./page/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searchpages from "./page/Searchpages";
import DetaillePage from "./page/DetaillePage";
import NotFound from "./page/NotFoud";
import Dashbord from "./apps/pro-dashbord/Layout/Dashbord";
import AddListing from "./apps/pro-dashbord/addListing/AddListing";
import MyListings from "./apps/pro-dashbord/Mylisting/MyListings";
import DashboardItem from "./apps/pro-dashbord/dashboard-main/DashboardItem";
import Connexion from "./layout/Connexion";
import DashbFavorite from "./apps/pro-dashbord/my-favorite/DashbFavorite";
import SavedSearch from "./apps/pro-dashbord/saved-search/SavedSearch";
import Profile from "./apps/pro-dashbord/profile/Profile";
import Logout from "./apps/pro-dashbord/logout/Logout";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchpages" element={<Searchpages/>} />
        <Route path="/detaillepage/:id" element={<DetaillePage/>} />
        <Route path="/connexion" element={<Connexion/>} />
        <Route path="/pro-dashbord/dashboard" element={
        <Dashbord >
          <DashboardItem />
        </Dashbord>
        }/>
        <Route path="/pro-dashbord/my-listings" element={
        <Dashbord >
          <MyListings />
        </Dashbord>
        }/>
        <Route path="/pro-dashbord/add-listings" element={
        <Dashbord >
          <AddListing />
        </Dashbord>
        } />
        <Route path="/pro-dashbord/my-favorites" element={
        <Dashbord >
          <DashbFavorite />
        </Dashbord>
        } />
        <Route path="/pro-dashbord/saved-search" element={
        <Dashbord >
          <SavedSearch/>
        </Dashbord>
        } />
        <Route path="/pro-dashbord/my-profile" element={
        <Dashbord >
          <Profile/>
        </Dashbord>
        } />
        <Route path="/pro-dashbord/logout" element={<Logout/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
     
    </BrowserRouter>
  </>
  )
}

export default App
