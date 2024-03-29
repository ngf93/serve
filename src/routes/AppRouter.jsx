import React from 'react'
import {createHashRouter, createRoutesFromElements, Route, RouterProvider, Navigate} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import AccountLayout from '../layouts/AccountLayout'
import Profile from '../pages/account/profile/Profile'
import Addresses from '../pages/account/profile/Addresses'
import About from '../pages/account/profile/About'
import ProfilePhoto from '../pages/account/profile/ProfilePhoto'
import Promotion from '../pages/account/Promotion'
import Specialties from '../pages/account/profile/Specialties'
import Services from '../pages/account/profile/Services'
import Registration from '../pages/Registration'
import ProfileLayout from '../layouts/ProfileLayout'
import Index from '../pages/account/Index'
import Settings from '../pages/account/Settings'
import Subscriptions from '../pages/account/Subscriptions'
import Search from '../pages/Search'
import OffersLayout from '../layouts/OffersLayout'
import OffersNew from '../pages/account/offers/OffersNew'
import OffersReacted from '../pages/account/offers/OffersReacted'
import OfferPage from '../pages/account/offers/OfferPage'


const router = createHashRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />}/>
            <Route path="registration" element={<Registration/>}/>
            <Route path="*" element={<NotFound />}/>
        </Route>
        <Route path="search/*" element={<Search/>}/>
        <Route path="account" element={<AccountLayout/>}>
            <Route index element={<Navigate to="your-orders" replace={true} />} />
            <Route path="your-orders" element={<Index/>}/>
            <Route path="offers" element={<OffersLayout />}>
                <Route index element={<Navigate to="new" replace={true} />} />
                <Route path="new" element={<OffersNew/>}/>
                <Route path="reacted" element={<OffersReacted/>}/>
                <Route path="suggested" element={<OffersNew/>}/>
            </Route>
            <Route path="offers/:offerId" element={<OfferPage/>} />
            <Route path="profile" element={<ProfileLayout/>}>
                <Route index element={<Profile/>}/>
                <Route path="addresses" element={<Addresses/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="photo" element={<ProfilePhoto/>}/>
                <Route path="specialties" element={<Specialties/>}/>
                <Route path="services" element={<Services/>}/>
            </Route>
            <Route path="promotion" element={<Promotion/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="subscriptions" element={<Subscriptions/>}/>
        </Route>
        </>
    )
)

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter;